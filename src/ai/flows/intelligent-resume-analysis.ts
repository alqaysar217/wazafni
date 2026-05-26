'use server';
/**
 * @fileOverview An AI agent for analyzing resumes.
 *
 * - intelligentResumeAnalysis - A function that handles the resume analysis process.
 * - IntelligentResumeAnalysisInput - The input type for the intelligentResumeAnalysis function.
 * - IntelligentResumeAnalysisOutput - The return type for the intelligentResumeAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const IntelligentResumeAnalysisInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "The job seeker's resume, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  jobDescription: z
    .string()
    .optional()
    .describe('Optional: The description of the job the resume is being optimized for.'),
});
export type IntelligentResumeAnalysisInput = z.infer<typeof IntelligentResumeAnalysisInputSchema>;

// Output Schema
const IntelligentResumeAnalysisOutputSchema = z.object({
  extractedSkills: z
    .array(z.string())
    .describe('A list of key skills extracted from the resume, in Arabic.'),
  atsCompatibilityScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      'An estimated score (0-100) indicating how well the resume is optimized for Applicant Tracking Systems (ATS), considering the provided job description if available. The explanation for the score should be in Arabic.'
    ),
  suggestionsForImprovement: z
    .string()
    .describe(
      'Detailed suggestions on how to improve the resume for better ATS compatibility and overall impact, in Arabic. Include formatting, keyword optimization, and content suggestions.'
    ),
  careerRecommendations: z
    .string()
    .describe(
      'Recommendations for potential career paths or roles based on the extracted skills and experience, in Arabic.'
    ),
});
export type IntelligentResumeAnalysisOutput = z.infer<typeof IntelligentResumeAnalysisOutputSchema>;

export async function intelligentResumeAnalysis(
  input: IntelligentResumeAnalysisInput
): Promise<IntelligentResumeAnalysisOutput> {
  return intelligentResumeAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentResumeAnalysisPrompt',
  input: {schema: IntelligentResumeAnalysisInputSchema},
  output: {schema: IntelligentResumeAnalysisOutputSchema},
  prompt: `أنت مدرب مهني وخبير في تحليل السير الذاتية متخصص في تحسين السير الذاتية لأنظمة تتبع المتقدمين (ATS) وتطوير المسار الوظيفي. مهمتك هي تحليل السيرة الذاتية المقدمة، استخراج المعلومات الأساسية، حساب درجة توافق مع ATS، وتقديم توصيات قابلة للتنفيذ.\n\nحلل محتوى السيرة الذاتية التالي:\nResume: {{media url=resumeDataUri}}\n\n{{#if jobDescription}}\nبالنظر إلى الوصف الوظيفي التالي لتحديد مدى التوافق مع أنظمة تتبع المتقدمين (ATS):\nالوصف الوظيفي: {{{jobDescription}}}\n{{/if}}\n\nبناءً على السيرة الذاتية (والوصف الوظيفي إن وجد)، قم بما يلي:\n1.  **استخراج المهارات الأساسية**: حدد وقائمة جميع المهارات التقنية والشخصية الهامة.\n2.  **حساب درجة توافق ATS**: قدر درجة من 0 إلى 100 توضح مدى تحسين السيرة الذاتية لأنظمة تتبع المتقدمين (ATS)، مع الأخذ في الاعتبار الوصف الوظيفي إذا تم توفيره. اشرح هذه الدرجة.\n3.  **تقديم اقتراحات للتحسين**: قدم نصائح محددة وقابلة للتنفيذ لتعزيز درجة ATS للسيرة الذاتية، وسهولة قراءتها، وفعاليتها بشكل عام. قم بتضمين اقتراحات للتنسيق، وتحسين الكلمات المفتاحية، والمحتوى.\n4.  **تقديم توصيات مهنية**: بناءً على المهارات والخبرة المحددة، اقترح مسارات وظيفية محتملة أو أنواع أدوار يمكن للباحث عن عمل متابعتها.\n\nيجب أن تكون جميع الحقول النصية في الإخراج باللغة العربية. أعد الإخراج بالتنسيق JSON المحدد.`,
});

const intelligentResumeAnalysisFlow = ai.defineFlow(
  {
    name: 'intelligentResumeAnalysisFlow',
    inputSchema: IntelligentResumeAnalysisInputSchema,
    outputSchema: IntelligentResumeAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

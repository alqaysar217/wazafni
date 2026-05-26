'use server';
/**
 * @fileOverview Provides an AI-powered job recommendation system.
 *
 * - recommendJobs - A function that provides personalized job recommendations based on seeker data.
 * - JobRecommendationInput - The input type for the recommendJobs function.
 * - JobRecommendationOutput - The return type for the recommendJobs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobRecommendationInputSchema = z.object({
  seekerProfile: z.string().describe('A detailed description of the job seeker\'s profile, including experience, education, and career goals.'),
  seekerSkills: z.array(z.string()).describe('A list of skills the job seeker possesses.'),
  applicationHistory: z.array(z.string()).describe('A list of job applications the seeker has submitted, e.g., "Applied for Software Engineer at Google"'),
  currentSearchQuery: z.string().optional().describe('The job seeker\'s current search query, if any.'),
  locationPreference: z.string().optional().describe('The job seeker\'s preferred job location.'),
  jobCategoryPreference: z.string().optional().describe('The job seeker\'s preferred job category.'),
}).describe('Input for generating personalized job recommendations.');
export type JobRecommendationInput = z.infer<typeof JobRecommendationInputSchema>;

const JobRecommendationOutputSchema = z.object({
  recommendations: z.array(z.object({
    jobTitle: z.string().describe('The title of the recommended job.'),
    companyName: z.string().describe('The company offering the job.'),
    jobDescriptionSnippet: z.string().describe('A brief, concise summary of the job description highlighting key responsibilities and qualifications.'),
    matchScore: z.number().min(0).max(100).describe('A compatibility score (0-100%) indicating how well the job seeker\'s profile matches this job.'),
    jobId: z.string().describe('A unique identifier for the job posting. Example: "wz-job-12345"'),
    reasonsForMatch: z.array(z.string()).describe('Specific reasons why this job is a good match for the seeker, based on their profile and skills.'),
  })).describe('A list of personalized job recommendations.');
}).describe('Output containing personalized job recommendations.');
export type JobRecommendationOutput = z.infer<typeof JobRecommendationOutputSchema>;

export async function recommendJobs(input: JobRecommendationInput): Promise<JobRecommendationOutput> {
  return aiJobRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiJobRecommendationsPrompt',
  input: {schema: JobRecommendationInputSchema},
  output: {schema: JobRecommendationOutputSchema},
  prompt: `You are an expert career advisor and an advanced AI job matching system for Wazafni (وظفني).
Your task is to provide highly personalized job recommendations for a job seeker.

Your recommendations, including job titles, descriptions, and reasons for match, MUST be in Arabic.

Analyze the job seeker's profile, skills, and application history to find the most relevant opportunities. If a current search query, location, or category preference is provided, prioritize jobs that align with these preferences.

For each recommendation, provide:
- The job title.
- The company offering the job.
- A brief, concise summary of the job description highlighting key responsibilities and qualifications.
- A match score (0-100%) indicating the compatibility between the seeker and the job.
- A unique identifier for the job posting (e.g., 'wz-job-12345').
- Specific reasons why this job is a good match, linking back to the seeker's profile, skills, or history.

Ensure the recommendations are diverse yet highly relevant. Focus on jobs that the seeker has a strong chance of securing.

Job Seeker Profile:
{{{seekerProfile}}}

Job Seeker Skills:
{{#if seekerSkills.length}}
{{#each seekerSkills}}- {{{this}}}
{{/each}}
{{else}}
No specific skills provided.
{{/if}}

Application History:
{{#if applicationHistory.length}}
{{#each applicationHistory}}- {{{this}}}
{{/each}}
{{else}}
No application history.
{{/if}}

{{#if currentSearchQuery}}
Current Search Query: "{{{currentSearchQuery}}}"
{{/if}}

{{#if locationPreference}}
Preferred Location: {{{locationPreference}}}
{{/if]}

{{#if jobCategoryPreference}}
Preferred Job Category: {{{jobCategoryPreference}}}
{{/if}}

Generate 3-5 job recommendations.`,
});

const aiJobRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiJobRecommendationsFlow',
    inputSchema: JobRecommendationInputSchema,
    outputSchema: JobRecommendationOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

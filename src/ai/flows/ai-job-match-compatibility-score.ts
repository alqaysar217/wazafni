'use server';
/**
 * @fileOverview A Genkit flow that calculates an AI-powered compatibility score
 * between a job posting and a resume.
 *
 * - aiJobMatchCompatibilityScore - A function that handles the compatibility score calculation.
 * - AiJobMatchCompatibilityInput - The input type for the aiJobMatchCompatibilityScore function.
 * - AiJobMatchCompatibilityOutput - The return type for the aiJobMatchCompatibilityScore function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const AiJobMatchCompatibilityInputSchema = z.object({
  jobDescription: z.string().describe('The full text content of the job posting.'),
  resumeContent: z.string().describe('The full text content of the candidate\'s resume.'),
});
export type AiJobMatchCompatibilityInput = z.infer<typeof AiJobMatchCompatibilityInputSchema>;

// Output Schema
const AiJobMatchCompatibilityOutputSchema = z.object({
  compatibilityScore: z.number().min(0).max(100).describe('A percentage score (0-100) indicating how well the resume matches the job description.'),
  reasoning: z.string().describe('A detailed explanation for the compatibility score, highlighting key matching skills, experiences, and potential gaps.'),
});
export type AiJobMatchCompatibilityOutput = z.infer<typeof AiJobMatchCompatibilityOutputSchema>;

// Prompt Definition
const aiJobMatchCompatibilityPrompt = ai.definePrompt({
  name: 'aiJobMatchCompatibilityPrompt',
  input: { schema: AiJobMatchCompatibilityInputSchema },
  output: { schema: AiJobMatchCompatibilityOutputSchema },
  prompt: `You are an expert AI recruitment assistant. Your task is to analyze a job description and a candidate's resume, then determine a compatibility score (0-100%) and provide detailed reasoning.

Consider the following job description:
---
{{jobDescription}}
---

Consider the following resume content:
---
{{resumeContent}}
---

Based on the above, calculate a compatibility score from 0 to 100, where 100 means a perfect match. Provide a detailed explanation for your score, specifically mentioning matching keywords, required skills, experiences, and any noticeable discrepancies or areas for improvement.

Your output must be a JSON object conforming to the following schema:
{{output.schema}}`,
});

// Flow Definition
const aiJobMatchCompatibilityFlow = ai.defineFlow(
  {
    name: 'aiJobMatchCompatibilityFlow',
    inputSchema: AiJobMatchCompatibilityInputSchema,
    outputSchema: AiJobMatchCompatibilityOutputSchema,
  },
  async (input) => {
    const {output} = await aiJobMatchCompatibilityPrompt(input);
    if (!output) {
      throw new Error('AI failed to generate a compatibility score.');
    }
    return output;
  }
);

// Wrapper function
export async function aiJobMatchCompatibilityScore(
  input: AiJobMatchCompatibilityInput
): Promise<AiJobMatchCompatibilityOutput> {
  return aiJobMatchCompatibilityFlow(input);
}

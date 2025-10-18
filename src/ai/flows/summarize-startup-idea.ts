'use server';
/**
 * @fileOverview Startup idea summarization flow.
 *
 * - summarizeStartupIdea - A function that summarizes a startup idea.
 * - SummarizeStartupIdeaInput - The input type for the summarizeStartupIdea function.
 * - SummarizeStartupIdeaOutput - The return type for the summarizeStartupIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeStartupIdeaInputSchema = z.object({
  idea: z
    .string()
    .describe('The startup idea to summarize.'),
});
export type SummarizeStartupIdeaInput = z.infer<typeof SummarizeStartupIdeaInputSchema>;

const SummarizeStartupIdeaOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the startup idea.'),
});
export type SummarizeStartupIdeaOutput = z.infer<typeof SummarizeStartupIdeaOutputSchema>;

export async function summarizeStartupIdea(input: SummarizeStartupIdeaInput): Promise<SummarizeStartupIdeaOutput> {
  return summarizeStartupIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeStartupIdeaPrompt',
  input: {schema: SummarizeStartupIdeaInputSchema},
  output: {schema: SummarizeStartupIdeaOutputSchema},
  prompt: `Summarize the following startup idea in a concise manner, highlighting its core value proposition:\n\n{{{idea}}}`,
});

const summarizeStartupIdeaFlow = ai.defineFlow(
  {
    name: 'summarizeStartupIdeaFlow',
    inputSchema: SummarizeStartupIdeaInputSchema,
    outputSchema: SummarizeStartupIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

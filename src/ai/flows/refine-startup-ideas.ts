'use server';

/**
 * @fileOverview Refines startup ideas based on user feedback and additional interests.
 *
 * - refineStartupIdeas - A function that refines startup ideas.
 * - RefineStartupIdeasInput - The input type for the refineStartupIdeas function.
 * - RefineStartupIdeasOutput - The return type for the refineStartupIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineStartupIdeasInputSchema = z.object({
  initialIdeas: z
    .string()
    .describe('The initial generated startup ideas to refine.'),
  feedback: z
    .string()
    .describe('User feedback or additional interests to tailor the ideas.'),
});
export type RefineStartupIdeasInput = z.infer<typeof RefineStartupIdeasInputSchema>;

const RefineStartupIdeasOutputSchema = z.object({
  refinedIdeas: z
    .string()
    .describe('The refined startup ideas based on user feedback.'),
});
export type RefineStartupIdeasOutput = z.infer<typeof RefineStartupIdeasOutputSchema>;

export async function refineStartupIdeas(
  input: RefineStartupIdeasInput
): Promise<RefineStartupIdeasOutput> {
  return refineStartupIdeasFlow(input);
}

const refineStartupIdeasPrompt = ai.definePrompt({
  name: 'refineStartupIdeasPrompt',
  input: {schema: RefineStartupIdeasInputSchema},
  output: {schema: RefineStartupIdeasOutputSchema},
  prompt: `You are a startup idea refinement expert. Given the initial startup ideas and user feedback, refine the ideas to be more specific and relevant to the user's vision.\n\nInitial Startup Ideas: {{{initialIdeas}}}\nUser Feedback: {{{feedback}}}\n\nRefined Startup Ideas:`,
});

const refineStartupIdeasFlow = ai.defineFlow(
  {
    name: 'refineStartupIdeasFlow',
    inputSchema: RefineStartupIdeasInputSchema,
    outputSchema: RefineStartupIdeasOutputSchema,
  },
  async input => {
    const {output} = await refineStartupIdeasPrompt(input);
    return output!;
  }
);

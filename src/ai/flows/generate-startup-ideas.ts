'use server';

/**
 * @fileOverview Startup idea generator based on user interests.
 *
 * - generateStartupIdeas - A function that generates startup ideas.
 * - GenerateStartupIdeasInput - The input type for the generateStartupIdeas function.
 * - GenerateStartupIdeasOutput - The return type for the generateStartupIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStartupIdeasInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the users interests to generate startup ideas for.'),
});
export type GenerateStartupIdeasInput = z.infer<typeof GenerateStartupIdeasInputSchema>;

const GenerateStartupIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of startup ideas based on the users interests.'),
});
export type GenerateStartupIdeasOutput = z.infer<typeof GenerateStartupIdeasOutputSchema>;

export async function generateStartupIdeas(input: GenerateStartupIdeasInput): Promise<GenerateStartupIdeasOutput> {
  return generateStartupIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStartupIdeasPrompt',
  input: {schema: GenerateStartupIdeasInputSchema},
  output: {schema: GenerateStartupIdeasOutputSchema},
  prompt: `You are an innovative startup idea generator. Generate a list of startup ideas based on the following user interests:

Interests: {{{interests}}}

Ensure that the output is an array of strings, where each string is a startup idea. Focus on unique and actionable ideas.`,
});

const generateStartupIdeasFlow = ai.defineFlow(
  {
    name: 'generateStartupIdeasFlow',
    inputSchema: GenerateStartupIdeasInputSchema,
    outputSchema: GenerateStartupIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

import {
  generateStartupIdeas,
  type GenerateStartupIdeasInput,
} from '@/ai/flows/generate-startup-ideas';
import { z } from 'zod';

const actionSchema = z.object({
  interests: z
    .string()
    .min(3, { message: 'Please enter at least 3 characters for your interests.' })
    .max(200, { message: 'Interests must be 200 characters or less.' }),
});

export async function generateStartupIdeasAction(params: GenerateStartupIdeasInput) {
  try {
    const validatedParams = actionSchema.safeParse(params);
    if (!validatedParams.success) {
      return { error: validatedParams.error.errors.map((e) => e.message).join(', ') };
    }

    const result = await generateStartupIdeas(validatedParams.data);
    if (!result || !result.ideas || result.ideas.length === 0) {
      return { error: 'Could not generate ideas. Try a different topic.' };
    }
    return { data: result };
  } catch (e) {
    console.error(e);
    // Return a generic error message to the client
    return { error: 'An unexpected error occurred while generating ideas. Please try again later.' };
  }
}

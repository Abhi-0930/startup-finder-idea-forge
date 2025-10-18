import { config } from 'dotenv';
config();

import '@/ai/flows/generate-startup-ideas.ts';
import '@/ai/flows/summarize-startup-idea.ts';
import '@/ai/flows/refine-startup-ideas.ts';
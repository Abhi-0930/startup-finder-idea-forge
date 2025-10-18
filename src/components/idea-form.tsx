'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles } from 'lucide-react';

type IdeaFormProps = {
  onSubmit: (interests: string) => Promise<void>;
  isLoading: boolean;
};

export function IdeaForm({ onSubmit, isLoading }: IdeaFormProps) {
  const [interests, setInterests] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (interests.trim() && !isLoading) {
      onSubmit(interests);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-full">
        <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="e.g., sustainable farming, AI, vintage fashion..."
          className="flex-grow pl-10 bg-card"
          disabled={isLoading}
          aria-label="Your Interests"
        />
      </div>
      <Button type="submit" disabled={isLoading || !interests.trim()} className="w-full sm:w-auto shrink-0">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Forging...
          </>
        ) : (
          'Generate Ideas'
        )}
      </Button>
    </form>
  );
}

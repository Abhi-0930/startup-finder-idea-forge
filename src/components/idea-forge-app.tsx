'use client';

import { useState } from 'react';
import { IdeaForm } from '@/components/idea-form';
import { IdeaList } from '@/components/idea-list';
import { generateStartupIdeasAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export function IdeaForgeApp() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateIdeas = async (interests: string) => {
    setIsLoading(true);
    setIdeas([]);

    const result = await generateStartupIdeasAction({ interests });

    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error Generating Ideas',
        description: result.error,
      });
    } else if (result.data) {
      setIdeas(result.data.ideas);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-headline">
          Turn Your Interests into Innovation
        </h2>
        <p className="text-lg text-muted-foreground">
          Enter a few of your passions and let our AI forge a list of unique startup ideas for you.
        </p>
      </div>
      <IdeaForm onSubmit={handleGenerateIdeas} isLoading={isLoading} />
      <IdeaList ideas={ideas} isLoading={isLoading} />
    </div>
  );
}

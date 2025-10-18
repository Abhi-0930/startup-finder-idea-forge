import { IdeaCard } from './idea-card';
import { Skeleton } from './ui/skeleton';

type IdeaListProps = {
  ideas: string[];
  isLoading: boolean;
};

export function IdeaList({ ideas, isLoading }: IdeaListProps) {
  const hasIdeas = ideas.length > 0;

  return (
    <div className="mt-12">
      {isLoading && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground font-headline">Forging Ideas...</h3>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      )}

      {!isLoading && hasIdeas && (
        <div>
          <h3 className="text-xl font-semibold text-foreground font-headline mb-4">Your Forged Ideas</h3>
          <div className="space-y-4">
            {ideas.map((idea, index) => (
              <IdeaCard key={index} idea={idea} index={index} />
            ))}
          </div>
        </div>
      )}

      {!isLoading && !hasIdeas && (
        <div className="text-center text-muted-foreground border-2 border-dashed border-border rounded-lg p-12">
          <p className="font-semibold">Your generated ideas will appear here.</p>
          <p className="text-sm">Enter your interests above and click "Generate Ideas" to start.</p>
        </div>
      )}
    </div>
  );
}

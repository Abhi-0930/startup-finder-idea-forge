'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

type IdeaCardProps = {
  idea: string;
  index: number;
};

export function IdeaCard({ idea, index }: IdeaCardProps) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4 flex items-start gap-4">
          <span className="p-2 bg-accent/20 rounded-md mt-1 flex-shrink-0">
            <Lightbulb className="h-5 w-5 text-primary" />
          </span>
          <p className="flex-1 text-card-foreground pt-1">{idea}</p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Lightbulb } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <Lightbulb className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-primary font-headline">IdeaForge</h1>
        </div>
      </div>
    </header>
  );
}

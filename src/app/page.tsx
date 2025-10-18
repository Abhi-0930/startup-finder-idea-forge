import { Header } from '@/components/header';
import { IdeaForgeApp } from '@/components/idea-forge-app';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <IdeaForgeApp />
      </main>
    </div>
  );
}

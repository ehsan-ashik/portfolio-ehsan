import { NunitoSansFont } from '@/app/fonts';
import { researchdata } from '@/data/userdata';
import React from 'react';
import { ProjectOverviewCard } from './ProjectOverviewCard';
import Link from 'next/link';

// Fisher-Yates shuffle algorithm for random selection
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function ResearchOverview() {
  // Get all visible research papers and randomly select 3
  const visibleResearch = researchdata.filter(research => research.visible);
  const featuredResearch = shuffleArray(visibleResearch).slice(0, 3);

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className={`${NunitoSansFont.className} text-2xl font-bold opacity-90`}>
          Featured Research
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Recent research contributions in usable security and privacy. For a complete list, see <Link href="/research">research page</Link>.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredResearch.map((research) => (
          <ProjectOverviewCard
            key={research.rank} // Use rank as key for better React performance
            title={research.title}
            description={research.description}
            stack={research.stack}
            linkHref="/research" // Point to research page instead of projects
          />
        ))}
      </div>
    </section>
  );
}

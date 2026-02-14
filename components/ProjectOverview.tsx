import { projectsdata } from '@/data/userdata';
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

export function ProjectOverview() {
  const visibleProjects = projectsdata.filter((project) => project.visible);
  const featuredProjects = shuffleArray(visibleProjects).slice(0, 3);

  return (
    <section className="py-10">
      <div className="mb-8">
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-2xl font-semibold tracking-tight"
        >
          Featured Projects
        </h2>
        <p className="font-light text-muted-foreground pt-2">
          A selection of projects I've built. For a complete list, see{' '}
          <Link href="/projects">projects page</Link>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectOverviewCard
            key={project.rank}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { researchdata } from '@/data/userdata';
import { ResearchCard } from '@/components/ResearchCard';

export default function Page() {
  return (
    <section className="pt-10">
      <h1
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-center md:text-left text-4xl md:text-5xl font-light tracking-tight"
      >
        My Research
      </h1>
      <p className="pt-4 font-light text-muted-foreground">
        Here are some of the research projects that I've worked on, each with a
        brief description to introduce you with my research.
      </p>
      <div className="pt-14 flex flex-col gap-14">
        {researchdata
          .filter((proj) => proj.visible)
          .sort((proj1, proj2) => (proj1.rank > proj2.rank ? 1 : -1))
          .map((project) => (
            <div key={project.rank}>
              <ResearchCard {...project} />
              <div className="pt-6">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

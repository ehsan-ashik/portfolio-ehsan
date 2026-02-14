import React from 'react';
import { projectsdata, profiledata } from '@/data/userdata';
import { ProjectCard } from '@/components/ProjectCard';

export default function Page() {
  return (
    <section className="pt-16">
      <h1
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-center md:text-left text-4xl md:text-5xl font-light tracking-tight"
      >
        My Projects
      </h1>
      <p className="pt-6 font-light text-muted-foreground">
        Explore a curated selection of my projects, each with a brief
        description to give you a taste of what I've been working on. For a
        complete list and in-depth details,{' '}
        <a
          href={profiledata.github_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          check out my GitHub
        </a>
        !
      </p>
      <div className="pt-14 flex flex-col gap-14">
        {projectsdata
          .filter((proj) => proj.visible)
          .sort((proj1, proj2) => (proj1.rank > proj2.rank ? 1 : -1))
          .map((project) => (
            <div key={project.rank}>
              <ProjectCard {...project} />
              <div className="pt-6">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

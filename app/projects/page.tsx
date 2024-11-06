import React from 'react';
import { projectsdata, profiledata } from '@/data/userdata';
import { ProjectCard } from '@/components/ProjectCard';
import { NunitoSansFont } from '../fonts';

export default function Page() {
  return (
    <section className="pt-10">
      <h1
        className={`${NunitoSansFont.className} text-center md:text-left text-4xl font-normal opacity-95`}
      >
        My Projects
      </h1>
      <p className="pt-4 font-light opacity-90">
        Explore a curated selection of my projects, each with a brief
        description to give you a taste of what I've been working on. For a
        complete list and in-depth details, {' '}
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
          .filter(proj => proj.visible)
          .sort((proj1, proj2) => (proj1.rank > proj2.rank ? 1 : -1))
          .map((project) => (
            <div key={project.rank}>
              <ProjectCard {...project} />
              <div className="pt-6 border-b"></div>
            </div>
          ))}
      </div>
    </section>
  );
}

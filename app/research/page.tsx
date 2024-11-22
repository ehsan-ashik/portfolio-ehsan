import React from 'react'
import { NunitoSansFont } from '../fonts';
import { researchdata } from '@/data/userdata';
import { ResearchCard } from '@/components/ResearchCard';

export default function Page() {
  return (
    <section className="pt-10">
      <h1
        className={`${NunitoSansFont.className} text-center md:text-left text-4xl font-normal opacity-95`}
      >
        My Reseach
      </h1>
      <p className="pt-4 font-light opacity-90">
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
              <div className="pt-6 border-b"></div>
            </div>
          ))}
      </div>
    </section>
  );
}

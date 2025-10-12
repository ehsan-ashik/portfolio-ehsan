import { NunitoSansFont } from '@/app/fonts';
import { skillsdata } from '@/data/userdata';
import React from 'react'

export function SkillsCard() {
  return (
    <section>
      <h3
        className={`${NunitoSansFont.className} pt-4 text-2xl font-bold opacity-90`}
      >
        Technologies
      </h3>
      <p className="font-light py-6 opacity-90 leading-7">
        Here is a curated list of technologies I've been relying on for both professional
        work and personal projects. 
      </p>
      <div className="space-y-3 pl-2 md:pl-4">
        {skillsdata.map((skillitem, idx) => (
          <div key={idx} className="text-sm md:text-base leading-relaxed break-words">
            <span className="font-semibold text-foreground mr-2 inline-block min-w-fit">
              {skillitem.category}:
            </span>
            <span className="text-muted-foreground">
              {skillitem.values.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

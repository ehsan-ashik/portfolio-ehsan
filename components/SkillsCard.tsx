import { NunitoSansFont } from '@/app/fonts';
import { skillsdata } from '@/data/userdata';
import React from 'react'

export function SkillsCard() {
  return (
    <section>
      <h3
        className={`${NunitoSansFont.className} text-2xl font-bold opacity-95`}
      >
        Technologies
      </h3>
      <p className="font-light pt-2 opacity-90 leading-7">
        Here is a curated list of technologies I've been relying on for both professional
        work and personal projects. 
      </p>
      <div className="space-y-2 pt-4">
        {skillsdata.map((skillitem, idx) => (
          <div key={idx} className="text-sm md:text-base leading-relaxed break-words">
            <span className="font-semibold text-foreground mr-2 inline-block min-w-fit">
              {skillitem.category}:
            </span>
            <span className="text-muted-foreground text-sm md:text-base">
              {skillitem.values.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

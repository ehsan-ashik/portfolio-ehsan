import { NunitoSansFont } from '@/app/fonts';
import { skillsdata } from '@/data/userdata';
import React from 'react'
import { Badge } from '@/components/ui/badge';


export function SkillsCard() {
  return (
    <section>
      <h3
        className={`${NunitoSansFont.className}  pt-4 text-2xl font-bold opacity-90`}
      >
        Technologies
      </h3>
      <p className="font-light py-6 opacity-90 leading-7">
        Here is a curated list of technologies I've been relying on for both professional
        work and personal projects. 
      </p>
      <div className="rounded-lg py-4 flex flex-col gap-4 pl-6">
        {skillsdata.map((skillitem, idx) => (
          <div key={idx} className="flex gap-16 lg:gap-6 pb-4 md:pb-2 border-b md:border-none">
            <span className="flex-1 italic text-muted-foreground font-semibold">
              {skillitem.category}
            </span>
            <div className=" flex-1 flex flex-col md:flex-row gap-2 flex-wrap">
              {skillitem.values.map((skill, idx) => (
                <div key={idx}>
                  <Badge variant="default">{skill}</Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

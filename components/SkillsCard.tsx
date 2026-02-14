import { skillsdata } from '@/data/userdata';
import React from 'react';

export function SkillsCard() {
  return (
    <section>
      <h3
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-2xl font-semibold tracking-tight"
      >
        Technologies
      </h3>
      <p className="font-light pt-3 text-muted-foreground leading-7">
        Here is a curated list of technologies I've been relying on for both
        professional work and personal projects.
      </p>
      <div className="space-y-2 pt-4">
        {skillsdata.map((skillitem, idx) => (
          <div
            key={idx}
            className="text-sm md:text-base leading-relaxed break-words"
          >
            <span className="font-semibold text-primary mr-2 inline-block min-w-fit">
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

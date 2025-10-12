import ReactMarkdown from 'react-markdown';
import { ProfileCard } from '@/components/ProfileCard';
import { SkillsCard } from '@/components/SkillsCard';
import { aboutdata } from '@/data/userdata';
import React from 'react';

export default function Page() {
  return (
    <section className="flex flex-col items-center md:items-start gap-5 lg:gap-20 lg:flex-row">
      <div className="pt-10">
        <ProfileCard />
      </div>
      <div className="lg:pt-4 text-clip grow">
        {aboutdata.about_desc_parts.map((part, idx) => (
          <ReactMarkdown
            key={idx}
            className=" mx-auto md:mx-0 pt-6 text-left leading-7 font-light opacity-90"
          >
            {part}
          </ReactMarkdown>
        ))}
        <div className="pt-10 border-t border-border mt-16"></div>
        <SkillsCard />
      </div>
    </section>
  );
}

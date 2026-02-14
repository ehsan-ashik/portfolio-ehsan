import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { ResearchOverview } from '@/components/ResearchOverview';
import { Contact } from '@/components/Contact';
import React from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <div className="py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ProjectOverview />
      <div className="py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ResearchOverview />
      <div className="py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <Contact />
    </>
  );
}

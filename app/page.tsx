import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { ResearchOverview } from '@/components/ResearchOverview';
import React from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <div className='pt-16 border-b border-border'></div>
      <ProjectOverview />
      <div className='pt-6 border-b border-border'></div>
      <ResearchOverview />
    </>
  );
}

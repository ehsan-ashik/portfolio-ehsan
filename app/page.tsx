import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ResearchOverview } from '@/components/ResearchOverview';
import React from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <div className='pt-16 border-b border-border'></div>
      <ProjectShowcase />
      <div className='pt-8 border-b border-border'></div>
      <ResearchOverview />
    </>
  );
}

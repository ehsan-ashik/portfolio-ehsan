import { Hero } from '@/components/Hero';
import { SkillsCard } from '@/components/SkillsCard';
import React from 'react';
export default function Page() {
  return (
    <>
      <Hero />
      <div className='pt-10 border-b border-border'></div>
      <div className='pt-10'></div>
      <SkillsCard />
    </>
  );
}

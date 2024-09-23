import React from 'react';
import { herodata } from '@/data/herodata';
import { RobotoSlab } from '@/app/fonts';

export function Hero() {
  return (
    <section className="bg-card text-card-foreground w-full h-[500px] px-2 mx-auto lg:mx-0 text-balance">
      <div
        className={`${RobotoSlab.className} w-auto lg:w-[450px] mx-auto lg:mx-0 text-center lg:text-left pt-20 text-3xl lg:pl-20`}
      >
        {herodata.title}
        <span className="w-full font-bold text-4xl uppercase ">
          {herodata.name}
        </span>
      </div>
      <div className="w-full lg:w-[700px] mx-auto lg:mx-0 pt-8 lg:pl-20 text-muted-foreground text-center lg:text-left text-sm italic text-balance">
        {herodata.short_desc}
      </div>
    </section>
  );
}

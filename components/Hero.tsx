import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { profiledata, herodata } from '@/data/userdata';
import { NunitoSansFont } from '@/app/fonts';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';



export function Hero() {
  return (
    <section className="w-full mx-auto lg:mx-0 ">
      <ReactMarkdown
        className={` ${NunitoSansFont.className} w-auto md:w-[36rem] mx-auto md:mx-0 text-center md:text-left pt-10 md:pt-20 pb-5 text-5xl md:text-5xl font-light opacity-95`}
      >
        {herodata.title}
      </ReactMarkdown>
      {herodata.hero_desc_parts.map((part, idx) => (
        <ReactMarkdown
          key={idx}
          className="w-auto lg:w-[48rem] mx-auto md:mx-0 pt-6 text-left leading-7 font-light opacity-90"
        >
          {part}
        </ReactMarkdown>
      ))}

      <div className="pt-10 flex gap-3 justify-center md:justify-start">
        <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="default" className=" rounded-full px-10 flex gap-2">
            <ExternalLink className="w-[1.2rem] h-[1.2rem]" />
            <span>View Resume</span>
          </Button>
        </a>
        <a
          href={profiledata.github_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <FaGithub className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 opacity-80" />
          </Button>
        </a>
        <a
          href={profiledata.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <FaLinkedin className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 opacity-80" />
          </Button>
        </a>
      </div>
    </section>
  );
}

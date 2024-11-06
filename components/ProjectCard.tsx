import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { NunitoSansFont } from '@/app/fonts';

interface Project {
  rank: number;
  title: string;
  description: string;
  github_link: string;
  stack: Array<string>;
  additional_link_title?: string;
  additional_link?: string;
}


export function ProjectCard(project: Project) {
  return (
    <div
      className={`flex flex-col ${project.rank % 2 ? 'items-start' : 'items-end'}`}
    >
      <div className="max-w-[36rem] h-fit">
        <h1
          className={` ${NunitoSansFont.className} text-center md:text-left text-2xl md:text-3xl font-bold opacity-95`}
        >
          {project.title}
        </h1>
        <div className="pt-1 text-muted-foreground flex flex-wrap gap-1 justify-center md:justify-start">
          {project.stack.map((value, idx) => (
            <Badge variant="secondary" key={idx} className="">
              <span className='text-nowrap'>{value}</span>
            </Badge>
          ))}
        </div>
        <ReactMarkdown className="pt-6 text-balance leading-7 font-light opacity-90">
          {project.description}
        </ReactMarkdown>

        <div className="pt-4 flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full max-w-fit self-center">
              View on GitHub
            </Button>
          </a>
          {project.additional_link !== '' &&
          project.additional_link !== null ? (
            <a
              href={project.additional_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                className="rounded-full max-w-fit self-center bg-secondary-foreground text-accent hover:bg-secondary-foreground/95 text-sm"
              >
                {project.additional_link_title}
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

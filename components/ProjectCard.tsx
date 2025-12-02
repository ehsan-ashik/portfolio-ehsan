import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { NunitoSansFont } from '@/app/fonts';
import Image from 'next/image';

interface Project {
  rank: number;
  title: string;
  description: string;
  github_link: string;
  stack: Array<string>;
  additional_link_title?: string;
  additional_link?: string;
  visual_type: string;
  visual_link: string;
}


export function ProjectCard(project: Project) {
  return (
    <div>
      <div className="max-w-full h-fit">
        <h1
          className={` ${NunitoSansFont.className} text-center md:text-left text-2xl md:text-3xl font-bold opacity-95`}
        >
          {project.title}
        </h1>
        <div className="pt-1 text-muted-foreground flex flex-wrap gap-1 justify-center md:justify-start">
          {project.stack.map((value, idx) => (
            <Badge variant="secondary" key={idx} className="">
              <span className="text-nowrap">{value}</span>
            </Badge>
          ))}
        </div>
        <div
          className={`pt-6 lg:min-h-[22rem] flex flex-col ${project.rank % 2 ? `lg:flex-row` : `lg:flex-row-reverse`} gap-6`}
        >
          <div className="lg:pt-0 lg:w-6/12 flex flex-col justify-center">
            <ReactMarkdown className=" text-sm text-pretty leading-7 font-light opacity-90 ">
              {project.description}
            </ReactMarkdown>
            <div
              className={`pt-4 flex flex-col md:flex-row gap-1 md:gap-2 self-center md:self-start items-center`}
            >
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
                    className="rounded-full max-w-fit self-center text-sm"
                  >
                    {project.additional_link_title}
                  </Button>
                </a>
              ) : null}
            </div>
          </div>
          <div
            id="visual"
            className="pt-2 hidden w-6/12 lg:flex overflow-x-visible"
          >
            {project.visual_type === 'image' ? (
              <Image
                alt="project supporting image"
                width={1920}
                height={1920}
                src={project.visual_link}
                className={`w-full h-fit border-4 border-muted-foreground `}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

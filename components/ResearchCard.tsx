import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { NunitoSansFont } from '@/app/fonts';
import Image from 'next/image';

interface ResearchProject {
  rank: number;
  title: string;
  description: string;
  paper_link: string;
  stack: Array<string>;
  additional_link_title?: string;
  additional_link?: string;
  visual_type: string;
  visual_link: string;
  remark?: string;
}


export function ResearchCard(project: ResearchProject) {
  return (
    <div
      className={`flex flex-col ${project.rank % 2 ? 'items-start' : 'items-end'}`}
    >
      <div className="h-fit">
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
        {project.remark && project.remark != '' ? (
          <p className="text-sm italic opacity-90 pt-4">**{project.remark}</p>
        ) : null}
        <div
          id="project-body"
          className={`flex flex-col ${project.rank % 2 ? `lg:flex-row` : `lg:flex-row-reverse`} gap-4 lg:gap-6 pt-6`}
        >
          <div id="desc" className="flex-1 lg:text-sm self-center">
            <ReactMarkdown className="text-pretty leading-7 font-light opacity-90 ">
              {project.description}
            </ReactMarkdown>

            <div className="pt-4 flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start">
              {project.paper_link !== '' && project.paper_link !== null ? (
                <a
                  href={project.paper_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full max-w-fit self-center">
                    Read Paper
                  </Button>
                </a>
              ) : null}
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
            className="hidden lg:flex flex-1 min-w-full lg:min-w-fit  justify-center items-center"
            dangerouslySetInnerHTML={
              project.visual_type === 'slides'
                ? { __html: project.visual_link }
                : undefined
            }
          >
            {project.visual_type === 'image' ? (
              <Image
                alt="a screenshot from the poster"
                width={450}
                height={285}
                src={project.visual_link}
                className="sm:w-full sm:h-full lg:w-[450px] h-[285px]"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ProjectOverviewCardProps {
  title: string;
  description: string;
  stack: string[];
  linkHref?: string;
}

export function ProjectOverviewCard({
  title,
  description,
  stack,
  linkHref = '/projects'
}: ProjectOverviewCardProps) {
  const sentences = description.split('. ');
  let briefDescription = '';

  if (sentences.length >= 2) {
    briefDescription = sentences.slice(0, 2).join('. ') + '.';
    if (sentences.length > 2) {
      briefDescription += '..';
    }
  } else {
    briefDescription = description;
  }

  return (
    <Card className="group h-full transition-all duration-300 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex flex-col h-full p-6 space-y-4">
        <div className="flex-grow">
          <h3
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-lg font-semibold group-hover:text-foreground transition-colors h-14 leading-7 overflow-hidden line-clamp-2 text-ellipsis tracking-tight"
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">
            {briefDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          {stack.slice(0, 2).map((tech, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
          {stack.length > 2 && (
            <span className="text-xs text-muted-foreground opacity-60">
              +{stack.length - 2} more
            </span>
          )}
        </div>

        <div className="pt-2">
          <Link
            href={linkHref}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-all inline-flex items-center gap-1 group-hover:gap-2"
          >
            See more
            <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}

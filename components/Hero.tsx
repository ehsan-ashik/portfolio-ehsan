'use client';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import { profiledata, herodata } from '@/data/userdata';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export function Hero() {
  const { toast } = useToast();

  return (
    <section className="w-full mx-auto lg:mx-0 pt-16 md:pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ReactMarkdown
          className="w-auto md:w-[36rem] mx-auto md:mx-0 text-center md:text-left text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]"
          components={{
            p: ({ children }) => (
              <h1
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]"
              >
                {children}
              </h1>
            )
          }}
        >
          {herodata.title}
        </ReactMarkdown>
      </motion.div>

      {herodata.hero_desc_parts.map((part, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + idx * 0.15,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <ReactMarkdown className="w-auto lg:w-[48rem] mx-auto md:mx-0 pt-8 text-left leading-8 font-light text-muted-foreground">
            {part}
          </ReactMarkdown>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="pt-10 flex flex-col md:flex-row gap-3 items-center md:justify-start"
      >
        <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="rounded-full flex gap-2">
            <ExternalLink className="w-[1.2rem] h-[1.2rem]" />
            <span>View Resume</span>
          </Button>
        </a>
        <div className="flex gap-3">
          <div className="group relative flex justify-center">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(profiledata.personal_email);
                toast({
                  description: 'Email copied to clipboard!'
                });
              }}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <MdEmail className="h-[1.2rem] w-[1.2rem] opacity-80" />
            </Button>
            <span className="absolute text-nowrap -top-9 left-0 w-auto rounded-full scale-0 bg-secondary-foreground/80 p-2 text-xs text-center text-muted lg:group-hover:scale-100 opacity-0 lg:group-hover:opacity-95 transition-all ease-out duration-300">
              Copy email to clipboard
            </span>
          </div>
          <a
            href={profiledata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <FaLinkedin className="h-[1.2rem] w-[1.2rem] opacity-80" />
            </Button>
          </a>
          <a
            href={profiledata.google_scholar_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <FaGoogleScholar className="h-[1.2rem] w-[1.2rem] opacity-80" />
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

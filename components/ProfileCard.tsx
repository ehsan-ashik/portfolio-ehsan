'use client';
import Image from 'next/image';
import React from 'react';
import { profiledata } from '@/data/userdata';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export function ProfileCard() {
  return (
    <div className="mx-auto max-w-56 flex flex-col gap-5 ">
      <div className="aspect-square min-w-48 min-h-48 rounded-full overflow-clip mx-auto ring-2 ring-primary/20">
        <Image
          src="/images/profile_photo.jpg"
          alt="Profile picture"
          className="object-contain -translate-y-5"
          width={400}
          height={400}
        />
      </div>
      <div className=" flex flex-col items-center text-center md:items-start md:text-left">
        <div
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-3xl lg:text-2xl font-bold tracking-tight"
        >
          {profiledata.name}
        </div>
        <div className="font-light text-sm text-muted-foreground">
          {profiledata.headline}
        </div>
        <div className=" pt-2 flex gap-1 items-center text-sm text-muted-foreground">
          <MdEmail className="h-4 w-4 opacity-90" />
          <span>{profiledata.personal_email}</span>
        </div>
        <div className=" pt-2 flex gap-1 items-center text-sm text-muted-foreground">
          <FaLocationDot className="h-4 w-4 opacity-90" />
          <span>{profiledata.location}</span>
        </div>
        <div className=" pt-3 flex gap-5 items-center">
          <a
            href={profiledata.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-[1.2rem] w-[1.2rem] opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200" />
          </a>
          <a
            href={profiledata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-[1.2rem] w-[1.2rem] opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200" />
          </a>
          <a
            href={profiledata.google_scholar_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogleScholar className="h-[1.2rem] w-[1.2rem] opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200" />
          </a>
          <a
            href={profiledata.leetcode_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="h-[1.2rem] w-[1.2rem] opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200" />
          </a>
          <a
            href={profiledata.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="h-[1.2rem] w-[1.2rem] opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
}

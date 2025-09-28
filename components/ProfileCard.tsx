'use client';
import { NunitoSansFont } from '@/app/fonts';
import Image from 'next/image';
import React from 'react';
import { profiledata } from '@/data/userdata';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaGoogleScholar } from "react-icons/fa6";
import { SiLeetcode } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export function ProfileCard() {
  return (
    <div className="mx-auto max-w-56 flex flex-col gap-5 ">
      <div className="aspect-square min-w-48 min-h-48 rounded-full overflow-clip mx-auto">
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
          className={`${NunitoSansFont.className} text-3xl lg:text-2xl font-bold opacity-95`}
        >
          {profiledata.name}
        </div>
        <div className="font-light text-sm">{profiledata.headline}</div>
        <div className=" pt-2 flex gap-1 items-center text-sm opacity-80">
          <MdEmail className="h-4 w-4 opacity-90" />
          <span>{profiledata.personal_email}</span>
        </div>
        <div className=" pt-2 flex gap-1 items-center text-sm opacity-80">
          <FaLocationDot className="h-4 w-4 opacity-90" />
          <span>{profiledata.location}</span>
        </div>
        <div className=" pt-3 flex gap-5 items-center">
          <a
            href={profiledata.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-[1.2rem] w-[1.2rem] opacity-80 hover:opacity-100" />
          </a>
          <a
            href={profiledata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-[1.2rem] w-[1.2rem] opacity-80 hover:opacity-100" />
          </a>
          <a
            href={profiledata.google_scholar_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogleScholar className="h-[1.2rem] w-[1.2rem] opacity-80 hover:opacity-100" />
          </a>
          <a
            href={profiledata.leetcode_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="h-[1.2rem] w-[1.2rem] opacity-80 hover:opacity-100" />
          </a>
          <a
            href={profiledata.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="h-[1.2rem] w-[1.2rem] opacity-80 hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
}

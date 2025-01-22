"use client";

import Link from 'next/link';
import { useState } from 'react';

const navItems = {
  '#projects': {
    name: 'projects',
  },
  '#about': {
    name: 'about & cv',
  },
  '#connect': {
    name: 'connect',
  },
};

export function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Logo */}
          <div className="cursor-pointer text-lg font-bold pr-10">
            <Link href="/" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1">
              MyLogo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>

          {/* Say Hello Button */}
          <button
            onClick={handleCopyEmail}
            className="transition-all flex items-center space-x-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
          >
            <span className="material-icons">message</span>
            <span>Say Hello</span>
          </button>
        </nav>

        {/* Copied Tooltip */}
        {copied && (
          <div className="absolute top-16 right-4 bg-green-500 text-white px-3 py-1 rounded-md shadow-lg">
            Email copied!
          </div>
        )}
      </div>
    </aside>
  );
}

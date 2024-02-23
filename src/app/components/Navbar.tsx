'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { usePathname } from 'next/navigation';
import { Bell, Search } from 'lucide-react';
import UserNav from './UserNav';

interface Linkpops {
  name: string;
  href: string;
}

const Links: Linkpops[] = [
  { name: 'Home', href: '/home' },
  { name: 'TV Shows', href: '/home/shows' },
  { name: 'Movies', href: '/home/movies' },
  { name: 'Recently Added', href: '/home/recently' },
  { name: 'My List', href: '/home/user/list' },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 lg:px-8 flex py-5">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix Logo" />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {Links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline">
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-6 h-6 text-gray-400 cursor-pointer" />
        <Bell className="w-6 h-6 text-gray-400 cursor-pointer" />
        <UserNav />
      </div>
    </nav>
  );
}

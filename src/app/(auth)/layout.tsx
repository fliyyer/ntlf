import React from 'react';
import Background from '@/assets/hero.jpg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex h-screen bg-black flex-col md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="Background Image"
        className="hidden sm:flex brightness-50 sm:object-cover -z-10"
        priority
        fill
      />
      <Image
        src={Logo}
        width={120}
        height={120}
        alt="Logo"
        className="absolute left-4 md:left-10 md:top-6 top-4 object-contain"
      />
      {children}
    </main>
  );
}

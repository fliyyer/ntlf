'use client';

import { Button } from '@/components/ui/button';
import Google from '@/assets/google.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function ButtonGoogle() {
  return (
    <Button onClick={() => signIn('google')} variant="outline" size="icon">
      <Image src={Google} alt="Google Icon" className="w-4 h-4" />
    </Button>
  );
}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';
import ButtonGithub from '@/app/components/ButtonGithub';
import ButtonGoogle from '@/app/components/ButtonGoogle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/home');
  }
  return (
    <div className="rounded bg-black/80 py-10 mt-24 md:mt-0 px-6 md:max-w-sm md:px-14">
      <form method="post" action={'/api/auth/signin'}>
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            placeholder="Email"
            type="email"
            name="email"
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]">
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{' '}
        <Link href="/login" className="text-white hover:underline ">
          Log in now!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <ButtonGithub />
        <ButtonGoogle />
      </div>
    </div>
  );
}

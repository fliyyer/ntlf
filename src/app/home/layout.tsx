import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';
import Navbar from '../components/Navbar';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}

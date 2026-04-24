"use client"

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';


const Navbar = () => {

   const {
     data: session,
  } = authClient.useSession();

  console.log(session);
  const user = session?.user


  const handleSignOut = () => {
    authClient.signOut()
  }
  
  return (
    <nav className="w-full border-b px-6 py-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        NST
      </Link>
      <div className="flex gap-5">
        <Link href="/signup" variant="light" size="sm">
          Sign Up
        </Link>
        <Link href="/signin" variant="light" size="sm">
          Sign In
        </Link>
      </div>
      <div className='flex gap-5'>
        <h2>{user?.name }</h2>
      <Button onClick={handleSignOut} variant='danger'>
        SignOut
      </Button>
      </div>
    </nav>
  );
};

export default Navbar;

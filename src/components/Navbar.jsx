import { Button } from '@heroui/react';
import Link from 'next/link';

const Navbar = () => {
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
      <Button variant='danger'>
        SignOut
      </Button>
    </nav>
  );
};

export default Navbar;

import { Button } from '@heroui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full border-b px-6 py-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        NST
      </Link>
      <div className="flex gap-2">
        <Link href="/" variant="light" size="sm">
          Home
        </Link>
        <Link href="/signup" variant="light" size="sm">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

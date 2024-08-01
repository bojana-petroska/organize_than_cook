// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link href="/" className="text-lg font-bold">Prep and Cook</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/recipes" className="text-white">Recipes</Link>
          <Link href="/profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
};




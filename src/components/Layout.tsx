// components/Layout.tsx
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <header className={inter.className}>
        <nav className="flex justify-between items-center mr-12 text-2xl font-bold mt-4">
        <div className="ml-3">JL</div>
        <div className="space-x-10">
            <Link className="text-black" href="/">Home</Link>
            <Link className="text-black" href="/about">About</Link>
            <Link className="text-black" href="/projects">Projects</Link>
            <Link className="text-black" href="/blog">Blog</Link>
        </div>
        </nav>
    </header>
    <main style={{ padding: '4rem', textAlign: 'center' }}>{children}</main>
    </div>
  );
};

export default Layout;
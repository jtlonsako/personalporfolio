import React, { useState } from "react";
import {useRouter} from 'next/router';
import Link from "next/link";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();

  return (
    <div className="w-screen">
      <header className={inter.className}>
        <nav className="flex justify-between items-center md:mr-12 text-2xl font-bold mt-4 px-4 md:px-0">
          {/* Logo */}
          <Link href="/" className="ml-3 text-black hover:no-underline">
            JL
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-black focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18m-6 6h6"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link className={`${router.pathname == '/' ? 'text-purple-700' : 'text-black'}`} href="/">
              Home
            </Link>
            <Link className={`${router.pathname == '/about' ? 'text-purple-700' : 'text-black'}`} href="/about">
              About
            </Link>
            <Link className={`${router.pathname == '/projects' ? 'text-purple-700' : 'text-black'}`} href="/projects">
              Projects
            </Link>
            <Link className={`${router.pathname == '/blog' ? 'text-purple-700' : 'text-black'}`} href="/blog">
              Blog
            </Link>
          </div>
        </nav>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <button
              onClick={toggleSidebar}
              className="text-black focus:outline-none"
            >

              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-2xl font-bold">JL</div>
          </div>
          <div className="flex flex-col space-y-6 mt-6 px-4">
            <Link
              className="text-black text-xl"
              href="/"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              className="text-black text-xl"
              href="/about"
              onClick={toggleSidebar}
            >
              About
            </Link>
            <Link
              className="text-black text-xl"
              href="/projects"
              onClick={toggleSidebar}
            >
              Projects
            </Link>
            <Link
              className="text-black text-xl"
              href="/blog"
              onClick={toggleSidebar}
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </header>

      <main className="md:p-10 w-screen mt-10">{children}</main>
    </div>
  );
};

export default Layout;
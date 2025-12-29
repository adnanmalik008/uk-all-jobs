"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/70 backdrop-blur-xl border-b border-dark-200 dark:border-dark-700/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.svg"
                alt="UK All Jobs"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            <Link
              href="/"
              className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-dark-100 dark:hover:bg-dark-800/50"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-dark-100 dark:hover:bg-dark-800/50"
            >
              Find Jobs
            </Link>
            <Link
              href="/about"
              className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-dark-100 dark:hover:bg-dark-800/50"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-dark-100 dark:hover:bg-dark-800/50"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark-400 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link
              href="/login"
              className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn-primary text-sm py-2"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu buttons */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-200 dark:border-dark-700/50">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                href="/about"
                className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <hr className="border-dark-200 dark:border-dark-800/50 my-2" />
              <Link
                href="/login"
                className="text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-dark-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 dark:hover:bg-dark-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn-primary text-sm text-center mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

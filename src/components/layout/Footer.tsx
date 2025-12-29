import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-200 dark:border-dark-700/50 bg-dark-50 dark:bg-dark-900/50 backdrop-blur-sm">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt="UK All Jobs"
                width={120}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
              Your gateway to career opportunities across the United Kingdom.
              Find your dream job today.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800/60 border border-dark-200 dark:border-dark-700/50 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800/60 border border-dark-200 dark:border-dark-700/50 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-dark-900 dark:text-dark-50 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/jobs" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Browse Jobs</Link></li>
              <li><Link href="/about" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-dark-900 dark:text-dark-50 font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/jobs/category/technology" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Technology</Link></li>
              <li><Link href="/jobs/category/healthcare" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Healthcare</Link></li>
              <li><Link href="/jobs/category/finance" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Finance</Link></li>
              <li><Link href="/jobs/category/marketing" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-dark-900 dark:text-dark-50 font-semibold mb-4">Top Locations</h3>
            <ul className="space-y-3">
              <li><Link href="/jobs/location/london" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">London</Link></li>
              <li><Link href="/jobs/location/manchester" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Manchester</Link></li>
              <li><Link href="/jobs/location/birmingham" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Birmingham</Link></li>
              <li><Link href="/jobs/location/edinburgh" className="text-sm text-dark-600 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Edinburgh</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-dark-200 dark:border-dark-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-500">&copy; {currentYear} UK All Jobs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-dark-500 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-dark-500 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

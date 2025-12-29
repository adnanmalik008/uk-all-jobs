import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about UK All Jobs - your gateway to career opportunities across the United Kingdom.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark-900 dark:text-dark-50 mb-4">About UK All Jobs</h1>
        <p className="text-xl text-dark-600 dark:text-dark-300">
          Your gateway to career opportunities across the United Kingdom
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-gray max-w-none">
        <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 mb-8">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-4">Our Mission</h2>
          <p className="text-dark-600 dark:text-dark-300">
            At UK All Jobs, we believe that finding the right job should be simple,
            straightforward, and accessible to everyone. Our mission is to connect
            talented individuals with their dream careers across the United Kingdom.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 mb-8">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-dark-600 dark:text-dark-300">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Thousands of job listings updated daily from top UK employers</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced search filters to find exactly what you&apos;re looking for</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Jobs across all industries and experience levels</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Remote, hybrid, and on-site opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Locations across England, Scotland, Wales, and Northern Ireland</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 mb-8">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-brand-500 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Fast & Easy</h3>
              <p className="text-sm text-dark-600 dark:text-dark-300">
                Find and apply for jobs in minutes with our streamlined search
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Verified Jobs</h3>
              <p className="text-sm text-dark-600 dark:text-dark-300">
                All listings are verified to ensure quality opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-brand-500 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Always Updated</h3>
              <p className="text-sm text-dark-600 dark:text-dark-300">
                New jobs added daily to keep you ahead of the competition
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 text-center">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-4">Ready to Find Your Dream Job?</h2>
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            Start your job search today and take the next step in your career journey.
          </p>
          <a href="/jobs" className="btn-primary inline-block">
            Browse All Jobs
          </a>
        </div>
      </div>
    </div>
  );
}

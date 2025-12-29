import Link from 'next/link';
import Hero from '@/components/home/Hero';
import CompanyLogos from '@/components/home/CompanyLogos';
import QuickFilters from '@/components/home/QuickFilters';
import JobCardCompact from '@/components/jobs/JobCardCompact';
import prisma from '@/lib/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faHeartPulse,
  faCoins,
  faChartLine,
  faGraduationCap,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

// Categories with FontAwesome icons
const categories = [
  { name: 'Technology', slug: 'technology', icon: faLaptopCode },
  { name: 'Healthcare', slug: 'healthcare', icon: faHeartPulse },
  { name: 'Finance', slug: 'finance', icon: faCoins },
  { name: 'Marketing', slug: 'marketing', icon: faChartLine },
  { name: 'Education', slug: 'education', icon: faGraduationCap },
  { name: 'Engineering', slug: 'engineering', icon: faCogs },
];

// Sample locations for the homepage
const locations = [
  { name: 'London', slug: 'london' },
  { name: 'Manchester', slug: 'manchester' },
  { name: 'Birmingham', slug: 'birmingham' },
  { name: 'Edinburgh', slug: 'edinburgh' },
  { name: 'Glasgow', slug: 'glasgow' },
  { name: 'Liverpool', slug: 'liverpool' },
];

async function getLatestJobs() {
  try {
    const jobs = await prisma.job.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      take: 9,
    });
    return jobs;
  } catch {
    return [];
  }
}

async function getFeaturedJobs() {
  try {
    const jobs = await prisma.job.findMany({
      where: { isActive: true, isFeatured: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });
    return jobs;
  } catch {
    return [];
  }
}

async function getCategoryCounts() {
  try {
    const counts = await prisma.category.findMany({
      select: { slug: true, jobCount: true }
    });
    return counts.reduce((acc, cat) => {
      acc[cat.slug] = cat.jobCount;
      return acc;
    }, {} as Record<string, number>);
  } catch {
    return {};
  }
}

async function getLocationCounts() {
  try {
    const counts = await prisma.location.findMany({
      select: { slug: true, jobCount: true }
    });
    return counts.reduce((acc, loc) => {
      acc[loc.slug] = loc.jobCount;
      return acc;
    }, {} as Record<string, number>);
  } catch {
    return {};
  }
}

export default async function Home() {
  const [latestJobs, featuredJobs, categoryCounts, locationCounts] = await Promise.all([
    getLatestJobs(),
    getFeaturedJobs(),
    getCategoryCounts(),
    getLocationCounts(),
  ]);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Logos Carousel */}
      <CompanyLogos />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Featured Jobs Section */}
        {featuredJobs.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50">Featured Jobs</h2>
                <p className="text-dark-500 dark:text-dark-400 text-sm mt-1">Hand-picked opportunities from top employers</p>
              </div>
              <Link
                href="/jobs?featured=true"
                className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 text-sm font-medium"
              >
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredJobs.map((job) => (
                <JobCardCompact key={job.id} job={job} featured />
              ))}
            </div>
          </section>
        )}

        {/* Browse by Category & Location */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Categories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50">Browse by Category</h2>
                <Link href="/jobs" className="text-brand-600 dark:text-brand-400 text-sm font-medium hover:underline">
                  All categories →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/jobs/category/${category.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 hover:border-brand-500/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-600/10 dark:bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={category.icon} className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-dark-900 dark:text-dark-50 text-sm truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {category.name}
                      </p>
                      <p className="text-xs text-dark-500 dark:text-dark-400">
                        {categoryCounts[category.slug] || 0} jobs
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50">Top Locations</h2>
                <Link href="/jobs" className="text-brand-600 dark:text-brand-400 text-sm font-medium hover:underline">
                  All locations →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/jobs/location/${location.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 hover:border-brand-500/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-dark-500 dark:text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-dark-900 dark:text-dark-50 text-sm truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {location.name}
                      </p>
                      <p className="text-xs text-dark-500 dark:text-dark-400">
                        {locationCounts[location.slug] || 0} jobs
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50">Latest Jobs</h2>
              <p className="text-dark-500 dark:text-dark-400 text-sm mt-1">Recently posted opportunities</p>
            </div>
            <QuickFilters />
          </div>

          {latestJobs.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {latestJobs.map((job) => (
                  <JobCardCompact key={job.id} job={job} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/jobs"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View All Jobs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-dark-50 dark:bg-dark-900/60 rounded-xl border border-dark-200 dark:border-dark-700">
              <svg
                className="w-12 h-12 mx-auto text-dark-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-dark-900 dark:text-dark-50 mb-2">
                No jobs available yet
              </h3>
              <p className="text-dark-500 dark:text-dark-400">
                Check back soon for new opportunities!
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

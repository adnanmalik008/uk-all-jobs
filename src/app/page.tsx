import Link from 'next/link';
import Hero from '@/components/home/Hero';
import QuickFilters from '@/components/home/QuickFilters';
import JobCard from '@/components/jobs/JobCard';
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
  { name: 'Technology', slug: 'technology', icon: faLaptopCode, count: 0 },
  { name: 'Healthcare', slug: 'healthcare', icon: faHeartPulse, count: 0 },
  { name: 'Finance', slug: 'finance', icon: faCoins, count: 0 },
  { name: 'Marketing', slug: 'marketing', icon: faChartLine, count: 0 },
  { name: 'Education', slug: 'education', icon: faGraduationCap, count: 0 },
  { name: 'Engineering', slug: 'engineering', icon: faCogs, count: 0 },
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
      take: 6,
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

export default async function Home() {
  const [latestJobs, featuredJobs] = await Promise.all([
    getLatestJobs(),
    getFeaturedJobs(),
  ]);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Quick Filters */}
      <QuickFilters />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Jobs Section */}
        {featuredJobs.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50">Featured Jobs</h2>
              <Link
                href="/jobs?featured=true"
                className="text-brand-500 dark:text-brand-400 hover:text-brand-600 dark:hover:text-brand-300 text-sm font-medium"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-4">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
        )}

        {/* Latest Jobs Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50">Latest Jobs</h2>
            <Link
              href="/jobs"
              className="text-brand-500 dark:text-brand-400 hover:text-brand-600 dark:hover:text-brand-300 text-sm font-medium"
            >
              View all jobs →
            </Link>
          </div>
          {latestJobs.length > 0 ? (
            <div className="grid gap-4">
              {latestJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
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

        {/* Categories & Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Popular Categories */}
          <section>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={"/jobs/category/" + category.slug}
                  className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <FontAwesomeIcon icon={category.icon} className="w-5 h-5 text-brand-500 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-900 dark:text-dark-50">{category.name}</h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      {category.count} jobs
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Locations */}
          <section>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
              Top Locations
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={"/jobs/location/" + location.slug}
                  className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 flex items-center gap-3"
                >
                  <svg
                    className="w-6 h-6 text-brand-500 dark:text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium text-dark-900 dark:text-dark-50">{location.name}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

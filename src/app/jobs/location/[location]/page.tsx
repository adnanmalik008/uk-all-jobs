import { Metadata } from "next";
import Link from "next/link";
import JobCard from "@/components/jobs/JobCard";
import prisma from "@/lib/db";

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

async function getJobsByLocation(locationSlug: string) {
  const jobs = await prisma.job.findMany({
    where: {
      locSlug: locationSlug,
      isActive: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return jobs;
}

function formatLocationName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location } = await params;
  const locationName = formatLocationName(location);

  return {
    title: `Jobs in ${locationName}`,
    description: `Browse job opportunities in ${locationName}, UK. Find your perfect role in ${locationName} today.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params;
  const locationName = formatLocationName(location);
  const jobs = await getJobsByLocation(location);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-6">
        <Link href="/" className="hover:text-dark-700 dark:hover:text-dark-200">
          Home
        </Link>
        <span>/</span>
        <Link href="/jobs" className="hover:text-dark-700 dark:hover:text-dark-200">
          Jobs
        </Link>
        <span>/</span>
        <span className="text-dark-900 dark:text-dark-50">{locationName}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
          Jobs in {locationName}
        </h1>
        <p className="text-dark-600 dark:text-dark-300">
          Found {jobs.length} job{jobs.length !== 1 ? "s" : ""} in {locationName}
        </p>
      </div>

      {/* Job Listings */}
      {jobs.length > 0 ? (
        <div className="space-y-4">
          {jobs.map((job) => (
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-dark-900 dark:text-dark-50 mb-2">
            No jobs in {locationName} yet
          </h3>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Check back soon for new opportunities in this area
          </p>
          <Link href="/jobs" className="btn-primary inline-block">
            Browse All Jobs
          </Link>
        </div>
      )}
    </div>
  );
}

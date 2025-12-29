import { Suspense } from "react";
import { Metadata } from "next";
import JobCard from "@/components/jobs/JobCard";
import prisma from "@/lib/db";

export const metadata: Metadata = {
  title: "Browse All Jobs",
  description: "Search and filter through thousands of job opportunities across the UK. Find full-time, part-time, remote, and contract positions.",
};

interface JobsPageProps {
  searchParams: Promise<{
    q?: string;
    location?: string;
    type?: string;
    mode?: string;
    category?: string;
    page?: string;
  }>;
}

async function getJobs(searchParams: {
  q?: string;
  location?: string;
  type?: string;
  mode?: string;
  category?: string;
  page?: string;
}) {
  const page = parseInt(searchParams.page || "1");
  const perPage = 10;
  const skip = (page - 1) * perPage;

  const where: Record<string, unknown> = { isActive: true };

  if (searchParams.q) {
    where.OR = [
      { title: { contains: searchParams.q } },
      { company: { contains: searchParams.q } },
      { description: { contains: searchParams.q } },
    ];
  }

  if (searchParams.location) {
    where.locSlug = searchParams.location.toLowerCase();
  }

  if (searchParams.type) {
    where.jobType = searchParams.type;
  }

  if (searchParams.mode) {
    where.workMode = searchParams.mode;
  }

  if (searchParams.category) {
    where.catSlug = searchParams.category.toLowerCase();
  }

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: perPage,
    }),
    prisma.job.count({ where }),
  ]);

  return {
    jobs,
    total,
    page,
    totalPages: Math.ceil(total / perPage),
  };
}

function JobFilters({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const jobTypes = [
    { value: "FULL_TIME", label: "Full-time" },
    { value: "PART_TIME", label: "Part-time" },
    { value: "CONTRACT", label: "Contract" },
    { value: "TEMPORARY", label: "Temporary" },
    { value: "INTERNSHIP", label: "Internship" },
  ];

  const workModes = [
    { value: "REMOTE", label: "Remote" },
    { value: "ONSITE", label: "On-site" },
    { value: "HYBRID", label: "Hybrid" },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="card sticky top-20">
        <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-4">Filters</h3>

        <form method="GET" className="space-y-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
              Keywords
            </label>
            <input
              type="text"
              name="q"
              defaultValue={searchParams.q}
              placeholder="Job title, keywords..."
              className="input"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={searchParams.location}
              placeholder="City or region..."
              className="input"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
              Job Type
            </label>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <label key={type.value} className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value={type.value}
                    defaultChecked={searchParams.type === type.value}
                    className="mr-2"
                  />
                  <span className="text-sm text-dark-600 dark:text-dark-300">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Work Mode */}
          <div>
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
              Work Mode
            </label>
            <div className="space-y-2">
              {workModes.map((mode) => (
                <label key={mode.value} className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value={mode.value}
                    defaultChecked={searchParams.mode === mode.value}
                    className="mr-2"
                  />
                  <span className="text-sm text-dark-600 dark:text-dark-300">{mode.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Apply Filters
          </button>

          <a
            href="/jobs"
            className="block text-center text-sm text-dark-500 dark:text-dark-400 hover:text-dark-700 dark:hover:text-dark-200"
          >
            Clear all filters
          </a>
        </form>
      </div>
    </aside>
  );
}

async function JobsList({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const { jobs, total, page, totalPages } = await getJobs(searchParams);

  return (
    <div className="flex-1">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-dark-600 dark:text-dark-300">
          Showing <span className="font-medium">{jobs.length}</span> of{" "}
          <span className="font-medium">{total}</span> jobs
        </p>
        <select className="input w-auto" defaultValue="newest">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Job Cards */}
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-dark-900 dark:text-dark-50 mb-2">
            No jobs found
          </h3>
          <p className="text-dark-600 dark:text-dark-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {page > 1 && (
            <a
              href={`/jobs?page=${page - 1}`}
              className="btn-outline"
            >
              Previous
            </a>
          )}
          <span className="px-4 py-2 text-dark-600 dark:text-dark-300">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <a
              href={`/jobs?page=${page + 1}`}
              className="btn-outline"
            >
              Next
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">Browse Jobs</h1>
        <p className="text-dark-600 dark:text-dark-300">
          Find your next career opportunity from thousands of job listings
        </p>
      </div>

      {/* Filters & Results */}
      <div className="flex flex-col lg:flex-row gap-8">
        <JobFilters searchParams={params} />
        <Suspense fallback={<div>Loading jobs...</div>}>
          <JobsList searchParams={params} />
        </Suspense>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import JobCard from "@/components/jobs/JobCard";
import prisma from "@/lib/db";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

async function getJobsByCategory(categorySlug: string) {
  const jobs = await prisma.job.findMany({
    where: {
      catSlug: categorySlug,
      isActive: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return jobs;
}

function formatCategoryName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = formatCategoryName(category);

  return {
    title: `${categoryName} Jobs`,
    description: `Browse ${categoryName.toLowerCase()} job opportunities across the UK. Find your perfect ${categoryName.toLowerCase()} role today.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = formatCategoryName(category);
  const jobs = await getJobsByCategory(category);

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
        <span className="text-dark-900 dark:text-dark-50">{categoryName}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
          {categoryName} Jobs
        </h1>
        <p className="text-dark-600 dark:text-dark-300">
          Found {jobs.length} {categoryName.toLowerCase()} job{jobs.length !== 1 ? "s" : ""}
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h3 className="text-lg font-medium text-dark-900 dark:text-dark-50 mb-2">
            No {categoryName.toLowerCase()} jobs yet
          </h3>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Check back soon for new opportunities in this category
          </p>
          <Link href="/jobs" className="btn-primary inline-block">
            Browse All Jobs
          </Link>
        </div>
      )}
    </div>
  );
}

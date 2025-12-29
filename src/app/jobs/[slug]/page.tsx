import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import { formatDate, getJobTypeLabel, getWorkModeLabel } from "@/lib/utils";
import JobCard from "@/components/jobs/JobCard";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

async function getJob(slug: string) {
  const job = await prisma.job.findUnique({
    where: { slug, isActive: true },
  });
  return job;
}

async function getRelatedJobs(categorySlug: string, currentJobId: string) {
  const jobs = await prisma.job.findMany({
    where: {
      catSlug: categorySlug,
      isActive: true,
      NOT: { id: currentJobId },
    },
    take: 3,
    orderBy: { createdAt: "desc" },
  });
  return jobs;
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description.substring(0, 160),
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.description.substring(0, 160),
      type: "website",
    },
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  const relatedJobs = await getRelatedJobs(job.catSlug, job.id);

  const jobTypeColors: Record<string, string> = {
    FULL_TIME: "badge-blue",
    PART_TIME: "badge-green",
    CONTRACT: "badge-yellow",
    TEMPORARY: "badge-purple",
    INTERNSHIP: "badge-pink",
  };

  const workModeColors: Record<string, string> = {
    REMOTE: "bg-brand-500/20 text-purple-800",
    HYBRID: "bg-accent-cyan/20 text-cyan-300",
    ONSITE: "bg-dark-800 text-dark-100",
  };

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.createdAt.toISOString(),
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "UK",
      },
    },
    employmentType: job.jobType.replace("_", " "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <span className="text-dark-900 dark:text-dark-50">{job.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="card">
              {/* Job Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-dark-100 dark:bg-dark-800 rounded-lg flex items-center justify-center">
                  {job.companyLogo ? (
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-12 h-12 object-contain rounded"
                    />
                  ) : (
                    <span className="text-brand-500 dark:text-dark-400 font-semibold text-2xl">
                      {job.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-1">
                    {job.title}
                  </h1>
                  <p className="text-lg text-dark-600 dark:text-dark-300">{job.company}</p>
                </div>
              </div>

              {/* Job Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-dark-200 dark:border-dark-700">
                <span className="flex items-center text-dark-600 dark:text-dark-300">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  {job.location}
                </span>
                {job.salary && (
                  <span className="flex items-center text-dark-600 dark:text-dark-300">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {job.salary}
                  </span>
                )}
                <span className="flex items-center text-dark-300">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Posted {formatDate(job.createdAt)}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`badge ${jobTypeColors[job.jobType] || "badge-gray"}`}>
                  {getJobTypeLabel(job.jobType)}
                </span>
                <span className={`badge ${workModeColors[job.workMode] || "badge-gray"}`}>
                  {getWorkModeLabel(job.workMode)}
                </span>
                <Link
                  href={`/jobs/category/${job.catSlug}`}
                  className="badge badge-gray hover:bg-dark-700"
                >
                  {job.category}
                </Link>
              </div>

              {/* Job Description */}
              <div className="prose prose-gray max-w-none">
                <h2 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4">
                  Job Description
                </h2>
                <div className="whitespace-pre-wrap text-dark-600 dark:text-dark-300">
                  {job.description}
                </div>
              </div>
            </div>

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-4">
                  Similar Jobs
                </h2>
                <div className="space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <JobCard key={relatedJob.id} job={relatedJob} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="card sticky top-20">
              <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-4">Apply for this job</h3>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mb-4"
              >
                Apply Now
              </a>
              <p className="text-sm text-dark-500 dark:text-dark-400 text-center">
                You will be redirected to the employer&apos;s website
              </p>

              {/* Share */}
              <div className="mt-6 pt-6 border-t border-dark-200 dark:border-dark-700">
                <h4 className="font-medium text-dark-900 dark:text-dark-50 mb-3">Share this job</h4>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `${job.title} at ${job.company}`
                    )}&url=${encodeURIComponent(`https://ukalljobs.com/jobs/${job.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 text-center text-sm"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://ukalljobs.com/jobs/${job.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 text-center text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { formatDate, getJobTypeLabel, getWorkModeLabel } from "@/lib/utils";

interface JobCardCompactProps {
  job: {
    id: string;
    slug: string;
    title: string;
    company: string;
    companyLogo?: string | null;
    location: string;
    salary?: string | null;
    jobType: string;
    workMode: string;
    createdAt: Date | string;
    isFeatured?: boolean;
  };
  featured?: boolean;
}

export default function JobCardCompact({ job, featured = false }: JobCardCompactProps) {
  return (
    <Link href={`/jobs/${job.slug}`} className="block group h-full">
      <article className={`h-full bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-xl border ${featured ? 'border-brand-500/40 ring-1 ring-brand-500/20' : 'border-dark-200 dark:border-dark-700'} p-5 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 flex flex-col`}>
        {/* Header with logo and company */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-lg flex items-center justify-center border border-dark-200 dark:border-dark-700">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-8 h-8 object-contain rounded"
              />
            ) : (
              <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm">
                {job.company.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-dark-500 dark:text-dark-400 truncate">{job.company}</p>
            <p className="text-xs text-dark-400 dark:text-dark-500">{formatDate(job.createdAt)}</p>
          </div>
          {featured && (
            <span className="badge badge-blue text-[10px] px-2 py-0.5">Featured</span>
          )}
        </div>

        {/* Job Title */}
        <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-2 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {job.title}
        </h3>

        {/* Location & Salary */}
        <div className="flex flex-col gap-1 mb-3 flex-grow">
          <span className="flex items-center text-sm text-dark-500 dark:text-dark-400">
            <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{job.location}</span>
          </span>
          {job.salary && (
            <span className="flex items-center text-sm text-dark-600 dark:text-dark-300 font-medium">
              <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="truncate">{job.salary}</span>
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-3 border-t border-dark-100 dark:border-dark-800">
          <span className="badge badge-gray text-[10px] px-2 py-0.5">
            {getJobTypeLabel(job.jobType)}
          </span>
          <span className="badge badge-gray text-[10px] px-2 py-0.5">
            {getWorkModeLabel(job.workMode)}
          </span>
        </div>
      </article>
    </Link>
  );
}

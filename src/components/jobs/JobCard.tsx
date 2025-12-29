import Link from "next/link";
import { formatDate, getJobTypeLabel, getWorkModeLabel } from "@/lib/utils";

interface JobCardProps {
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
  };
}

export default function JobCard({ job }: JobCardProps) {
  const jobTypeColors: Record<string, string> = {
    FULL_TIME: "badge-blue",
    PART_TIME: "badge-green",
    CONTRACT: "badge-yellow",
    TEMPORARY: "badge-purple",
    INTERNSHIP: "badge-pink",
  };

  const workModeColors: Record<string, string> = {
    REMOTE: "badge-purple",
    HYBRID: "badge-cyan",
    ONSITE: "badge-gray",
  };

  return (
    <Link href={`/jobs/${job.slug}`} className="block group">
      <article className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-12 h-12 bg-dark-100 dark:bg-dark-800 rounded-xl flex items-center justify-center border border-dark-200 dark:border-dark-700 group-hover:border-brand-500/50 transition-colors">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-10 h-10 object-contain rounded"
              />
            ) : (
              <span className="text-brand-500 dark:text-brand-400 font-semibold text-lg">
                {job.company.charAt(0)}
              </span>
            )}
          </div>

          {/* Job Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 truncate group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
              {job.title}
            </h3>
            <p className="text-dark-500 dark:text-dark-400 text-sm">{job.company}</p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                <svg
                  className="w-4 h-4 mr-1 text-dark-400 dark:text-dark-500"
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
                <span className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                  <svg
                    className="w-4 h-4 mr-1 text-dark-400 dark:text-dark-500"
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
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className={`badge ${jobTypeColors[job.jobType] || "badge-gray"}`}>
                {getJobTypeLabel(job.jobType)}
              </span>
              <span className={`badge ${workModeColors[job.workMode] || "badge-gray"}`}>
                {getWorkModeLabel(job.workMode)}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="flex-shrink-0 text-right">
            <span className="text-xs text-dark-500">
              {formatDate(job.createdAt)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

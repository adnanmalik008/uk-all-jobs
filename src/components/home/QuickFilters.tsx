import Link from "next/link";

const filters = [
  { label: "Full-time", href: "/jobs?type=FULL_TIME", color: "badge-blue" },
  { label: "Part-time", href: "/jobs?type=PART_TIME", color: "badge-green" },
  { label: "Remote", href: "/jobs?mode=REMOTE", color: "badge-purple" },
  { label: "Contract", href: "/jobs?type=CONTRACT", color: "badge-yellow" },
  { label: "Internship", href: "/jobs?type=INTERNSHIP", color: "badge-pink" },
];

export default function QuickFilters() {
  return (
    <section className="border-b border-dark-200 dark:border-dark-700/50 bg-dark-50 dark:bg-dark-900/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-sm text-dark-500 whitespace-nowrap">Quick filters:</span>
          {filters.map((filter) => (
            <Link
              key={filter.label}
              href={filter.href}
              className={`${filter.color} px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap hover:scale-105`}
            >
              {filter.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const filters = [
  { label: "Full-time", href: "/jobs?type=FULL_TIME" },
  { label: "Part-time", href: "/jobs?type=PART_TIME" },
  { label: "Remote", href: "/jobs?mode=REMOTE" },
  { label: "Contract", href: "/jobs?type=CONTRACT" },
  { label: "Internship", href: "/jobs?type=INTERNSHIP" },
  { label: "Hybrid", href: "/jobs?mode=HYBRID" },
];

export default function QuickFilters() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <Link
          key={filter.label}
          href={filter.href}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 border border-dark-200 dark:border-dark-700 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
        >
          {filter.label}
        </Link>
      ))}
    </div>
  );
}

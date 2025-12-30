import Image from "next/image";

// Trusted by top UK companies - grayed out logos carousel
const companies = [
  { name: 'BBC', slug: 'bbc' },
  { name: 'HSBC', slug: 'hsbc' },
  { name: 'Tesco', slug: 'tesco' },
  { name: 'Barclays', slug: 'barclays' },
  { name: 'Unilever', slug: 'unilever' },
  { name: 'BP', slug: 'bp' },
  { name: 'GSK', slug: 'gsk' },
  { name: 'Rolls-Royce', slug: 'rolls-royce' },
  { name: 'BT', slug: 'bt' },
  { name: 'Vodafone', slug: 'vodafone' },
];

export default function CompanyLogos() {
  return (
    <section className="py-12 bg-dark-50 dark:bg-dark-900/40 border-y border-dark-200 dark:border-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-dark-500 dark:text-dark-400 mb-8">
          Trusted by leading UK companies
        </p>

        {/* Logo carousel with infinite scroll effect */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-50 dark:from-dark-900/40 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-50 dark:from-dark-900/40 to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-10"
              >
                <Image
                  src={`/images/companies/${company.slug}.svg`}
                  alt={company.name}
                  width={100}
                  height={32}
                  className="h-8 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 dark:invert"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company) => (
              <div
                key={`${company.name}-dup`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-10"
              >
                <Image
                  src={`/images/companies/${company.slug}.svg`}
                  alt={company.name}
                  width={100}
                  height={32}
                  className="h-8 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

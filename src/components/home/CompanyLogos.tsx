// Trusted by top UK companies - grayed out logos carousel
const companies = [
  { name: 'BBC', logo: 'BBC' },
  { name: 'HSBC', logo: 'HSBC' },
  { name: 'Tesco', logo: 'Tesco' },
  { name: 'Barclays', logo: 'Barclays' },
  { name: 'Unilever', logo: 'Unilever' },
  { name: 'BP', logo: 'BP' },
  { name: 'GSK', logo: 'GSK' },
  { name: 'Rolls-Royce', logo: 'Rolls-Royce' },
  { name: 'BT', logo: 'BT' },
  { name: 'Vodafone', logo: 'Vodafone' },
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
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-300 dark:text-dark-600 opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {company.logo}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company) => (
              <div
                key={`${company.name}-dup`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-300 dark:text-dark-600 opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

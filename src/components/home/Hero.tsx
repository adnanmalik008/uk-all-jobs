"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* London Cityscape Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/london-cityscape-sunset.webp"
          alt="London Cityscape at Sunset"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* Dark overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 dark:from-black/80 dark:via-black/60 dark:to-black/90" />

      {/* Color tint overlay - adds warmth in light mode, cool navy in dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 via-transparent to-dark-900/30 dark:from-dark-900/40 dark:via-transparent dark:to-brand-900/20 mix-blend-overlay" />

      {/* Radial vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Horizontal accent lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10" />

      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/15 rounded-full blur-[150px]" />

      {/* Additional accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-in shadow-lg shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-sm text-white/90">Thousands of new jobs posted daily</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading tracking-tight">
            <span className="text-white drop-shadow-lg">Find Your </span>
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-cyan bg-clip-text text-transparent drop-shadow-lg">Dream Job</span>
            <br />
            <span className="text-white drop-shadow-lg">in the UK</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover thousands of job opportunities from top employers across
            the United Kingdom. Your next career move starts here.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl shadow-black/30">
              <div className="flex-1 relative group">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-brand-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all border border-white/10 focus:border-brand-400/50"
                />
              </div>
              <div className="flex-1 relative group">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-brand-400 transition-colors"
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
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400/50 transition-all border border-white/10 focus:border-brand-400/50"
                />
              </div>
              <button
                type="submit"
                className="btn-primary px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search Jobs
              </button>
            </div>
          </form>

          {/* Popular searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-white/60">Popular:</span>
            {['Remote', 'Software Engineer', 'Marketing', 'Healthcare', 'London'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  if (term === 'Remote') {
                    router.push('/jobs?mode=REMOTE');
                  } else if (term === 'London') {
                    router.push('/jobs?location=london');
                  } else {
                    router.push(`/jobs?q=${term}`);
                  }
                }}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-brand-300 hover:border-brand-400/50 hover:bg-white/15 transition-all"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Jobs' },
              { value: '5K+', label: 'Companies' },
              { value: '50K+', label: 'Job Seekers' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-brand-300 via-accent-cyan to-brand-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - blends into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent" />
    </section>
  );
}

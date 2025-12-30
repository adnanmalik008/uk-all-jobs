import { Metadata } from "next";
import Image from "next/image";
import TOCSidebar, { MobileTOC } from "@/components/developer-guide/TOCSidebar";
import ColorSwatch from "@/components/developer-guide/ColorSwatch";
import CodeBlock from "@/components/developer-guide/CodeBlock";
import DownloadButton from "@/components/developer-guide/DownloadButton";
import CopyButton from "@/components/developer-guide/CopyButton";

export const metadata: Metadata = {
  title: "Developer Style Guide | UK All Jobs",
  description: "Brand assets, component documentation, and implementation guidelines for UK All Jobs. Perfect for WordPress developers and designers.",
};

// Color data
const brandColors = [
  { name: "Brand 600 (Primary)", hex: "#00247D", tailwindClass: "bg-brand-600", description: "UK Blue - Main brand color" },
  { name: "Brand 500", hex: "#3d5ba3", tailwindClass: "bg-brand-500", description: "Hover states" },
  { name: "Brand 400", hex: "#5b7fd9", tailwindClass: "bg-brand-400", description: "Links, accents" },
  { name: "Brand 300", hex: "#85a3ff", tailwindClass: "bg-brand-300", description: "Gradient highlights" },
  { name: "Brand 200", hex: "#b8c9ff", tailwindClass: "bg-brand-200", description: "Light backgrounds" },
  { name: "Brand 100", hex: "#dbe4ff", tailwindClass: "bg-brand-100", description: "Very light tints" },
];

const accentColors = [
  { name: "Accent Red (Primary)", hex: "#C8102E", tailwindClass: "bg-accent-red", description: "UK Red - CTAs only" },
  { name: "Accent Red Light", hex: "#e8314a", tailwindClass: "bg-accent-redLight", description: "Hover state" },
  { name: "Accent Red Dark", hex: "#a00d24", tailwindClass: "bg-accent-redDark", description: "Active/pressed state" },
];

const darkColors = [
  { name: "Dark 50", hex: "#fafafa", tailwindClass: "bg-dark-50", description: "Light backgrounds" },
  { name: "Dark 100", hex: "#f4f4f5", tailwindClass: "bg-dark-100", description: "Subtle backgrounds" },
  { name: "Dark 200", hex: "#e4e4e7", tailwindClass: "bg-dark-200", description: "Borders (light mode)" },
  { name: "Dark 400", hex: "#9ca3af", tailwindClass: "bg-dark-400", description: "Placeholder text" },
  { name: "Dark 600", hex: "#4b5563", tailwindClass: "bg-dark-600", description: "Secondary text" },
  { name: "Dark 700", hex: "#1a1f2e", tailwindClass: "bg-dark-700", description: "Borders (dark mode)" },
  { name: "Dark 800", hex: "#0f1420", tailwindClass: "bg-dark-800", description: "Card backgrounds" },
  { name: "Dark 900", hex: "#080c14", tailwindClass: "bg-dark-900", description: "Main dark background" },
  { name: "Dark 950", hex: "#000000", tailwindClass: "bg-dark-950", description: "Pure black" },
];

// Company logos
const companyLogos = [
  { name: "BBC", slug: "bbc" },
  { name: "HSBC", slug: "hsbc" },
  { name: "Tesco", slug: "tesco" },
  { name: "Barclays", slug: "barclays" },
  { name: "Unilever", slug: "unilever" },
  { name: "BP", slug: "bp" },
  { name: "GSK", slug: "gsk" },
  { name: "Rolls-Royce", slug: "rolls-royce" },
  { name: "BT", slug: "bt" },
  { name: "Vodafone", slug: "vodafone" },
];

export default function DeveloperGuidePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-600/10 to-transparent dark:from-brand-600/5 border-b border-dark-200 dark:border-dark-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-50 font-heading">
            Developer Style Guide
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-400 max-w-2xl">
            Complete brand documentation with downloadable assets, code snippets, and WordPress implementation tips.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile TOC */}
        <div className="lg:hidden mb-8">
          <MobileTOC />
        </div>

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <TOCSidebar />
          </aside>

          {/* Content */}
          <main className="space-y-20">
            {/* Colors Section */}
            <section id="colors">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Color Palette</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Our color system is based on the UK flag colors - Blue (#00247D) and Red (#C8102E).
              </p>

              <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Brand Colors (UK Blue)</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {brandColors.map((color) => (
                  <ColorSwatch key={color.hex} {...color} />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Accent Colors (UK Red)</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {accentColors.map((color) => (
                  <ColorSwatch key={color.hex} {...color} />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Neutral / Dark Mode Colors</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {darkColors.map((color) => (
                  <ColorSwatch key={color.hex} {...color} />
                ))}
              </div>
            </section>

            {/* Typography Section */}
            <section id="typography">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Typography</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                We use two Google Fonts: Unbounded for headings and Inter for body text.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">Headings</p>
                  <p className="text-3xl font-heading font-bold text-dark-900 dark:text-dark-50 mb-4">Unbounded</p>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-2">Weights: 400, 500, 600, 700, 800, 900</p>
                  <div className="flex gap-2">
                    <CopyButton text="Unbounded" label="Copy name" />
                    <a
                      href="https://fonts.google.com/specimen/Unbounded"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-all"
                    >
                      Google Fonts
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">Body Text</p>
                  <p className="text-3xl font-sans font-medium text-dark-900 dark:text-dark-50 mb-4">Inter</p>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-2">Weights: 400, 500, 600, 700</p>
                  <div className="flex gap-2">
                    <CopyButton text="Inter" label="Copy name" />
                    <a
                      href="https://fonts.google.com/specimen/Inter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-all"
                    >
                      Google Fonts
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Font Sizes</h3>
              <div className="space-y-3 p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-xs text-dark-900 dark:text-dark-50">text-xs (12px)</span>
                  <span className="text-xs text-dark-500 font-mono">0.75rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-sm text-dark-900 dark:text-dark-50">text-sm (14px)</span>
                  <span className="text-xs text-dark-500 font-mono">0.875rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-base text-dark-900 dark:text-dark-50">text-base (16px)</span>
                  <span className="text-xs text-dark-500 font-mono">1rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-lg text-dark-900 dark:text-dark-50">text-lg (18px)</span>
                  <span className="text-xs text-dark-500 font-mono">1.125rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-xl text-dark-900 dark:text-dark-50">text-xl (20px)</span>
                  <span className="text-xs text-dark-500 font-mono">1.25rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-2xl text-dark-900 dark:text-dark-50 font-heading">text-2xl (24px)</span>
                  <span className="text-xs text-dark-500 font-mono">1.5rem</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dark-200 dark:border-dark-700 pb-2">
                  <span className="text-3xl text-dark-900 dark:text-dark-50 font-heading">text-3xl (30px)</span>
                  <span className="text-xs text-dark-500 font-mono">1.875rem</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl text-dark-900 dark:text-dark-50 font-heading">text-4xl (36px)</span>
                  <span className="text-xs text-dark-500 font-mono">2.25rem</span>
                </div>
              </div>
            </section>

            {/* Buttons Section */}
            <section id="buttons">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Buttons</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Button variants for different actions and contexts.
              </p>

              <div className="space-y-6">
                {/* Primary Button */}
                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <button className="btn-primary">Primary Button</button>
                    <span className="text-sm text-dark-500 dark:text-dark-400">.btn-primary - Use for main CTAs</span>
                  </div>
                  <CodeBlock
                    title="CSS"
                    code={`.btn-primary {
  background-color: #C8102E;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(200, 16, 46, 0.25);
}
.btn-primary:hover {
  background-color: #e8314a;
  transform: translateY(-2px);
}`}
                  />
                </div>

                {/* Blue Button */}
                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <button className="btn-blue">Blue Button</button>
                    <span className="text-sm text-dark-500 dark:text-dark-400">.btn-blue - Secondary CTAs</span>
                  </div>
                  <CodeBlock
                    title="CSS"
                    code={`.btn-blue {
  background-color: #00247D;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(0, 36, 125, 0.25);
}
.btn-blue:hover {
  background-color: #3d5ba3;
  transform: translateY(-2px);
}`}
                  />
                </div>

                {/* Secondary & Outline Buttons */}
                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <button className="btn-secondary">Secondary</button>
                    <button className="btn-outline">Outline</button>
                  </div>
                  <CodeBlock
                    title="CSS"
                    code={`.btn-secondary {
  background-color: rgba(15, 20, 32, 0.5);
  color: #f4f4f5;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  border: 1px solid #1a1f2e;
}

.btn-outline {
  border: 1px solid #4b5563;
  color: #4b5563;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  background: transparent;
}
.btn-outline:hover {
  border-color: #00247D;
  color: #00247D;
}`}
                  />
                </div>
              </div>
            </section>

            {/* Badges Section */}
            <section id="badges">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Badges</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Small labels for status indicators, categories, and tags.
              </p>

              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 mb-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge badge-blue">Featured</span>
                  <span className="badge badge-green">Active</span>
                  <span className="badge badge-purple">Remote</span>
                  <span className="badge badge-yellow">Contract</span>
                  <span className="badge badge-pink">Internship</span>
                  <span className="badge badge-gray">Full-time</span>
                  <span className="badge badge-red">Urgent</span>
                  <span className="badge badge-cyan">Hybrid</span>
                </div>
                <CodeBlock
                  title="CSS"
                  code={`.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-blue {
  background-color: rgba(0, 36, 125, 0.2);
  color: #5b7fd9;
  border: 1px solid rgba(0, 36, 125, 0.3);
}

.badge-red {
  background-color: rgba(200, 16, 46, 0.2);
  color: #C8102E;
  border: 1px solid rgba(200, 16, 46, 0.3);
}

.badge-gray {
  background-color: #e4e4e7;
  color: #4b5563;
  border: 1px solid #d4d4d8;
}`}
                />
              </div>
            </section>

            {/* Cards Section */}
            <section id="cards">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Cards</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Container components for grouping related content.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="card">
                  <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Standard Card</h4>
                  <p className="text-sm text-dark-600 dark:text-dark-400">.card - Default container with subtle hover effect.</p>
                </div>
                <div className="card-glow">
                  <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Glow Card</h4>
                  <p className="text-sm text-dark-600 dark:text-dark-400">.card-glow - Card with brand-colored glow on hover.</p>
                </div>
              </div>

              <CodeBlock
                title="CSS"
                code={`.card {
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #e4e4e7;
  padding: 1.5rem;
  transition: all 0.3s;
}

.card:hover {
  border-color: #d4d4d8;
  background-color: #fafafa;
}

/* Dark mode */
.dark .card {
  background-color: rgba(8, 12, 20, 0.6);
  border-color: #1a1f2e;
}

.card-glow:hover {
  border-color: rgba(0, 36, 125, 0.5);
  box-shadow: 0 10px 15px -3px rgba(0, 36, 125, 0.1);
}`}
              />
            </section>

            {/* Form Inputs Section */}
            <section id="inputs">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Form Inputs</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Input field styles for forms and search.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Standard Input</label>
                  <input type="text" className="input" placeholder="Enter text..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Large Input</label>
                  <input type="text" className="input-lg" placeholder="Search jobs..." />
                </div>
              </div>

              <CodeBlock
                title="CSS"
                code={`.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #fafafa;
  border: 1px solid #e4e4e7;
  color: #080c14;
  transition: all 0.3s;
}

.input:focus {
  border-color: #00247D;
  outline: none;
  box-shadow: 0 0 0 1px #00247D;
}

.input::placeholder {
  color: #9ca3af;
}

.input-lg {
  padding: 1rem 1.25rem;
  font-size: 1.125rem;
}`}
              />
            </section>

            {/* Shadows & Effects Section */}
            <section id="shadows">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Shadows & Effects</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Box shadows and glow effects for depth and emphasis.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="p-8 rounded-xl bg-white dark:bg-dark-900 shadow-glow flex items-center justify-center">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">shadow-glow</span>
                </div>
                <div className="p-8 rounded-xl bg-white dark:bg-dark-900 shadow-glow-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">shadow-glow-lg</span>
                </div>
              </div>

              <CodeBlock
                title="CSS"
                code={`.shadow-glow {
  box-shadow: 0 0 40px rgba(0, 36, 125, 0.3);
}

.shadow-glow-lg {
  box-shadow: 0 0 60px rgba(0, 36, 125, 0.4);
}

.shadow-glow-red {
  box-shadow: 0 0 40px rgba(200, 16, 46, 0.3);
}`}
              />
            </section>

            {/* Grid Patterns Section */}
            <section id="patterns">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Grid Patterns</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Background patterns for visual texture.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="h-40 rounded-xl bg-dark-900 bg-grid flex items-center justify-center">
                  <span className="text-sm font-medium text-white/70">.bg-grid</span>
                </div>
                <div className="h-40 rounded-xl bg-dark-100 dark:bg-dark-800 bg-grid-subtle flex items-center justify-center">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">.bg-grid-subtle</span>
                </div>
              </div>

              <CodeBlock
                title="CSS"
                code={`.bg-grid {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-grid-subtle {
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}`}
              />
            </section>

            {/* Assets Section */}
            <section id="assets">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Downloadable Assets</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Brand assets ready for download and use.
              </p>

              {/* Main Logo */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 mb-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Logo</h3>
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-4 bg-dark-100 dark:bg-dark-800 rounded-xl">
                    <Image src="/images/logo.svg" alt="UK All Jobs Logo" width={140} height={40} />
                  </div>
                  <div className="p-4 bg-dark-900 rounded-xl">
                    <Image src="/images/logo.svg" alt="UK All Jobs Logo" width={140} height={40} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <DownloadButton href="/assets/logo.svg" filename="ukalljobs-logo.svg" label="Download SVG" />
                </div>
              </div>

              {/* Favicon */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 mb-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Favicon</h3>
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-4 bg-dark-100 dark:bg-dark-800 rounded-xl">
                    <Image src="/favicon.png" alt="Favicon" width={64} height={64} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <DownloadButton href="/assets/favicon.png" filename="favicon.png" label="Download PNG" />
                  <DownloadButton href="/assets/favicon.ico" filename="favicon.ico" label="Download ICO" />
                </div>
              </div>

              {/* Company Logos */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Company Logos</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                  Simplified monochrome logos for the trusted companies carousel.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {companyLogos.map((company) => (
                    <div key={company.slug} className="p-4 bg-dark-100 dark:bg-dark-800 rounded-xl text-center">
                      <Image
                        src={`/images/companies/${company.slug}.svg`}
                        alt={company.name}
                        width={80}
                        height={30}
                        className="mx-auto mb-2 dark:invert opacity-60"
                      />
                      <DownloadButton
                        href={`/images/companies/${company.slug}.svg`}
                        filename={`${company.slug}.svg`}
                        label="SVG"
                        className="text-[10px] px-2 py-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Animations Section */}
            <section id="animations">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Animations</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                CSS keyframe animations used throughout the site.
              </p>

              <div className="space-y-6">
                <CodeBlock
                  title="Float Animation"
                  code={`@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}`}
                />

                <CodeBlock
                  title="Glow Animation"
                  code={`@keyframes glow {
  0% { box-shadow: 0 0 20px rgba(0, 36, 125, 0.3); }
  100% { box-shadow: 0 0 40px rgba(0, 36, 125, 0.6); }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite alternate;
}`}
                />

                <CodeBlock
                  title="Scroll Animation (for carousels)"
                  code={`@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}`}
                />

                <CodeBlock
                  title="Fade In Animation"
                  code={`@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.5s ease-out forwards;
}`}
                />
              </div>
            </section>

            {/* WordPress Tips Section */}
            <section id="wordpress">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">WordPress Implementation</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Tips for implementing this design system in WordPress themes.
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">1. Enqueue Fonts</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                    Add to your theme&apos;s functions.php:
                  </p>
                  <CodeBlock
                    title="functions.php"
                    language="php"
                    code={`function mytheme_enqueue_fonts() {
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@400;500;600;700;800;900&display=swap',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_fonts');`}
                  />
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">2. CSS Variables</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                    Add these CSS variables to your theme&apos;s stylesheet:
                  </p>
                  <CodeBlock
                    title="style.css"
                    code={`:root {
  /* Brand Colors */
  --brand-600: #00247D;
  --brand-500: #3d5ba3;
  --brand-400: #5b7fd9;
  --brand-300: #85a3ff;

  /* Accent Colors */
  --accent-red: #C8102E;
  --accent-red-light: #e8314a;

  /* Dark Mode Colors */
  --dark-50: #fafafa;
  --dark-100: #f4f4f5;
  --dark-200: #e4e4e7;
  --dark-700: #1a1f2e;
  --dark-800: #0f1420;
  --dark-900: #080c14;

  /* Fonts */
  --font-heading: 'Unbounded', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  color: var(--dark-900);
  background-color: white;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}`}
                  />
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">3. Dark Mode Toggle</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                    JavaScript for dark mode toggle:
                  </p>
                  <CodeBlock
                    title="JavaScript"
                    language="javascript"
                    code={`// Check for saved preference or system preference
const darkMode = localStorage.getItem('darkMode') === 'true' ||
  (!localStorage.getItem('darkMode') &&
   window.matchMedia('(prefers-color-scheme: dark)').matches);

// Apply dark mode class
if (darkMode) {
  document.documentElement.classList.add('dark');
}

// Toggle function
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
}`}
                  />
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">4. Dark Mode CSS</h3>
                  <CodeBlock
                    title="style.css"
                    code={`/* Dark mode overrides */
.dark {
  --background: #000000;
  --foreground: #fafafa;
}

.dark body {
  background-color: #000000;
  color: #fafafa;
}

.dark .card {
  background-color: rgba(8, 12, 20, 0.6);
  border-color: #1a1f2e;
}

.dark .btn-secondary {
  background-color: rgba(15, 20, 32, 0.5);
  border-color: #1a1f2e;
}`}
                  />
                </div>
              </div>
            </section>

            {/* Component Examples Section */}
            <section id="components">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">Component Examples</h2>
              <p className="text-dark-600 dark:text-dark-400 mb-8">
                Live examples of common UI patterns.
              </p>

              {/* Job Card Example */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 mb-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Job Card</h3>
                <div className="max-w-sm mb-4">
                  <article className="h-full bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-xl border border-dark-200 dark:border-dark-700 p-5 transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">A</span>
                      </div>
                      <div>
                        <p className="text-xs text-dark-500 dark:text-dark-400">Acme Corp</p>
                        <p className="text-xs text-dark-400 dark:text-dark-500">2 days ago</p>
                      </div>
                      <span className="badge badge-blue text-[10px] px-2 py-0.5 ml-auto">Featured</span>
                    </div>
                    <h4 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">Senior Software Engineer</h4>
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        London, UK
                      </span>
                      <span className="flex items-center text-sm text-dark-600 dark:text-dark-300 font-medium">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        £80,000 - £100,000
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-100 dark:border-dark-800">
                      <span className="badge badge-gray text-[10px] px-2 py-0.5">Full-time</span>
                      <span className="badge badge-gray text-[10px] px-2 py-0.5">Remote</span>
                    </div>
                  </article>
                </div>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Hover over the card to see the interaction effect.
                </p>
              </div>

              {/* Search Form Example */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700 mb-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">Search Form</h3>
                <div className="bg-dark-900 rounded-2xl p-4 mb-4">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col md:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Job title, keywords..."
                      className="flex-1 pl-4 pr-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-xl focus:outline-none border border-white/10"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="flex-1 pl-4 pr-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-xl focus:outline-none border border-white/10"
                    />
                    <button className="btn-primary px-6 py-3">
                      Search
                    </button>
                  </div>
                </div>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Glassmorphism search form used in the hero section.
                </p>
              </div>

              {/* Buttons Grid */}
              <div className="p-6 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-4">All Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">Primary</button>
                  <button className="btn-blue">Blue</button>
                  <button className="btn-secondary">Secondary</button>
                  <button className="btn-outline">Outline</button>
                  <button className="btn-glow">Glow Effect</button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

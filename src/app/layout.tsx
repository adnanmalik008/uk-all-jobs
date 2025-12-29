import type { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: 'UK All Jobs - Find Your Dream Job in the UK',
    template: '%s | UK All Jobs',
  },
  description:
    'Discover thousands of job opportunities across the United Kingdom. Search by location, category, and job type to find your perfect career match.',
  keywords: [
    'UK jobs',
    'jobs in UK',
    'employment UK',
    'career opportunities',
    'job search',
    'remote jobs UK',
  ],
  authors: [{ name: 'UK All Jobs' }],
  creator: 'UK All Jobs',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'UK All Jobs',
    title: 'UK All Jobs - Find Your Dream Job in the UK',
    description:
      'Discover thousands of job opportunities across the United Kingdom.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK All Jobs - Find Your Dream Job in the UK',
    description:
      'Discover thousands of job opportunities across the United Kingdom.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${unbounded.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen relative bg-white dark:bg-black transition-colors duration-300">
            {/* Subtle grid pattern overlay for content areas */}
            <div className="fixed inset-0 bg-grid-subtle pointer-events-none opacity-40 dark:opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

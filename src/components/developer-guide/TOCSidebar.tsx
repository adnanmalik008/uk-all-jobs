"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  label: string;
}

const tocItems: TOCItem[] = [
  { id: "colors", label: "Color Palette" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "cards", label: "Cards" },
  { id: "inputs", label: "Form Inputs" },
  { id: "shadows", label: "Shadows & Effects" },
  { id: "patterns", label: "Grid Patterns" },
  { id: "assets", label: "Assets" },
  { id: "animations", label: "Animations" },
  { id: "wordpress", label: "WordPress Tips" },
  { id: "components", label: "Component Examples" },
];

export default function TOCSidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
      <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-4 text-sm uppercase tracking-wider">
        Contents
      </h3>
      <ul className="space-y-1">
        {tocItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${
                activeSection === id
                  ? "bg-brand-600/10 text-brand-600 dark:text-brand-400 font-medium border-l-2 border-brand-600"
                  : "text-dark-600 dark:text-dark-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-dark-100 dark:hover:bg-dark-800"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Mobile dropdown version
export function MobileTOC() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl text-left"
      >
        <span className="font-medium text-dark-900 dark:text-dark-50">Jump to section</span>
        <svg
          className={`w-5 h-5 text-dark-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
          <ul className="py-2">
            {tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

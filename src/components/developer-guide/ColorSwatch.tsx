"use client";

import CopyButton from "./CopyButton";

interface ColorSwatchProps {
  name: string;
  hex: string;
  tailwindClass: string;
  description?: string;
}

export default function ColorSwatch({ name, hex, tailwindClass, description }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-dark-900/60 border border-dark-200 dark:border-dark-700">
      <div
        className={`w-14 h-14 rounded-lg border border-dark-200 dark:border-dark-600 flex-shrink-0 ${tailwindClass}`}
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-dark-900 dark:text-dark-50 text-sm">{name}</p>
        <p className="text-xs text-dark-500 dark:text-dark-400 font-mono">{hex}</p>
        {description && (
          <p className="text-xs text-dark-400 dark:text-dark-500 mt-0.5">{description}</p>
        )}
      </div>
      <CopyButton text={hex} label={hex} />
    </div>
  );
}

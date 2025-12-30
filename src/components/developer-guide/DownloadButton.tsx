interface DownloadButtonProps {
  href: string;
  filename: string;
  label?: string;
  className?: string;
}

export default function DownloadButton({ href, filename, label = "Download", className = "" }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={filename}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg
                 bg-brand-600 text-white hover:bg-brand-500 transition-all ${className}`}
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {label}
    </a>
  );
}

import { useState } from "react";

/** Shows a product image inside a consistent square area.
 *  - Never stretches: the image keeps its own proportions.
 *  - If `src` is empty or fails to load, an attractive placeholder is shown. */
export default function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const missing = !src || failed;

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#121212] ${className}`}
    >
      {missing ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <svg
            className="h-10 w-10 text-[#D4AF37]/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className="text-[11px] font-semibold tracking-wide text-[#A39E93]">
            Image coming soon
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500"
        />
      )}
    </div>
  );
}

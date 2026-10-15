import { useEffect, useState } from "react";

export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, "");
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export const go = (path: string) => {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
};

export function Header({
  query,
  setQuery,
  showSearch = true,
}: {
  query: string;
  setQuery: (v: string) => void;
  showSearch?: boolean;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1265px] flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        <button
          onClick={() => go("")}
          className="group flex items-center gap-3 self-start rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
          aria-label="AMZN Kitchens home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/50 bg-[#151310] text-lg font-extrabold text-[#D4AF37] transition-colors group-hover:bg-[#1E1E1E]">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-[#EFEADF]">
              AMZN <span className="text-[#D4AF37]">Kitchens</span>
            </span>
            <span className="block text-xs font-medium tracking-wide text-[#A39E93]">
              Smart Finds. Everyday Living.
            </span>
          </span>
        </button>

        {showSearch && (
          <div className="w-full md:max-w-sm">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A39E93]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (window.location.hash.startsWith("#/product")) go("");
                }}
                placeholder="Search products…"
                className="w-full rounded-lg border border-white/10 bg-[#151310] py-3 pl-10 pr-3 text-[15px] text-[#EFEADF] placeholder-[#A39E93] transition-colors focus:border-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1265px] space-y-4 px-4 py-10 sm:px-6">
        <p className="rounded-lg border border-white/10 bg-[#151310] p-4 text-sm leading-relaxed text-[#A39E93]">
          <span className="font-semibold text-[#EFEADF]">Affiliate disclosure: </span>
          This website contains affiliate links. I may earn a commission on qualifying
          purchases at no additional cost to you.
        </p>
        <div className="flex flex-col gap-2 text-sm text-[#A39E93] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AMZN Kitchens. All rights reserved.</p>
          <p>
            Design by{" "}
            <a
              href="https://www.webproxysolutions.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-semibold text-[#D4AF37] underline-offset-4 transition-colors hover:text-[#DDBF5F] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              Web Proxy Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

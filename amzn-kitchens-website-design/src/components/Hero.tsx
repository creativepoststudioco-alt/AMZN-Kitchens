import { heroImage } from "../assets/heroImage";

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* gold ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DDBF5F]/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-[1265px] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-lg border border-[#D4AF37]/40 bg-[#151310] px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-[#D4AF37]">
            AS SEEN IN MY INSTAGRAM REELS
          </span>

          <h1 className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#EFEADF] sm:text-5xl lg:text-[56px]">
            Discover Smart Products for{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#DDBF5F] bg-clip-text text-transparent">
              Everyday Living
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#A39E93] sm:text-lg lg:mx-0">
            Explore clever kitchen gadgets and everyday essentials that make life
            easier.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={onExplore}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#DDBF5F] px-8 py-4 text-base font-extrabold text-black transition-all duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDBF5F] sm:w-auto"
            >
              Explore Products
              <span aria-hidden="true">↓</span>
            </button>
            <p className="text-sm text-[#A39E93]">Ships via Amazon India &amp; USA</p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#D4AF37]/25 bg-[#151310]">
            <img
              src={heroImage}
              alt="Modern kitchen gadgets arranged on a dark countertop"
              width={1536}
              height={864}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

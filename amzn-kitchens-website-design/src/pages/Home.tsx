import { useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home({ query }: { query: string }) {
  const q = query.trim().toLowerCase();
  const list = useMemo(
    () =>
      !q
        ? products
        : products.filter((p) =>
            `${p.name} ${p.shortDesc} ${p.longDesc} ${p.features.join(" ")}`
              .toLowerCase()
              .includes(q),
          ),
    [q],
  );

  const scrollToGrid = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {!q && <Hero onExplore={scrollToGrid} />}

      <div id="products" className="mx-auto max-w-[1265px] scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-extrabold tracking-tight text-[#EFEADF] sm:text-2xl">
            {q ? `Results for “${query}”` : "All Products"}
          </h2>
          <span className="shrink-0 text-sm text-[#A39E93]">
            {list.length} products
          </span>
        </div>

        {list.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-[#151310] p-10 text-center text-[#A39E93]">
            No products matched your search. Try a different keyword.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

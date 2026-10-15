import { useEffect } from "react";
import { getProduct, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import { go } from "../components/Layout";

function BagIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

/** Country purchase option. Shows "Link coming soon" until a real
 *  affiliate URL is added for that country in src/data/products.ts */
function BuyButton({
  url,
  label,
  color,
  hover,
}: {
  url: string;
  label: string;
  color: string;
  hover: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15">
        <BagIcon />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-base font-extrabold">{label}</span>
        <span className="block text-sm font-medium opacity-90">
          {url ? "Shop Now" : "Link coming soon"}
        </span>
      </span>
    </>
  );

  const base =
    "flex flex-1 items-center gap-3 rounded-lg px-5 py-4 text-white transition-all duration-200";

  if (!url) {
    return (
      <div
        aria-disabled="true"
        className={`${base} cursor-not-allowed opacity-60`}
        style={{ backgroundColor: color }}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${base} hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      style={{ backgroundColor: color, outlineColor: hover }}
    >
      {inner}
      <span aria-hidden="true" className="ml-auto text-xl">
        →
      </span>
    </a>
  );
}

export default function ProductPage({ id }: { id: string }) {
  const product = getProduct(id);

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} — AMZN Kitchens`;
    const meta =
      document.querySelector('meta[name="description"]') ??
      document.head.appendChild(
        Object.assign(document.createElement("meta"), { name: "description" }),
      );
    meta.setAttribute("content", product.shortDesc);
    return () => {
      document.title = "AMZN Kitchens — Smart Finds. Everyday Living.";
    };
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto max-w-[1265px] px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-[#EFEADF]">Product not found</h1>
        <button
          onClick={() => go("")}
          className="mt-6 rounded-lg bg-[#D4AF37] px-5 py-3 font-bold text-black hover:bg-[#DDBF5F]"
        >
          Back to Products
        </button>
      </main>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="mx-auto max-w-[1265px] px-4 py-6 sm:px-6 sm:py-10">
      <button
        onClick={() => go("")}
        className="mb-6 inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-[#A39E93] transition-colors hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
      >
        <span aria-hidden="true">←</span> Back to Products
      </button>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-lg border border-white/10">
          <ProductImage src={product.image} alt={product.name} priority />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold leading-tight text-[#EFEADF] sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#A39E93] sm:text-base">
            {product.longDesc}
          </p>

          <h2 className="mt-8 text-lg font-bold text-[#EFEADF]">Key Features</h2>
          <ul className="mt-3 space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] text-[#A39E93]">
                <span className="mt-[2px] text-[#D4AF37]" aria-hidden="true">
                  ◆
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-lg border border-[#D4AF37]/30 bg-[#151310] p-5">
            <h2 className="text-lg font-bold text-[#EFEADF]">Choose Your Country</h2>
            <p className="mt-1 text-sm text-[#A39E93]">
              Pick your Amazon store to open this product.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <BuyButton
                url={product.amazonIN}
                label="Buy in India"
                color="#16865C"
                hover="#1FB47C"
              />
              <BuyButton
                url={product.amazonUS}
                label="Buy in the USA"
                color="#2864DC"
                hover="#5A8CF0"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#A39E93]">
              This website contains affiliate links. I may earn a commission on
              qualifying purchases at no additional cost to you.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-5 text-xl font-bold text-[#EFEADF]">More smart finds</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

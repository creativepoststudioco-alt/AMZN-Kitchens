import type { Product } from "../data/products";
import { go } from "./Layout";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const open = () => go(`/product/${product.id}`);
  return (
    <article
      onClick={open}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-white/10 bg-[#151310] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60"
    >
      <div className="overflow-hidden">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-bold leading-snug text-[#EFEADF]">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-[#A39E93]">
          {product.shortDesc}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
          className="mt-2 w-full rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-[#DDBF5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDBF5F]"
        >
          View Product
        </button>
      </div>
    </article>
  );
}

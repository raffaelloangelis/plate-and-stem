import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.handle}`} className="block group">
      <div className="aspect-[4/5] overflow-hidden bg-bone-dark relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 label bg-bone/95 text-forest px-3 py-1.5">
          {product.collection}
        </span>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-baseline gap-3">
          <h3 className="font-display text-xl tracking-tight">{product.name}</h3>
          <span className="text-sm tabular-nums">${product.price}</span>
        </div>
        <p className="mt-1 text-xs text-forest-soft">{product.size}</p>
        <p className="mt-3 text-sm text-forest-soft leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}

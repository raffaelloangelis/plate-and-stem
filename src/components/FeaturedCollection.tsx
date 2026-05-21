import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedCollection() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label text-sage-dark mb-4">The four-step ritual</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02]">
            Four products. <span className="italic">No fillers.</span>
          </h2>
          <p className="mt-5 text-forest-soft leading-relaxed">
            We make four things. Each one tested on a panel of 41 sensitivity-prone
            participants, published with its data, and labeled with every named
            farm we used.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {products.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            href="/collections/treat"
            className="inline-block px-8 py-3 bg-forest text-bone label hover:bg-sage hover:text-forest transition-colors"
          >
            Build your ritual
          </Link>
        </div>
      </div>
    </section>
  );
}

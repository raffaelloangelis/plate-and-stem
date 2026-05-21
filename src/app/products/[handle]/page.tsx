import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const p = getProduct(handle);
  return {
    title: p ? `${p.name} — Plate & Stem` : "Product — Plate & Stem",
    description: p?.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const related = products.filter((p) => p.handle !== handle).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="wrap pt-8 label text-forest-soft">
        <Link href="/" className="hover:text-sage-dark">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/collections/${product.collection}`} className="hover:text-sage-dark capitalize">
          {product.collection}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-forest">{product.name}</span>
      </div>

      <section className="py-10 md:py-12">
        <div className="wrap grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Gallery — stacked, centered */}
          <div className="space-y-3">
            {product.images.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-bone-dark">
                <img
                  src={src}
                  alt={`${product.name} — angle ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Info — sticky */}
          <div className="md:sticky md:top-24 md:self-start">
            <p className="label text-sage-dark mb-4 capitalize">{product.collection} · {product.size}</p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.98]">
              {product.name}
            </h1>
            <p className="mt-5 text-forest-soft leading-relaxed text-lg">
              {product.shortDescription}
            </p>
            <p className="mt-8 font-display text-3xl tabular-nums">${product.price}</p>

            <div className="mt-8 pt-7 border-t border-line">
              <div className="label mb-3">Suitable for</div>
              <div className="flex flex-wrap gap-2">
                {product.skinTypes.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-sage/40 text-forest text-xs border border-sage rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-forest text-bone label hover:bg-sage hover:text-forest transition-colors">
              Add — ${product.price}
            </button>
            <p className="text-center mt-3 label text-forest-soft">
              Free shipping over $60 · Free skin consult included
            </p>

            <div className="mt-12 pt-8 border-t border-line">
              <p className="label text-sage-dark mb-3">About this formula</p>
              <p className="leading-relaxed text-forest/85">{product.description}</p>
            </div>

            {/* Tabular ingredient breakdown — Plate & Stem signature */}
            <div className="mt-10 pt-8 border-t border-line">
              <p className="label text-sage-dark mb-5">Key actives</p>
              <div className="space-y-0">
                {product.keyActives.map((a) => (
                  <div key={a.name} className="grid grid-cols-[auto_1fr_auto] gap-4 py-3.5 border-b border-line items-baseline">
                    <span className="font-display text-base">{a.name}</span>
                    <span className="text-sm text-forest-soft">{a.role}</span>
                    <span className="label tabular-nums">{a.pct}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-line">
              <p className="label text-sage-dark mb-3">The ritual</p>
              <p className="leading-relaxed text-forest/85">{product.ritual}</p>
            </div>

            <div className="mt-10 pt-8 border-t border-line text-sm">
              <div className="tab-row">
                <span className="label">Full ingredients</span>
                <span></span>
              </div>
              <p className="pt-4 text-forest-soft leading-relaxed text-xs">{product.fullIngredients}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-line grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="label mb-2 text-sage-dark">Made in</div>
                <p>{product.origin}</p>
              </div>
              <div>
                <div className="label mb-2 text-sage-dark">Volume</div>
                <p>{product.size}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-rule mt-20" />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="label text-sage-dark mb-3">Layers nicely with</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              The rest of the ritual
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-5xl mx-auto">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

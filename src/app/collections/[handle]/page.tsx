import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  collections,
  getCollection,
  productsInCollection,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const c = getCollection(handle);
  return {
    title: c ? `${c.name} — Plate & Stem` : "Collection — Plate & Stem",
    description: c?.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = getCollection(handle);
  if (!collection) notFound();

  const items = productsInCollection(handle);

  return (
    <>
      <section className="py-20 md:py-24">
        <div className="wrap max-w-3xl text-center">
          <p className="label text-sage-dark mb-5">{collection.subtitle}</p>
          <h1 className="font-display text-6xl md:text-7xl tracking-tight leading-[0.95]">
            {collection.name}
          </h1>
          <p className="mt-7 text-forest-soft leading-relaxed">
            {collection.description}
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-16 md:py-20">
        <div className="wrap">
          <div className="flex justify-between items-center mb-10 label text-forest-soft">
            <span>{items.length} {items.length === 1 ? "product" : "products"}</span>
            <span>Compounded in Switzerland</span>
          </div>
          {items.length === 0 ? (
            <p className="text-center text-forest-soft py-20">
              Nothing in this step yet. Our next distillation lands in eight
              weeks.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 max-w-5xl mx-auto">
              {items.map((p) => (
                <ProductCard key={p.handle} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The atelier — Plate & Stem",
  description:
    "Founded by an ethnobotanist and a board-certified dermatologist. Five named farms, three university labs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="wrap max-w-3xl text-center">
          <p className="label text-sage-dark mb-5">The atelier</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.98]">
            Skincare written <span className="italic">in two hands.</span>
          </h1>
          <p className="mt-9 text-lg leading-relaxed text-forest/85">
            One belongs to Anja, a botanist who spent eleven years cataloguing
            medicinal plants in Switzerland and Provence. The other belongs to
            Stefan, a board-certified dermatologist who has seen the back of
            twenty-six years of formulation trends. Plate &amp; Stem is what
            happens at their kitchen table.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1763027076863-698a6a72c164?w=2400&q=90&auto=format&fit=crop"
            alt="Plate & Stem botanical sourcing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <hr className="section-rule mt-24" />

      <section className="py-24 md:py-28">
        <div className="wrap grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="label text-sage-dark mb-4">Our farms</p>
            <h2 className="font-display text-4xl tracking-tight leading-[1.05]">
              Five names <span className="italic">we say out loud.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-forest/85">
              We grow nothing ourselves. We work with five farms — selected for
              their soil reports, their workers, and the way they pick at six
              in the morning when the oils are still in the leaves.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="tab-row"><span>Hervé Rohart</span><span className="text-forest-soft">Grasse, France · Rose centifolia</span></li>
              <li className="tab-row"><span>Estancia Verdana</span><span className="text-forest-soft">Andalucía, Spain · Olive squalane</span></li>
              <li className="tab-row"><span>Bos van Brielle</span><span className="text-forest-soft">Brielle, Netherlands · Tulipa-derived ferment</span></li>
              <li className="tab-row"><span>Lehngut Schimmel</span><span className="text-forest-soft">Bern, Switzerland · Mountain reishi</span></li>
              <li className="tab-row"><span>Oats from Sokołów</span><span className="text-forest-soft">Sokołów, Poland · Beta-glucan</span></li>
            </ul>
          </div>
          <div>
            <p className="label text-sage-dark mb-4">Our science</p>
            <h2 className="font-display text-4xl tracking-tight leading-[1.05]">
              Tested before <span className="italic">they reach you.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-forest/85">
              Every formula goes through a 12-week, dermatologist-supervised
              panel of 41 sensitivity-prone participants. We publish the raw
              data — not just the marketing slide — in every product&apos;s
              dossier.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="tab-row"><span>Panel size</span><span className="text-forest-soft">41 · skin-type stratified</span></li>
              <li className="tab-row"><span>Trial length</span><span className="text-forest-soft">12 weeks · twice-daily use</span></li>
              <li className="tab-row"><span>Endpoints</span><span className="text-forest-soft">Corneometer · TEWL · VISIA</span></li>
              <li className="tab-row"><span>Reviewing lab</span><span className="text-forest-soft">Università della Svizzera, Lugano</span></li>
              <li className="tab-row"><span>Data</span><span className="text-forest-soft">Open · linked from PDP</span></li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 bg-bone-dark">
        <div className="wrap text-center max-w-3xl">
          <p className="font-display italic text-3xl md:text-4xl leading-snug">
            &ldquo;A clean ingredient list does not make a clean product. A short one,
            with names you can pronounce, comes closer.&rdquo;
          </p>
          <p className="mt-8 label text-sage-dark">— Dr. Stefan Bauer · Co-founder, Dermatologist</p>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="wrap text-center max-w-xl">
          <p className="label text-sage-dark mb-4">Begin</p>
          <h2 className="font-display text-4xl tracking-tight">Build your ritual.</h2>
          <p className="mt-4 text-forest-soft leading-relaxed">
            Four steps, four products. Layer in order or use one at a time.
          </p>
          <Link
            href="/collections/treat"
            className="inline-block mt-8 px-8 py-3.5 bg-forest text-bone label hover:bg-sage hover:text-forest transition-colors"
          >
            Shop the collection
          </Link>
        </div>
      </section>
    </>
  );
}

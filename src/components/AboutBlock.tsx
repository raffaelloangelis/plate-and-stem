import Link from "next/link";

export default function AboutBlock() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1764599955087-7095c3540510?w=1200&q=88&auto=format&fit=crop"
              alt="Inside the Plate & Stem atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="label text-sage-dark mb-5">The atelier</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02]">
              A botanist <span className="italic">and</span> a dermatologist.
            </h2>
            <p className="mt-7 leading-relaxed text-forest/90 max-w-md">
              Plate &amp; Stem was founded in 2022 by Dr. Anja Reuter, an
              ethnobotanist who spent eleven years cataloguing medicinal plants
              for the University of Lugano, and Dr. Stefan Bauer, a board-certified
              dermatologist with a private practice in Zurich.
            </p>
            <p className="mt-4 leading-relaxed text-forest/90 max-w-md">
              We grow nothing ourselves. We work with five named farms — Hervé
              Rohart in Grasse, Estancia Verdana in Andalucía, Bos van Brielle
              in Holland — and three university labs.
            </p>
            <Link
              href="/about"
              className="inline-block mt-9 label pb-1 border-b border-forest hover:text-sage-dark hover:border-sage-dark transition-colors"
            >
              The longer story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

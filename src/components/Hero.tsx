import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[88vh] min-h-[620px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1763027076863-698a6a72c164?w=2200&q=90&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-bone/10" />

        {/* Centered overlay copy — clinical-poetic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="wrap text-center text-bone">
            <p className="label text-sage-dark mb-6 inline-block bg-bone/90 px-4 py-2 backdrop-blur-sm rounded-full text-forest">
              Spring 2026 · Distillation №14
            </p>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight leading-[0.95] max-w-4xl mx-auto">
              <span className="italic">Botanicals,</span><br />
              distilled.
            </h1>
            <p className="mt-8 text-bone/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Plant-led skincare, formulated by a botanist and a dermatologist.
              Each ingredient traced to a named farm — and printed on every bottle.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                href="/collections/treat"
                className="px-8 py-3.5 bg-bone text-forest text-sm font-medium hover:bg-sage hover:text-forest transition-colors"
              >
                Shop the ritual
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 border border-bone/70 text-bone text-sm font-medium hover:bg-bone hover:text-forest transition-colors"
              >
                The science
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip directly below hero */}
      <div className="bg-bone border-y border-sage">
        <div className="wrap py-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center label text-forest-soft">
          <span>92% naturally derived</span>
          <span>Dermatologist-tested</span>
          <span>Reef-safe · vegan</span>
          <span>Made in Switzerland</span>
        </div>
      </div>
    </section>
  );
}

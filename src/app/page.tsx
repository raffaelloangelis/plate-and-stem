import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import AboutBlock from "@/components/AboutBlock";
import NewsletterForm from "@/components/NewsletterForm";
import { collections } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedCollection />

      <hr className="section-rule" />

      {/* Step-numbered collection tiles */}
      <section className="py-24 md:py-28">
        <div className="wrap">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label text-sage-dark mb-4">Four steps</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              An order, <span className="italic">not a rule.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {collections.map((c) => (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-bone-dark">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="label text-sage-dark">{c.subtitle}</span>
                  <h3 className="font-display text-2xl tracking-tight">{c.name}</h3>
                </div>
                <p className="mt-2 text-sm text-forest-soft leading-relaxed">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <AboutBlock />

      <hr className="section-rule" />

      {/* Clinical-poetic quote band */}
      <section className="py-20 bg-bone-dark">
        <div className="wrap max-w-3xl text-center">
          <p className="font-display italic text-3xl md:text-4xl leading-snug text-forest">
            &ldquo;A serum is a piece of chemistry. We just want the chemistry to come from a plant whose
            grower we know by name.&rdquo;
          </p>
          <p className="mt-8 label text-sage-dark">— Dr. Anja Reuter · Co-founder, Ethnobotanist</p>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}

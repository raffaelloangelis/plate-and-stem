import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bone-dark text-forest mt-24 border-t border-sage">
      <div className="wrap py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display text-3xl tracking-tight">
              Plate <span className="italic text-sage-dark">&amp;</span> Stem
            </div>
            <p className="mt-4 text-sm max-w-sm leading-relaxed text-forest-soft">
              Botanicals, distilled. Plant-led skincare formulated by a
              botanist and a dermatologist, in small batches in Switzerland.
            </p>
            <p className="mt-4 label text-sage-dark">PEFC-certified · Reef-safe · Vegan</p>
          </div>
          <div>
            <h4 className="label mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-forest-soft">
              <li><Link href="/collections/cleanse" className="hover:text-sage-dark">Cleanse</Link></li>
              <li><Link href="/collections/treat" className="hover:text-sage-dark">Treat</Link></li>
              <li><Link href="/collections/hydrate" className="hover:text-sage-dark">Hydrate</Link></li>
              <li><Link href="/collections/sun" className="hover:text-sage-dark">Sun</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label mb-4">Atelier</h4>
            <ul className="space-y-2 text-sm text-forest-soft">
              <li><Link href="/about" className="hover:text-sage-dark">Our science</Link></li>
              <li><a href="#" className="hover:text-sage-dark">Ingredient index</a></li>
              <li><a href="#" className="hover:text-sage-dark">Sourcing</a></li>
              <li><a href="#" className="hover:text-sage-dark">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="label mb-4">Care</h4>
            <ul className="space-y-2 text-sm text-forest-soft">
              <li><a href="#" className="hover:text-sage-dark">Skin consultations</a></li>
              <li><a href="#" className="hover:text-sage-dark">Shipping</a></li>
              <li><a href="#" className="hover:text-sage-dark">Returns</a></li>
              <li><a href="#" className="hover:text-sage-dark">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-line flex flex-col md:flex-row justify-between text-xs text-forest-soft gap-3">
          <span>© 2026 Plate &amp; Stem AG · Lugano, Switzerland</span>
          <span className="label">Formulated · Tested · Published</span>
        </div>
      </div>
    </footer>
  );
}

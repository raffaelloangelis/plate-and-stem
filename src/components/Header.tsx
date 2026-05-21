import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-bone/95 backdrop-blur border-b border-line">
      <div className="wrap flex items-center justify-between py-5 gap-6">
        <Link href="/" className="font-display text-2xl md:text-[1.7rem] tracking-tight leading-none">
          Plate <span className="italic text-sage-dark">&amp;</span> Stem
        </Link>
        <nav className="hidden md:flex items-center gap-7 label">
          <Link href="/collections/cleanse" className="hover:text-sage-dark transition-colors">Cleanse</Link>
          <Link href="/collections/treat" className="hover:text-sage-dark transition-colors">Treat</Link>
          <Link href="/collections/hydrate" className="hover:text-sage-dark transition-colors">Hydrate</Link>
          <Link href="/collections/sun" className="hover:text-sage-dark transition-colors">Sun</Link>
          <Link href="/about" className="hover:text-sage-dark transition-colors">Atelier</Link>
        </nav>
        <div className="flex items-center gap-5 label">
          <button aria-label="Search" className="hover:text-sage-dark transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="m11 11 4 4" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button className="flex items-center gap-2 hover:text-sage-dark transition-colors">
            <span className="hidden sm:inline">Cart</span>
            <span className="text-forest-soft">(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}

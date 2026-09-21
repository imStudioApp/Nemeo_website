import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Section = { title: string; content: ReactNode };
const ASSET_ROOT = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets`;

export function InfoPage({ eyebrow, title, intro, note, sections }: { eyebrow: string; title: string; intro: string; note?: string; sections: Section[] }) {
  return (
    <main className="info-page">
      <nav className="nav shell">
        <Link className="brand" href="/" aria-label="Nemeo home"><Image className="brand-icon" src={`${ASSET_ROOT}/app-icon.png`} alt="" width={32} height={32} priority /><span>Nemeo</span></Link>
        <Link className="nav-cta" href="/">← Back home</Link>
        <div className="mobile-nav-links" aria-label="Site navigation">
          <Link href="/">Home</Link><Link href="/#features">Features</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link><Link href="/#faq">FAQ</Link>
        </div>
      </nav>
      <header className="info-hero shell">
        <div className="eyebrow"><span>✦</span>{eyebrow}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
        {note && <span className="info-note">{note}</span>}
      </header>
      <article className="info-content shell">
        {sections.map((section) => <section key={section.title}><h2>{section.title}</h2><div>{section.content}</div></section>)}
      </article>
      <footer className="info-footer shell"><span>© 2026 Nemeo</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link></div></footer>
    </main>
  );
}

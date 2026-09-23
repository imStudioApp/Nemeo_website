import Link from "next/link";
import Image from "next/image";

const ASSET_ROOT = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets`;
const IMAGE_BLUR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 16'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23e9e7fb'/%3E%3Cstop offset='.52' stop-color='%23f7f5fb'/%3E%3Cstop offset='1' stop-color='%23d9f0f2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='8' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Nemeo home">
      <Image className="brand-icon" src={`${ASSET_ROOT}/app-icon.png`} alt="" width={32} height={32} priority />
      <span>Nemeo</span>
    </Link>
  );
}

function AppStoreButton({ light = false, priority = false }: { light?: boolean; priority?: boolean }) {
  return (
    <a className={`store-button${light ? " light" : ""}`} href="https://apps.apple.com/app/id6813036038" aria-label="Download Nemeo on the App Store">
      <Image className="apple-logo" src={`${ASSET_ROOT}/apple-logo.svg`} alt="" width={27} height={31} priority={priority} />
      <span><small>Download on the</small><strong>App Store</strong></span>
    </a>
  );
}

function ScreenShot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`screen-crop ${className}`}>
      <Image src={`${ASSET_ROOT}/${src}`} alt={alt} fill sizes="(max-width: 680px) 100vw, 380px" placeholder="blur" blurDataURL={IMAGE_BLUR} unoptimized />
    </div>
  );
}

function PhoneMockup() {
  return (
    <figure className="phone-stage" aria-label="Nemeo Home screen shown in an iPhone 15 Pro mockup">
      <div className="phone-aura" aria-hidden="true" />
      <div className="phone-device">
        <div className="phone-screen-layer">
          <Image src={`${ASSET_ROOT}/home-screen.png`} alt="Nemeo Home screen showing iPhone storage, videos, photos, and recommendations" fill sizes="345px" placeholder="blur" blurDataURL={IMAGE_BLUR} unoptimized priority />
        </div>
        <Image className="phone-frame" src={`${ASSET_ROOT}/iphone-15-pro-figma-layer.png`} alt="" fill sizes="345px" unoptimized priority aria-hidden="true" />
      </div>
      <div className="saving-pill saving-before"><small>Example · Original</small><strong>11.8 GB</strong><span>before compression</span></div>
      <div className="saving-pill saving-after"><small>Example · Optimized</small><strong>1.2 GB</strong><span>10.6 GB saved</span></div>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Logo />
        <div className="nav-links"><a href="#features">Features</a><Link href="/privacy">Privacy</Link><a href="#features">How it works</a><a href="#faq">FAQ</a></div>
        <a className="nav-cta" href="#download">Get Nemeo <Arrow /></a>
        <div className="mobile-nav-links" aria-label="Site navigation">
          <a href="#features">Features</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link><a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span>✦</span> Made for iPhone</div>
          <h1>Compress videos.<br /><em>Not memories.</em></h1>
          <p>Nemeo gives your iPhone room to breathe — optimizing heavy videos and photos without uploading your media to Nemeo servers.</p>
          <div className="hero-actions">
            <AppStoreButton priority />
            <a className="text-link" href="#features">See how it works <span>↓</span></a>
          </div>
          <div className="trust-row"><span><b>✓</b> 100% on-device</span><span><b>✓</b> No subscriptions</span><span><b>✓</b> Your originals stay safe</span></div>
        </div>
        <PhoneMockup />
      </section>

      <section className="flow shell" id="features">
        <div className="section-heading center"><div className="eyebrow"><span>✦</span> The flow, at a glance</div><h2>Choose. Optimize. Review.</h2><p>See the real product screens before you decide to make space.</p></div>
        <div className="flow-steps">
          <article><span>1</span><ScreenShot src="choose-screen.png" alt="Nemeo Select videos screen" className="flow-shot step-select" /><h3>Choose your media</h3><p>Select videos or photos from your library.</p></article>
          <article><span>2</span><ScreenShot src="optimizing-screen.png" alt="Nemeo Optimizing screen" className="flow-shot step-optimize" /><h3>Optimize locally</h3><p>Keep progress, quality, and expected savings visible.</p></article>
          <article><span>3</span><ScreenShot src="review-screen.png" alt="Nemeo Review result screen" className="flow-shot step-review" /><h3>Review the result</h3><p>Replace originals only after the optimized copies are saved.</p></article>
        </div>
      </section>

      <section className="faq shell" id="faq">
        <div className="section-heading"><div className="eyebrow"><span>✦</span> Good to know</div><h2>Questions, answered.</h2></div>
        <div className="faq-list">
          <details><summary>Does Nemeo upload my photos or videos?<span>+</span></summary><p>No. Media processing happens locally on your iPhone. Nemeo does not upload your personal media to a server.</p></details>
          <details><summary>Can I see how much space I’ll save first?<span>+</span></summary><p>Yes. Nemeo shows an estimated optimized size and expected savings before you start.</p></details>
          <details><summary>What happens to my original files?<span>+</span></summary><p>Your originals stay unchanged while processing. You remain in control of the final result.</p></details>
          <details><summary>Can I optimize both photos and videos?<span>+</span></summary><p>Yes. Nemeo supports separate, purpose-built optimization flows for photos and videos.</p></details>
        </div>
      </section>

      <section className="download shell" id="download">
        <div className="download-glow" aria-hidden="true" />
        <Image className="download-mark" src={`${ASSET_ROOT}/app-icon.png`} alt="Nemeo app icon" width={78} height={78} />
        <div className="download-copy"><span className="card-number">MADE FOR IPHONE</span><h2>More room for<br />what comes next.</h2><p>Compress videos, not memories — with the same calm, clear flow shown above.</p></div>
        <AppStoreButton light />
      </section>

      <footer className="footer shell"><Logo /><p>Compress videos, not memories.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link></div><small>© 2026 Nemeo. Made for iPhone.</small></footer>
    </main>
  );
}

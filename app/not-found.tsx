import Link from "next/link";
import Image from "next/image";

const ASSET_ROOT = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets`;

export default function NotFound() {
  return <main className="not-found"><Image className="download-mark" src={`${ASSET_ROOT}/app-icon.png`} alt="Nemeo app icon" width={78} height={78} /><span>404</span><h1>This memory isn’t here.</h1><p>The page may have moved, but there’s still plenty to explore.</p><Link className="nav-cta" href="/">Return to Nemeo</Link></main>;
}

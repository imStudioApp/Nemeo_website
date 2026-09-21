import type { Metadata } from "next";
import { InfoPage } from "../_components/InfoPage";

export const metadata: Metadata = { title: "Support — Nemeo", description: "Help with Nemeo for iPhone." };

export default function SupportPage() {
  return <InfoPage eyebrow="Support" title="How can we help?" intro="Find answers about using Nemeo to optimize photos and videos on your iPhone." sections={[
    { title: "Photos access is required", content: <p>Open iOS Settings, find Nemeo, choose Photos, and allow access. The main optimization experience needs access to the media you want to review.</p> },
    { title: "An operation was interrupted", content: <p>If Nemeo or your iPhone closes during processing, unfinished work is cancelled and temporary files are cleaned. Your originals remain unchanged.</p> },
    { title: "Quality levels", content: <>
      <p>Nemeo offers three quality presets. The exact resolution depends on whether you are optimizing photos or videos:</p>
      <ul>
        <li><strong>Original+</strong> — preserves the original resolution. Photos are exported as HEIC; videos use a source-constrained bitrate up to 12 Mbps.</li>
        <li><strong>Standard</strong> — the balanced option. Photos are limited to 2K (2560 px on the long edge); videos to 1080p (1920×1080), with no upscaling.</li>
        <li><strong>Compact</strong> — prioritizes saving storage. Photos are limited to 1080p (1920 px on the long edge); videos to 720p (1280×720), with no upscaling.</li>
      </ul>
      <p>Lower-resolution media is never upscaled.</p>
    </> },
    { title: "Still need help?", content: <p>Email <a href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com</a> with your iPhone model, iOS version, and a short description of what happened.</p> },
  ]} />;
}

import type { Metadata } from "next";
import { InfoPage } from "../_components/InfoPage";

export const metadata: Metadata = { title: "Support — Nemeo", description: "Help with Nemeo for iPhone." };

export default function SupportPage() {
  return <InfoPage eyebrow="Support" title="How can we help?" intro="Find answers about using Nemeo to optimize photos and videos on your iPhone." sections={[
    { title: "Photos access is required", content: <p>Open iOS Settings, find Nemeo, choose Photos, and allow access. The main optimization experience needs access to the media you want to review.</p> },
    { title: "Still need help?", content: <p>Email <a href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com</a> with your iPhone model, iOS version, and a short description of what happened.</p> },
  ]} />;
}

import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "../_components/InfoPage";

export const metadata: Metadata = {
  title: "Terms of Use — Nemeo",
  description: "Terms for using the Nemeo iPhone app.",
};

export default function TermsPage() {
  return <InfoPage
    eyebrow="Terms"
    title="Terms of Use"
    intro="Please read these terms before using Nemeo. By using the app, you agree to these terms."
    note="Last updated: September 23, 2026"
    sections={[
      {
        title: "About Nemeo",
        content: <p>Nemeo is an iPhone app for reviewing, optimizing, and organizing photos and videos. The app is currently free to use, requires no account, and has no subscription. Nemeo is distributed through Apple’s App Store and requires iOS 18 or later.</p>,
      },
      {
        title: "Age rating",
        content: <p>Nemeo currently has a 4+ age rating on the App Store. Apple’s rating describes content suitability and may vary by region. It does not replace any age or consent requirements under the laws that apply to you. If you are a minor, your parent or legal guardian should review these terms and agree to them on your behalf where required by law.</p>,
      },
      {
        title: "Photos and videos",
        content: <p>Nemeo needs the Photos access you grant to show and process your media. Analysis and optimization happen on your iPhone; Nemeo does not upload your photos or videos to a Nemeo server. Your originals are not changed during processing. You decide whether to replace or delete media after reviewing the result. You are responsible for selecting items you have the right to modify or delete.</p>,
      },
      {
        title: "Your use of the app",
        content: <p>Use Nemeo in accordance with these terms and the laws that apply to you. You can stop using the app at any time by removing it from your device. Apple’s terms also apply to your download and use of apps from the App Store.</p>,
      },
      {
        title: "Availability and results",
        content: <p>Nemeo’s size and storage-saving figures are estimates; actual results depend on the media and device. Some media may not be available locally or supported for processing. We may update or change app features. We do not promise that the app will always be available, uninterrupted, or compatible with every file or device.</p>,
      },
      {
        title: "Disclaimer and liability",
        content: <p>To the maximum extent permitted by applicable law, Nemeo is provided “as is” and we are not liable for indirect or consequential loss arising from use of the app. Nothing in these terms limits liability or consumer rights that cannot be excluded under applicable law.</p>,
      },
      {
        title: "Privacy",
        content: <p>Our <Link href="/privacy">Privacy Policy</Link> explains how the app and website handle information.</p>,
      },
      {
        title: "Governing law",
        content: <p>These terms are governed by the laws of Belarus, without limiting any mandatory consumer protections that apply where you live.</p>,
      },
      {
        title: "Changes and contact",
        content: <><p>We may update these terms by posting a revised version on this page. The updated date above shows when the current version was posted.</p><p>Questions about these terms? Email <a href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com</a>.</p></>,
      },
    ]}
  />;
}

import type { Metadata } from "next";
import { InfoPage } from "../_components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Nemeo",
  description: "How Nemeo handles information in the app and on this website.",
};

export default function PrivacyPage() {
  return <InfoPage
    eyebrow="Privacy"
    title="Privacy Policy"
    intro="This policy explains what information Nemeo handles in its iPhone app and on this website. Nemeo does not require an account and does not operate an analytics or advertising service."
    note="Last updated: September 23, 2026"
    sections={[
      {
        title: "Information in the Nemeo app",
        content: <>
          <p>When you allow access to your Photos library, Nemeo reads the photos and videos you choose or make available to the app, along with information needed to show and process them, such as asset identifiers, media type, size, dimensions, and dates. Nemeo uses this information to build a local media index, estimate optimization results, and find similar screenshots.</p>
          <p>Media analysis, similarity checks, and optimization happen on your iPhone. The app stores its media index, analysis results, and operation status locally so its features can work across launches. Nemeo does not upload your photos, videos, or this local index to a Nemeo server. Your original media remains in Photos unless you choose an action in the app that replaces or deletes it.</p>
          <p>If an item is stored in iCloud and is not available on your iPhone, iOS may retrieve it from iCloud when needed. Apple handles that service under Apple’s own terms and privacy policy.</p>
        </>,
      },
      {
        title: "Information you send us",
        content: <p>If you email us, we receive the email address and any information you choose to include. We use it to respond to your question or support request. Email is handled by the email services used to send and receive the message. Please avoid including photos, videos, or other sensitive information unless it is needed to resolve your request.</p>,
      },
      {
        title: "Analytics, advertising, and website hosting",
        content: <p>The Nemeo app does not include an analytics or advertising service, and Nemeo does not use the app to send marketing messages. This website does not include Nemeo analytics or advertising scripts. The website is hosted by GitHub Pages; GitHub says it logs and stores visitors’ IP addresses for security purposes. This hosting data is handled by GitHub under its own privacy statement.</p>,
      },
      {
        title: "Storage and deletion",
        content: <>
          <p>The app’s media index and analysis results are stored on your iPhone, not on Nemeo servers. You can revoke Photos access in iOS Settings or remove Nemeo from your iPhone. Removing the app does not delete the original photos and videos in your Photos library.</p>
          <p>We keep support correspondence only as needed to respond and handle the request. To ask about or request deletion of an email you sent us, contact us at <a href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com</a>.</p>
        </>,
      },
      {
        title: "Children’s privacy and App Store age rating",
        content: <p>Nemeo’s current App Store age rating is 4+. Apple’s age rating describes content suitability and may vary by region; it is not a privacy consent rule. The app does not ask for an account or personal details. If you believe a child has sent us personal information by email, contact us and we will review the request.</p>,
      },
      {
        title: "Third-party services",
        content: <p>The app relies on Apple’s Photos and, where applicable, iCloud services. This website is hosted by GitHub Pages. When you use those services, their providers may process information under their own terms and privacy policies. Nemeo does not control those providers’ independent practices.</p>,
      },
      {
        title: "Changes to this policy",
        content: <p>We may update this policy when the app or website changes. The updated version will be posted on this page with a revised date.</p>,
      },
      {
        title: "Contact us",
        content: <p>For privacy questions or requests, email <a href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com</a>.</p>,
      },
    ]}
  />;
}

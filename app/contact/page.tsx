import type { Metadata } from "next";
import { InfoPage } from "../_components/InfoPage";

export const metadata: Metadata = { title: "Contact — Nemeo", description: "Contact the team behind Nemeo." };

export default function ContactPage() {
  return <InfoPage eyebrow="Contact" title="Let’s talk." intro="Have a question, found something unexpected, or want to share feedback about Nemeo?" sections={[
    { title: "Product and support", content: <p><a className="contact-mail" href="mailto:im.studio.app@gmail.com">im.studio.app@gmail.com ↗</a></p> },
  ]} />;
}

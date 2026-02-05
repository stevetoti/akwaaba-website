import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import VoiceWidget from "@/components/VoiceWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://akwaabaai.com"),
  title: {
    default: "Akwaaba AI — AI-Powered Business Communication for Ghana",
    template: "%s | Akwaaba AI",
  },
  description:
    "Transform your business communication with AI-powered chatbots, WhatsApp messaging, SMS campaigns, and multi-channel support. Built for Ghanaian businesses.",
  keywords: [
    "AI chatbot Ghana",
    "WhatsApp business Ghana",
    "business communication platform",
    "SMS marketing Ghana",
    "customer support AI",
    "multi-channel messaging",
    "Akwaaba AI",
    "Ghana business tools",
  ],
  openGraph: {
    title: "Akwaaba AI — AI-Powered Business Communication for Ghana",
    description:
      "Transform your business communication with AI chatbots, WhatsApp, SMS, and more. Built for Ghana.",
    url: "https://akwaabaai.com",
    siteName: "Akwaaba AI",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akwaaba AI — AI-Powered Business Communication for Ghana",
    description:
      "Transform your business communication with AI chatbots, WhatsApp, SMS, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Akwaaba AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered business communication platform for Ghana. Multi-channel messaging, chatbots, CRM, and analytics.",
  url: "https://akwaabaai.com",
  author: {
    "@type": "Organization",
    name: "Pacific Wave Digital",
    url: "https://pacificwavedigital.com",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GHS",
    lowPrice: "0",
    offerCount: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <VoiceWidget />
      </body>
    </html>
  );
}

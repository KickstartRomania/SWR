import type { Metadata } from "next";
import { Fredoka, DM_Sans, Caveat } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "Startup Weekend Romania";
const description =
  "Build a startup in 54 hours. No prior experience required! Only good vibes and a lot of fun!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Startup Weekend Romania",
    "startup event",
    "entrepreneurship",
    "pitch",
    "54 hours",
    "Techstars",
    "build startup",
  ],
  authors: [{ name: "Startup Weekend Romania", url: SITE_URL }],
  creator: "Startup Weekend Romania",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: title,
    title,
    description,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${dmSans.variable} ${caveat.variable} antialiased selection:bg-sw-blue selection:text-white`}
      >
        <OrganizationJsonLd url={SITE_URL} />
        {children}
      </body>
    </html>
  );
}

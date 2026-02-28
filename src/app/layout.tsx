import type { Metadata } from "next";
import { Fredoka, DM_Sans, Caveat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Startup Weekend Romania",
  description: "Build a startup in 54 hours. No prior experience required! Only good vibes and a lot of fun!",
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Startup Weekend Romania",
  description:
    "Have questions about Startup Weekend Romania? Want to partner with us or get in touch? We'd love to hear from you!",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | Startup Weekend Romania",
    description:
      "Have questions about Startup Weekend Romania? Want to partner with us or get in touch? We'd love to hear from you!",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

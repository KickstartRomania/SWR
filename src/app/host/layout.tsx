import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Host Startup Weekend | Startup Weekend Romania",
  description:
    "Apply to host Startup Weekend in your city. Become a facilitator and help entrepreneurs build startups in 54 hours.",
  alternates: { canonical: `${SITE_URL}/host` },
  openGraph: {
    title: "Host Startup Weekend | Startup Weekend Romania",
    description:
      "Apply to host Startup Weekend in your city. Become a facilitator and help entrepreneurs build startups in 54 hours.",
    url: `${SITE_URL}/host`,
  },
};

export default function HostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

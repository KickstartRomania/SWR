import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentors | Startup Weekend Romania",
  description:
    "Meet the expert mentors who will guide you through building and validating your startup idea at Startup Weekend Romania.",
  alternates: { canonical: `${SITE_URL}/mentors` },
  openGraph: {
    title: "Mentors | Startup Weekend Romania",
    description:
      "Meet the expert mentors who will guide you through building and validating your startup idea at Startup Weekend Romania.",
    url: `${SITE_URL}/mentors`,
  },
};

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentors | Startup Weekend Romania",
  description: "Meet the expert mentors who will guide you through building and validating your startup idea at Startup Weekend Romania.",
};

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

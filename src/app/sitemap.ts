import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "host", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "mentors", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "bucharest", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "cluj", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "constanta", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "oradea", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "targu-jiu", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

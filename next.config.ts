import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Direct Mappings
      { source: "/bucharest/", destination: "/bucharest", permanent: true },
      { source: "/cluj/", destination: "/cluj", permanent: true },
      { source: "/constanta/", destination: "/constanta", permanent: true },
      { source: "/targu-jiu/", destination: "/targu-jiu", permanent: true },
      { source: "/oradea/", destination: "/oradea", permanent: true },
      { source: "/mentors-speakers/", destination: "/mentors", permanent: true },
      { source: "/team-contact/", destination: "/contact", permanent: true },

      // Dead/Redundant URLs - Redirect to Homepage
      { source: "/faq/", destination: "/", permanent: true },
      { source: "/cookie-policy-eu/", destination: "/", permanent: true },
      { source: "/volunteer/", destination: "/", permanent: true },
      { source: "/mentors-speakers-2/", destination: "/", permanent: true },
      { source: "/sponsorspartners-2/", destination: "/", permanent: true },
      { source: "/cities/", destination: "/", permanent: true },
      { source: "/sponsorspartners/", destination: "/", permanent: true },
      { source: "/ticket/", destination: "/", permanent: true },
      { source: "/agenda/", destination: "/", permanent: true },
      { source: "/shadowing/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

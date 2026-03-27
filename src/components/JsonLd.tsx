export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ url }: { url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Startup Weekend Romania",
    url,
    logo: `${url}/og-image.png`,
  };
  return <JsonLd data={data} />;
}

export function EventJsonLd({
  name,
  url,
  startDate,
  endDate,
  location,
  address,
  googleMapsUrl,
  description,
}: {
  name: string;
  url: string;
  startDate: string;
  endDate: string;
  location: string;
  address?: string;
  googleMapsUrl?: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    startDate,
    endDate,
    location: {
      "@type": "Place",
      name: location,
      ...(address && {
        address: {
          "@type": "PostalAddress",
          streetAddress: address,
        },
      }),
      ...(googleMapsUrl && { url: googleMapsUrl }),
    },
    organizer: {
      "@type": "Organization",
      name: "Startup Weekend Romania",
      url,
    },
    description,
    url,
  };
  return <JsonLd data={data} />;
}

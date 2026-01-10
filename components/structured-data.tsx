export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Max Motion",
    url: "https://maxmotion.nl",
    logo: "https://maxmotion.nl/logo.png",
    description: "Max Motion helpt organisaties met AI automatisering, trainingen en advies.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nijenrodestraat 16",
      addressLocality: "Hellevoetsluis",
      postalCode: "3223VG",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31683969593",
      contactType: "customer service",
      email: "contact@maxmotion.nl",
      availableLanguage: ["Dutch", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/maxmotion",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Max Motion",
    image: "https://maxmotion.nl/og-image.png",
    "@id": "https://maxmotion.nl",
    url: "https://maxmotion.nl",
    telephone: "+31683969593",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nijenrodestraat 16",
      addressLocality: "Hellevoetsluis",
      postalCode: "3223VG",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.8333,
      longitude: 4.1333,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Max Motion",
      url: "https://maxmotion.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({ 
  name, 
  description, 
  url,
  duration,
  provider = "Max Motion"
}: { 
  name: string; 
  description: string; 
  url: string;
  duration?: string;
  provider?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://maxmotion.nl",
    },
    ...(duration && { duration }),
    inLanguage: "nl",
    isAccessibleForFree: false,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      instructor: {
        "@type": "Organization",
        name: "Max Motion",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Max Motion",
    url: "https://maxmotion.nl",
    description: "Max Motion helpt organisaties met AI ontwikkeling, trainingen en advies.",
    publisher: {
      "@type": "Organization",
      name: "Max Motion",
      url: "https://maxmotion.nl",
    },
    inLanguage: "nl-NL",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://maxmotion.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Max Motion",
    image: "https://maxmotion.nl/og-image.png",
    "@id": "https://maxmotion.nl",
    url: "https://maxmotion.nl",
    telephone: "+31683969593",
    email: "contact@maxmotion.nl",
    description: "AI ontwikkeling, trainingen en advies voor bedrijven. Specialisaties: Microsoft Fabric, Foundry, ChatGPT, Copilot, Gemini en EU AI Act compliance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nijenrodestraat 16",
      addressLocality: "Hellevoetsluis",
      postalCode: "3223VG",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.8333,
      longitude: 4.1333,
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Diensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Ontwikkeling",
            description: "Automatisering van bedrijfsprocessen met AI, Microsoft Fabric & Foundry implementatie",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Training",
            description: "ChatGPT, Copilot, Gemini en EU AI Act trainingen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Advies",
            description: "Strategisch AI advies en implementatie begeleiding",
          },
        },
      ],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "ChatGPT",
      "Microsoft Copilot",
      "Microsoft Fabric",
      "Microsoft Foundry",
      "Google Gemini",
      "EU AI Act",
      "AI Automation",
      "Business Process Automation",
    ],
    slogan: "Breng AI tot leven in uw bedrijf",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

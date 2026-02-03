/**
 * SEO Utility Functions
 * Helper functions for generating SEO meta tags and structured data
 */

interface PageSEO {
  title: string;
  description: string;
}

interface SEOData {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  image: string;
  twitterHandle: string;
  pages: {
    [key: string]: PageSEO;
  };
}

/**
 * Generate page title from template
 */
export function generateTitle(pageTitle: string, seoData: SEOData): string {
  if (!pageTitle || pageTitle === "Home") {
    return seoData.defaultTitle;
  }
  return seoData.titleTemplate.replace("%s", pageTitle);
}

/**
 * Get route key from pathname
 */
export function getRouteKey(pathname: string): string {
  const route = pathname.replace("/", "") || "home";
  return route;
}

/**
 * Generate structured data (JSON-LD) for Person schema
 */
export function generatePersonSchema(seoData: SEOData, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alan Bermudez",
    jobTitle:
      locale === "en"
        ? "Senior Fullstack Developer"
        : "Desarrollador Fullstack Senior",
    url: seoData.siteUrl,
    image: `${seoData.siteUrl}${seoData.image}`,
    sameAs: [
      "https://github.com/Alan1108",
      "https://linkedin.com/in/alanibm",
      "https://twitter.com/alanibm",
      "https://instagram.com/alanibm",
    ],
    email: "alan.ibm1108@gmail.com",
    knowsAbout: [
      "React",
      "React Native",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "Python",
      "Flutter",
      "Web Development",
      "Mobile Development",
      "Fullstack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad de las Fuerzas Armadas ESPE",
    },
  };
}

/**
 * Generate WebSite structured data
 */
export function generateWebsiteSchema(seoData: SEOData, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoData.defaultTitle,
    url: seoData.siteUrl,
    description: seoData.description,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: seoData.author,
    },
  };
}

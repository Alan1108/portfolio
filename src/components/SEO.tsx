import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation, useLocale } from '../context/LanguageContext';
import { generateTitle, getRouteKey, generatePersonSchema, generateWebsiteSchema } from '../utils/seo';

export function SEO() {
  const location = useLocation();
  const data = useTranslation();
  const { locale } = useLocale();
  const seoData = data.seo;

  useEffect(() => {
    const routeKey = getRouteKey(location.pathname);
    const pageSEO = seoData.pages[routeKey as keyof typeof seoData.pages] || seoData.pages.home;
    
    // Update document title
    document.title = generateTitle(pageSEO.title, seoData);

    // Update meta description
    updateMetaTag('name', 'description', pageSEO.description);
    
    // Update meta keywords
    updateMetaTag('name', 'keywords', seoData.keywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', generateTitle(pageSEO.title, seoData));
    updateMetaTag('property', 'og:description', pageSEO.description);
    updateMetaTag('property', 'og:url', `${seoData.siteUrl}${location.pathname}`);
    updateMetaTag('property', 'og:image', `${seoData.siteUrl}${seoData.image}`);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:locale', locale === 'en' ? 'en_US' : 'es_ES');
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:site', seoData.twitterHandle);
    updateMetaTag('name', 'twitter:creator', seoData.twitterHandle);
    updateMetaTag('name', 'twitter:title', generateTitle(pageSEO.title, seoData));
    updateMetaTag('name', 'twitter:description', pageSEO.description);
    updateMetaTag('name', 'twitter:image', `${seoData.siteUrl}${seoData.image}`);
    
    // Update canonical URL
    updateLinkTag('canonical', `${seoData.siteUrl}${location.pathname}`);
    
    // Update language alternates
    updateLinkTag('alternate', `${seoData.siteUrl}${location.pathname}`, 'en');
    updateLinkTag('alternate', `${seoData.siteUrl}${location.pathname}`, 'es');
    
    // Update structured data
    updateStructuredData('person-schema', generatePersonSchema(seoData, locale));
    updateStructuredData('website-schema', generateWebsiteSchema(seoData, locale));
    
    // Update HTML lang attribute
    document.documentElement.lang = locale;
  }, [location.pathname, seoData, locale]);

  return null;
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

/**
 * Update or create a link tag
 */
function updateLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang 
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
    
  let element = document.querySelector(selector) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    if (hreflang) {
      element.hreflang = hreflang;
    }
    document.head.appendChild(element);
  }
  
  element.href = href;
}

/**
 * Update or create structured data script
 */
function updateStructuredData(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
}

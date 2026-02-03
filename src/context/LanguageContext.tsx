import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

type Locale = 'en' | 'es';
type PortfolioData = typeof en;

const locales: Record<Locale, PortfolioData> = { en, es: es as PortfolioData };

const STORAGE_KEY = 'portfolio-lang';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === 'es' ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, data: locales[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): PortfolioData {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider');
  return ctx.data;
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLocale must be used within LanguageProvider');
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}

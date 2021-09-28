import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import nl from '../locales/nl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      nl: { translation: nl },
    },
    interpolation: {
      escapeValue: false, // React fixes this for us
    }
  });

export default i18n;
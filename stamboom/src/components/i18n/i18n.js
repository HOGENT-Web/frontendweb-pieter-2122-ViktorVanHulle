import i18n from "i18next";
// plugins to i18n
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// ensures i18next works with React
import { initReactI18next } from "react-i18next";


// initializing i18n by passing it an object of options
i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', //if no language is detected
    debug: true, //debug messages in console, only use in production

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
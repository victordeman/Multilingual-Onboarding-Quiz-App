import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome to the Quiz App", question: "Question", time_remaining: "Time Remaining", score: "Your Score" } },
    de: { translation: { welcome: "Willkommen zur Quiz-App", question: "Frage", time_remaining: "Verbleibende Zeit", score: "Dein Ergebnis" } }
  },
  lng: 'en',
  fallbackLng: 'en'
});

export default i18n;

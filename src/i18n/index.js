import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru/russion.json'
import eng from './locales/eng/english.json'
import uz from './locales/uz/uzbek.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
            ru: { translation: ru },
            eng: { translation: eng },
            uz: { translation: uz },
        },
        fallbackLng: 'ru' ,// til topilmasa asosiy tildan foydalanadi
        interpolation: {
            escapeValue: false
        }
    })
export default i18n;
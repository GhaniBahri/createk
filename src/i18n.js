import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Home:"Home",
          about:"About us",
          contact:"Contact us",
          support:"customer service",
          other:"other infos",
          mentin:"Legal Notice",
          clause:"confidentiality clause",
          reglement:"Recclit regulation",
          politique:"Complaints policy",
          social:"Social Media",
          back:"Back",
          pack_info:"Package Informations",
          qte:"Quantity",
          obj:"Your Objects",
          obj_input:"What are the objects to send",
          dimentions:"I know the  dimensions of my package",
          no_dimentions:"I  don't know the  dimensions of my package",
          s:"fits in back bag",
          m:"Fits in a car trunk",
          l:"Get into a car with the seat down",
          xl:"Requires a van or utility vehicle",
          weight:"Object weight",
          weight_notice:"the weight of the package is for information purposes only for the delivery courier and has no influence on the weight",
          next:"Next",
          date_range:"Date range",
          depart:"Departure",
          arrival:"Arrival",
          
        }
      },
      fr: {
        translation: {
          Home:"Accueil",
          about:"A propos de nous",
          contact:"Contacter nous",
          support:"Support client",
          other:"Autres informations",
          mentin:"Mentions légales",
          clause:"Clause de confidentialité",
          reglement:"Réglement de recclit",
          politique:"Politique de réclamation",
          social:"Réseaux sociaux",
          back:"Retour",
          pack_info:"Informations du collis",
          qte:"Quantité",
          obj:"Vos Objets",
          obj_input:"Quels sont les objest à envoyer",
          dimentions:"Je connais les dimension de l'objet",
          no_dimentions:"Je ne connais pas les dimension de l'objet",
          s:"Rentre dans un sac à dos",
          m:"Rentre dans un coffre de voiture",
          l:"Rentre dans une voiture siege baissé",
          xl:"Néceessite un fourgon ou un utilitaire",
          weight:"Poids de l'objet",
          weight_notice:"le poids du colis est à titre informatif pour le coursier livreur et n'a pas d'influence sur le poid",
          next:"Suivant",
          date_range:"plage de date",
          depart:"Lieu de départ",
          arrival:"Lieu d'arriveé",
          
        }
      }
    }
  });

export default i18n;
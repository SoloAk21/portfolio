import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        switch: "Switch to አማርኛ",
        hireMe: "Hire Me",
        resume: "Resume",
        experience: "Experience",
        projectsDone: "Projects Done",
        happyClients: "Happy Clients",
        greeting: "Hi, I am",
        fullName: "Solomon Asefa",
        profession: "Full Stack Developer",
        essentialTools: "Essential Tools I Use",
        toolsDescription:
          "As a Full Stack Developer, I rely on a suite of powerful online tools to deliver high-quality web applications.",
        // New translations for Contact component
        contactUs: "Contact Us",
        contactDesc: "Feel free to get in touch with us.",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone Number",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email is invalid",
        messageRequired: "Message is required",
        messageSent: "Your message has been sent successfully!",
        messageFailed: "Failed to send your message. Please try again.",
        sending: "Sending...",

        // Footer Translations
        allRightsReserved: "All rights reserved.",
        email: "Email",
        phone: "Phone",
        copyright: "© {{year}} SoloAk.",
      },
    },
    am: {
      translation: {
        switch: "ወደ English ቋንቋ ቀይር",
        hireMe: "ቅጠሩኝ",
        resume: "የልምድ ማስረጃ",
        experience: "ልምድ",
        projectsDone: "የተጠናቀቁ ፕሮጀክቶች",
        happyClients: "ደስተኛ ደንበኞች",
        greeting: "ሰላም, እኔ",
        fullName: "ሰሎሞን አሰፋ",
        profession: "ፉል ስታክ ዲቨሎፐር",
        essentialTools: "የምጠቀምባቸው አስፈላጊ ቱሎች",
        toolsDescription:
          "እኔ ሙሉ መስመር ልምምድ የአለኝ ሀይማኖት እንዲሆን እንዲሁም ውስጥ የሚለው መነሻ በአስፈላጊው መልኩ እንደሚታይ ውስጥ ሳይታወቅ አመለካከታችንን ይደርሳል።",
        contactUs: "መገኛችን",
        contactDesc: "እባኮትን ይቀጥሉን.",
        yourName: "የእርስዎ ስም",
        yourEmail: "የእርስዎ ኢሜይል",
        yourPhone: "የእርስዎ የስልክ ቁጥር",
        yourMessage: "የእርስዎ መልእክት",
        sendMessage: "መልእክት ላክ",
        nameRequired: "ስም አስፈላጊ ነው",
        emailRequired: "ኢሜይል አስፈላጊ ነው",
        emailInvalid: "ኢሜይል ውስጥ በተደጋጋሚ እንደ ተገኘ ይመለከታል",
        messageRequired: "መልእክት አስፈላጊ ነው",
        messageSent: "መልእክትዎ በስኬት ተልኳል!",
        messageFailed: "መልእክትዎ ለማስተናገድ ወይም መላእክት አልተሳካም፣ እባኮትን ይቀጥሉ.",
        sending: "እባኮትን ላክ...",

        // Footer Translations
        allRightsReserved: "ሁሉም መብቶች ይጠብቃሉ።",
        email: "ኢሜል",
        phone: "ስልክ",
        copyright: "© {{year}} ሶሎአክ.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

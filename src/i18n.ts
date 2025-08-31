import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hello_world: "Hello World",
      tagline: "Remediates human errors",
      language: "Language",
      footer: {
        products: {
          title: "Products",
          links: {
            overview: "Overview",
            impact: "Impact",
            approach: "Approach",
            resources: "Resources",
            nextStep: "Next Step",
            email: "Email",
            signIn: "Sign In"
          }
        },
        ourAI: {
          title: "Our AI",
          links: {
            cyberAI: "Cyber AI",
            aiResearchCentre: "AI Research Centre"
          }
        },
        company: {
          title: "Company",
          links: {
            companyOverview: "Company Overview",
            contactUs: "Contact Us",
            freeTrial: "Free Trial"
          }
        },
        resources: {
          title: "Resources",
          links: {
            allResources: "All Resources",
            blog: "Blog",
            demo: "Demo",
            infographics: "Infographics"
          }
        },
        legal: {
          title: "Legal",
          links: {
            privacyPolicy: "Privacy Policy",
            cookiePolicy: "Cookie Policy"
          }
        }
      }
    }
  },
  ar: {
    translation: {
      hello_world: "مرحبا بالعالم",
      tagline: "تصحيح الأخطاء البشرية",
      language: "اللغة",
      footer: {
        products: {
          title: "المنتجات",
          links: {
            overview: "نظرة عامة",
            impact: "التأثير",
            approach: "النهج",
            resources: "الموارد",
            nextStep: "الخطوة التالية",
            email: "البريد الإلكتروني",
            signIn: "تسجيل الدخول"
          }
        },
        ourAI: {
          title: "ذكاءنا الاصطناعي",
          links: {
            cyberAI: "الذكاء السيبراني",
            aiResearchCentre: "مركز أبحاث الذكاء الاصطناعي"
          }
        },
        company: {
          title: "الشركة",
          links: {
            companyOverview: "نظرة عامة عن الشركة",
            contactUs: "اتصل بنا",
            freeTrial: "تجربة مجانية"
          }
        },
        resources: {
          title: "الموارد",
          links: {
            allResources: "كل الموارد",
            blog: "مدونة",
            demo: "عرض تجريبي",
            infographics: "الرسوم البيانية"
          }
        },
        legal: {
          title: "قانوني",
          links: {
            privacyPolicy: "سياسة الخصوصية",
            cookiePolicy: "سياسة ملفات تعريف الارتباط"
          }
        }
      }
    }
  },
  fr: {
    translation: {
      hello_world: "Bonjour le monde",
      tagline: "Corrige les erreurs humaines",
      language: "Langue",
      footer: {
        products: {
          title: "Produits",
          links: {
            overview: "Aperçu",
            impact: "Impact",
            approach: "Approche",
            resources: "Ressources",
            nextStep: "Prochaine étape",
            email: "Email",
            signIn: "Se connecter"
          }
        },
        ourAI: {
          title: "Notre IA",
          links: {
            cyberAI: "Cyber IA",
            aiResearchCentre: "Centre de recherche IA"
          }
        },
        company: {
          title: "Entreprise",
          links: {
            companyOverview: "Présentation de l'entreprise",
            contactUs: "Contactez-nous",
            freeTrial: "Essai gratuit"
          }
        },
        resources: {
          title: "Ressources",
          links: {
            allResources: "Toutes les ressources",
            blog: "Blog",
            demo: "Démo",
            infographics: "Infographies"
          }
        },
        legal: {
          title: "Juridique",
          links: {
            privacyPolicy: "Politique de confidentialité",
            cookiePolicy: "Politique des cookies"
          }
        }
      }
    }
  },
  ms: {
    translation: {
      hello_world: "Helo Dunia",
      tagline: "Membetulkan kesilapan manusia",
      language: "Bahasa",
      footer: {
        products: {
          title: "Produk",
          links: {
            overview: "Gambaran Keseluruhan",
            impact: "Kesan",
            approach: "Pendekatan",
            resources: "Sumber",
            nextStep: "Langkah Seterusnya",
            email: "Emel",
            signIn: "Log Masuk"
          }
        },
        ourAI: {
          title: "AI Kami",
          links: {
            cyberAI: "AI Siber",
            aiResearchCentre: "Pusat Penyelidikan AI"
          }
        },
        company: {
          title: "Syarikat",
          links: {
            companyOverview: "Gambaran Syarikat",
            contactUs: "Hubungi Kami",
            freeTrial: "Percubaan Percuma"
          }
        },
        resources: {
          title: "Sumber",
          links: {
            allResources: "Semua Sumber",
            blog: "Blog",
            demo: "Demo",
            infographics: "Infografik"
          }
        },
        legal: {
          title: "Perundangan",
          links: {
            privacyPolicy: "Dasar Privasi",
            cookiePolicy: "Dasar Kuki"
          }
        }
      }
    }
  },
  hi: {
    translation: {
      hello_world: "नमस्ते दुनिया",
      tagline: "मानव त्रुटियों को सुधारता है",
      language: "भाषा",
      footer: {
        products: {
          title: "उत्पाद",
          links: {
            overview: "अवलोकन",
            impact: "प्रभाव",
            approach: "दृष्टिकोण",
            resources: "संसाधन",
            nextStep: "अगला कदम",
            email: "ईमेल",
            signIn: "साइन इन करें"
          }
        },
        ourAI: {
          title: "हमारी एआई",
          links: {
            cyberAI: "साइबर एआई",
            aiResearchCentre: "एआई रिसर्च सेंटर"
          }
        },
        company: {
          title: "कंपनी",
          links: {
            companyOverview: "कंपनी अवलोकन",
            contactUs: "संपर्क करें",
            freeTrial: "मुफ्त परीक्षण"
          }
        },
        resources: {
          title: "संसाधन",
          links: {
            allResources: "सभी संसाधन",
            blog: "ब्लॉग",
            demo: "डेमो",
            infographics: "इन्फोग्राफिक्स"
          }
        },
        legal: {
          title: "कानूनी",
          links: {
            privacyPolicy: "गोपनीयता नीति",
            cookiePolicy: "कुकी नीति"
          }
        }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

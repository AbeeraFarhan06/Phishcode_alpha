// utils/globalTranslator.ts
import React from "react";

class WebsiteTranslator {
  private currentLanguage: string = "en";
  private isTranslating: boolean = false;
  private translationCache: Map<string, string> = new Map();

  constructor() {
    this.loadSavedLanguage();
    this.initializePageTranslation();
    console.log("Google Translate-based translator initialized");
  }

  private loadSavedLanguage() {
    const savedLanguage = localStorage.getItem("website_language");
    if (savedLanguage && savedLanguage !== "en") {
      this.currentLanguage = savedLanguage;
      document.documentElement.lang = savedLanguage;
    }
  }

  private initializePageTranslation() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.translateCurrentPage();
      });
    } else {
      this.translateCurrentPage();
    }
  }

  async changeLanguage(langCode: string) {
    this.currentLanguage = langCode;
    document.documentElement.lang = langCode;
    localStorage.setItem("website_language", langCode);
    window.location.reload();
  }

  private async translateCurrentPage() {
    if (this.currentLanguage === "en" || this.isTranslating) return;

    console.log(`Starting translation to: ${this.currentLanguage}`);
    this.isTranslating = true;

    try {
      await this.translateAllContent();
      console.log("Translation completed");
    } catch (error) {
      console.error("Translation failed:", error);
    } finally {
      this.isTranslating = false;
    }
  }

  private async translateAllContent() {
    // Get all elements that contain direct text
    const elements = document.querySelectorAll("*");
    const textElements: HTMLElement[] = [];

    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      // Skip system elements
      if (htmlElement.tagName.match(/^(SCRIPT|STYLE|NOSCRIPT|HEAD|TITLE)$/)) {
        return;
      }

      // Check if element has direct text (not just from children)
      const hasDirectText = Array.from(htmlElement.childNodes).some(
        (node) =>
          node.nodeType === Node.TEXT_NODE &&
          node.textContent?.trim() &&
          node.textContent.trim().length > 1
      );

      if (hasDirectText) {
        textElements.push(htmlElement);
      }
    });

    console.log(`Found ${textElements.length} elements with text to translate`);

    // Process elements in small batches
    for (let i = 0; i < Math.min(textElements.length, 100); i += 5) {
      const batch = textElements.slice(i, i + 5);
      console.log(`Translating batch ${Math.floor(i / 5) + 1}...`);

      for (const element of batch) {
        await this.translateElement(element);
      }

      await this.delay(200);
    }
  }

  private async translateElement(element: HTMLElement) {
    // Get all direct text nodes
    const textNodes = Array.from(element.childNodes).filter(
      (node) =>
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.trim() &&
        node.textContent.trim().length > 1
    ) as Text[];

    for (const textNode of textNodes) {
      const originalText = textNode.textContent?.trim();
      if (!originalText) continue;

      try {
        const translatedText = await this.translateText(originalText);
        if (translatedText !== originalText) {
          textNode.textContent = translatedText;
          console.log(`Translated: "${originalText}" -> "${translatedText}"`);
        }
      } catch (error) {
        console.error(`Failed to translate: "${originalText}"`);
      }
    }
  }

  private async translateText(text: string): Promise<string> {
    const cacheKey = `${text}-${this.currentLanguage}`;

    // Check cache
    if (this.translationCache.has(cacheKey)) {
      return this.translationCache.get(cacheKey)!;
    }

    // Check static translations first
    const staticResult = this.getStaticTranslation(text);
    if (staticResult) {
      this.translationCache.set(cacheKey, staticResult);
      return staticResult;
    }

    // Try Google Translate API
    try {
      const result = await this.callGoogleTranslate(text);
      this.translationCache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error(`Translation API failed for: "${text}"`);
      this.translationCache.set(cacheKey, text);
      return text;
    }
  }

  private async callGoogleTranslate(text: string): Promise<string> {
    // Using Google Translate's public endpoint
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${
        this.currentLanguage
      }&dt=t&q=${encodeURIComponent(text)}`,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    // Google Translate returns a complex array structure
    // The translation is in result[0][0][0]
    if (result && result[0] && result[0][0] && result[0][0][0]) {
      return result[0][0][0];
    }

    throw new Error("Invalid response format");
  }

  private getStaticTranslation(text: string): string | null {
    const translations: { [key: string]: { [lang: string]: string } } = {
      // Essential UI elements
      Language: { ar: "اللغة", fr: "Langue", ms: "Bahasa", hi: "भाषा" },
      English: {
        ar: "الإنجليزية",
        fr: "Anglais",
        ms: "Bahasa Inggeris",
        hi: "अंग्रेजी",
      },

      // Navigation
      Overview: {
        ar: "نظرة عامة",
        fr: "Aperçu",
        ms: "Gambaran Keseluruhan",
        hi: "अवलोकन",
      },
      Impact: { ar: "تأثير", fr: "Impact", ms: "Impak", hi: "प्रभाव" },
      Approach: {
        ar: "نهج",
        fr: "Approche",
        ms: "Pendekatan",
        hi: "दृष्टिकोण",
      },
      Resources: { ar: "موارد", fr: "Ressources", ms: "Sumber", hi: "संसाधन" },
      "Next steps": {
        ar: "الخطوات التالية",
        fr: "Prochaines étapes",
        ms: "Langkah seterusnya",
        hi: "अगले कदम",
      },
      "Try for free": {
        ar: "جرب مجاناً",
        fr: "Essayer gratuitement",
        ms: "Cuba percuma",
        hi: "मुफ्त में आज़माएं",
      },

      // Footer
      Products: { ar: "منتجات", fr: "Produits", ms: "Produk", hi: "उत्पाद" },
      "Our AI": {
        ar: "الذكاء الاصطناعي",
        fr: "Notre IA",
        ms: "AI Kami",
        hi: "हमारी एआई",
      },
      Company: { ar: "شركة", fr: "Entreprise", ms: "Syarikat", hi: "कंपनी" },
      Legal: {
        ar: "قانوني",
        fr: "Juridique",
        ms: "Undang-undang",
        hi: "कानूनी",
      },
      "About Us": {
        ar: "من نحن",
        fr: "À propos",
        ms: "Tentang Kami",
        hi: "हमारे बारे में",
      },
      "Contact Us": {
        ar: "اتصل بنا",
        fr: "Contactez-nous",
        ms: "Hubungi Kami",
        hi: "संपर्क करें",
      },
      "Privacy Policy": {
        ar: "سياسة الخصوصية",
        fr: "Politique de confidentialité",
        ms: "Dasar Privasi",
        hi: "गोपनीयता नीति",
      },
      "Terms of Service": {
        ar: "شروط الخدمة",
        fr: "Conditions d'utilisation",
        ms: "Syarat Perkhidmatan",
        hi: "सेवा की शर्तें",
      },
      Documentation: {
        ar: "توثيق",
        fr: "Documentation",
        ms: "Dokumentasi",
        hi: "प्रलेखन",
      },
      Community: {
        ar: "المجتمع",
        fr: "Communauté",
        ms: "Komuniti",
        hi: "समुदाय",
      },
      "Support Center": {
        ar: "مركز الدعم",
        fr: "Centre de support",
        ms: "Pusat Sokongan",
        hi: "सहायता केंद्र",
      },
    };

    return translations[text]?.[this.currentLanguage] || null;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  static markAsNoTranslate(element: HTMLElement) {
    element.setAttribute("data-no-translate", "true");
  }
}

const globalTranslator = new WebsiteTranslator();

export const changeWebsiteLanguage = (langCode: string) => {
  return globalTranslator.changeLanguage(langCode);
};

export const getCurrentLanguage = () => {
  return globalTranslator.getCurrentLanguage();
};

export const markAsNoTranslate = (element: HTMLElement) => {
  return WebsiteTranslator.markAsNoTranslate(element);
};

export const useWebsiteTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    getCurrentLanguage()
  );

  const changeLanguage = async (langCode: string) => {
    try {
      await changeWebsiteLanguage(langCode);
      setCurrentLanguage(langCode);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return { currentLanguage, changeLanguage };
};

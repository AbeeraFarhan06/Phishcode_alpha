// import React, { useState, useEffect } from "react";
// import { useTranslation } from "../context/TranslationContext";

// interface TranslatedTextProps {
//   text: string;
//   fallback?: string;
// }

// const TranslatedText: React.FC<TranslatedTextProps> = ({
//   text,
//   fallback = text,
// }) => {
//   const { currentLanguage, translateText } = useTranslation();
//   const [translatedText, setTranslatedText] = useState(text);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const performTranslation = async () => {
//       if (currentLanguage === "en") {
//         setTranslatedText(text);
//         return;
//       }

//       setIsLoading(true);
//       try {
//         const translated = await translateText(text, currentLanguage);
//         setTranslatedText(translated);
//       } catch (error) {
//         console.error("Translation failed:", error);
//         setTranslatedText(fallback);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     performTranslation();
//   }, [text, currentLanguage, translateText, fallback]);

//   if (isLoading && currentLanguage !== "en") {
//     return <span style={{ opacity: 0.7 }}>{text}</span>; // Show original with reduced opacity while loading
//   }

//   return <span>{translatedText}</span>;
// };

// export default TranslatedText;

import React from "react";

interface ILanguageContext {
  setLanguage: (lang: "de" | "en") => void;
  language: "de" | "en";
}

export const LanguageContext = React.createContext<ILanguageContext>({
  setLanguage: () => {},
  language: "de",
});

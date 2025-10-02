export const languages = {
  en: {
    name: "English",
    code: "EN",
  },
  vi: {
    name: "Tiếng Việt",
    code: "VI",
  },
  es: {
    name: "Español",
    code: "ES",
  },
  fr: {
    name: "Français",
    code: "FR",
  },
} as const;

export type LanguageType = keyof typeof languages;

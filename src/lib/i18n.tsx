"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";
/** Texto en los dos idiomas. */
export type L = { es: string; en: string };

const KEY = "kts-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (x: L) => string };

const LangContext = createContext<Ctx>({
  lang: "es",
  setLang: () => {},
  t: (x) => x.es,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Al cargar: idioma guardado o, si no hay, el del navegador.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {}
    const initial: Lang =
      saved === "en" || saved === "es"
        ? saved
        : navigator.language?.toLowerCase().startsWith("es")
          ? "es"
          : "en";
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const t = useCallback((x: L) => x[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

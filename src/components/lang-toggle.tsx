"use client";

import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Botón ES / EN: resalta el idioma activo y cambia al otro. */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const next = lang === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
      className={cn(
        "flex size-full items-center justify-center gap-0.5 font-mono text-[11px] font-semibold leading-none cursor-pointer",
        className
      )}
    >
      <span className={lang === "es" ? "text-foreground" : "text-muted-foreground/60"}>ES</span>
      <span className="text-muted-foreground/40">/</span>
      <span className={lang === "en" ? "text-foreground" : "text-muted-foreground/60"}>EN</span>
    </button>
  );
}

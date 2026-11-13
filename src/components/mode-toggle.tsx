"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

/** Botón claro / oscuro: luna en modo claro, sol en modo oscuro. */
export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { lang } = useLang();
  // El tema solo se conoce en el navegador: esperamos a montar para no desincronizar.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const label = isDark
    ? lang === "es" ? "Cambiar a fondo claro" : "Switch to light mode"
    : lang === "es" ? "Cambiar a fondo oscuro" : "Switch to dark mode";

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      aria-label={label}
      className={cn(className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Se intercambian con CSS para que no parpadeen al cargar. */}
      <MoonIcon className="h-full w-full dark:hidden" />
      <SunIcon className="hidden h-full w-full dark:block" />
    </Button>
  );
}

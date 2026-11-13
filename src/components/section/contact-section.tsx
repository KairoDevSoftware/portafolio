"use client";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { useLang } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLang();
  return (
    <div className="border rounded-xl p-6 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{t(DATA.ui.contactPill)}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
          {t(DATA.ui.contactTitle)}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">{t(DATA.ui.contactText)}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href={t(DATA.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow transition-transform hover:-translate-y-0.5"
          >
            <Icons.whatsapp className="size-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-xl border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Icons.email className="size-4" />
            {t(DATA.ui.email)}
          </a>
        </div>
      </div>
    </div>
  );
}

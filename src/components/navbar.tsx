"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { useLang } from "@/lib/i18n";

const ICON_CLASS =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

function Tip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      >
        <p>{label}</p>
        <TooltipArrow className="fill-primary" />
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  const { t } = useLang();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 px-2">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit max-w-full mx-auto flex gap-1.5 sm:gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {/* En celular no caben todos: se ocultan los atajos de sección. */}
        <div className="hidden sm:flex gap-2">
          {DATA.navbar.map((item) => (
            <Tip key={item.href} label={t(item.label)}>
              <a href={item.href} aria-label={t(item.label)}>
                <DockIcon className={ICON_CLASS}>
                  <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </Tip>
          ))}
          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        </div>
        {DATA.contact.social.map((social) => {
          const external = social.url.startsWith("http");
          return (
            <Tip key={social.name} label={social.name}>
              <a
                href={social.url}
                aria-label={social.name}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <DockIcon className={ICON_CLASS}>
                  <social.icon className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </Tip>
          );
        })}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        <Tip label={t(DATA.ui.theme)}>
          <DockIcon className={ICON_CLASS}>
            <ModeToggle className="size-full cursor-pointer" />
          </DockIcon>
        </Tip>
        <Tip label={t(DATA.ui.language)}>
          <DockIcon className={ICON_CLASS}>
            <LangToggle />
          </DockIcon>
        </Tip>
      </Dock>
    </div>
  );
}

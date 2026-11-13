"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { useLang } from "@/lib/i18n";

const BLUR_FADE_DELAY = 0.04;

/** Encabezado centrado con píldora (Proyectos, Servicios…). */
export function SectionHeader({ pill, title, text }: { pill: string; title: string; text: string }) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
          <span className="text-background text-sm font-medium">{pill}</span>
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
      </div>
      <div className="flex flex-col gap-y-3 items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-balance">{title}</h2>
        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLang();
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <SectionHeader
        pill={t(DATA.ui.projectsPill)}
        title={t(DATA.ui.projectsTitle)}
        text={t(DATA.ui.projectsText)}
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {DATA.projects.map((project, id) => {
          const title = typeof project.title === "string" ? project.title : t(project.title);
          return (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
              <ProjectCard
                href={project.href}
                title={title}
                description={t(project.description)}
                dates={t(project.kind)}
                tags={project.technologies}
                image={project.image}
                links={project.links.map((l) => ({
                  type: t(l.type),
                  href: l.href,
                  icon: l.icon === "github" ? <Icons.github className="size-3" /> : <Icons.globe className="size-3" />,
                }))}
              />
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}

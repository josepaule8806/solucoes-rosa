import * as Icons from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import sectionsData from "@/content/sections.json";

const HowItWorksSection = () => {
  const { how_it_works } = sectionsData;

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
    return Icon;
  };

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              O Processo
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Como Funciona a Instalação
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Simplificamos toda a jornada para você começar a economizar sem qualquer dor de cabeça.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 border-t-2 border-dashed border-primary/20 lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {how_it_works.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <ScrollReveal key={step.step_title} delay={i * 150}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card ring-8 ring-white">
                      <Icon className="h-8 w-8" />
                      <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{step.step_title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.step_desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

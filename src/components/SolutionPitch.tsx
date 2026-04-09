import * as Icons from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import sectionsData from "@/content/sections.json";

const SolutionPitch = () => {
  const { solution } = sectionsData;
  const { title, subtitle, image, benefits } = solution;

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.CheckCircle2;
    return Icon;
  };

  return (
    <section id="solucao" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                A Solução Ideal
              </span>
              <h2 className="mb-8 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit: any, i: number) => {
                  const Icon = getIcon(benefit.icon);
                  return (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <WhatsAppButton text="Receber Meu Estudo Gratuito" className="px-10 py-5" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-secondary blur-2xl opacity-50" />
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-elevated transition-transform hover:scale-[1.01] duration-700">
                <img 
                  src={image} 
                  alt="Instalação de painéis solares profissional" 
                  className="w-full h-auto object-cover aspect-video"
                  width={800}
                  height={450}
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-6 backdrop-blur-md shadow-lg border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                          RJ
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">+500 Famílias Atendidas</p>
                      <p className="text-xs text-muted-foreground font-medium">Em Porto Alegre e toda Região</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionPitch;

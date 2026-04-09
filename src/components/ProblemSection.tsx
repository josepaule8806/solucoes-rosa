import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import sectionsData from "@/content/sections.json";

const ProblemSection = () => {
  const { problem } = sectionsData;

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                O Problema
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                {problem.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {problem.subtitle}
              </p>
              <div className="rounded-2xl border-l-4 border-accent bg-secondary p-6 italic shadow-sm">
                <p className="text-foreground/90">
                  {problem.agitation}
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/5 blur-3xl" />
              <img 
                src={problem.image} 
                alt="Consumo de energia alto" 
                className="relative z-10 rounded-2xl shadow-elevated transition-transform hover:scale-[1.02] duration-500"
                width={800}
                height={600}
              />
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={400}>
          <div className="mt-20 rounded-3xl bg-primary p-8 md:p-12 text-center text-primary-foreground shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="mb-4 font-heading text-2xl font-bold md:text-3xl">
                A boa notícia? Você não precisa mais ser refém.
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
                A solução definitiva para os aumentos abusivos está literalmente acima da sua cabeça. Transforme seu telhado em uma usina de lucro e liberdade.
              </p>
              <a 
                href="#solucao" 
                className="inline-flex items-center gap-2 font-heading font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider text-sm"
              >
                Veja como garantimos sua economia <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;

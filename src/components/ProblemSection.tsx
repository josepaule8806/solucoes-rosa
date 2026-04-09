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
      </div>
    </section>
  );
};

export default ProblemSection;

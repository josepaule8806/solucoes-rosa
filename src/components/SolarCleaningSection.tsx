import solarAntes from "@/assets/solar-antes.jpg";
import solarLimpeza from "@/assets/solar-limpeza.jpg";
import solarDepois from "@/assets/solar-depois.jpg";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { src: solarAntes, label: "Antes", description: "Placas com sujeira acumulada, reduzindo a eficiência energética." },
  { src: solarLimpeza, label: "Limpeza", description: "Profissional realizando a limpeza com equipamentos adequados e segurança." },
  { src: solarDepois, label: "Depois", description: "Placas limpas e funcionando com máxima eficiência novamente." },
];

const SolarCleaningSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              Antes & Depois
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Limpeza de Placas Solares
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Mantemos suas placas solares funcionando com máxima eficiência através de limpeza profissional especializada.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 120}>
              <div className="group overflow-hidden rounded-2xl bg-card shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={step.src}
                    alt={`${step.label} - Limpeza de placas solares`}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-lg">
                    {step.label}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarCleaningSection;

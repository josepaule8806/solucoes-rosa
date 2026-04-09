import * as Icons from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

const servicesFiles = import.meta.glob("@/content/services/*.json", { eager: true });
const services = Object.values(servicesFiles).map((file: any) => file.default || file);

const getIcon = (iconName: string) => {
  const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
  return Icon;
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              O que fazemos
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Especializados em instalações elétricas, energia solar fotovoltaica e estruturas de telhado em Porto Alegre e região.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-gradient-primary">
                    <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <WhatsAppButton text="Solicitar orçamento" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;

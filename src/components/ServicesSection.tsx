import { Wrench, Settings, Home, Building2, ClipboardList, Lightbulb } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  { icon: Wrench, title: "Manutenção", description: "Manutenção preventiva e corretiva com agilidade e qualidade para garantir o bom funcionamento." },
  { icon: Settings, title: "Instalação", description: "Instalação profissional de equipamentos e sistemas com precisão e segurança." },
  { icon: Lightbulb, title: "Reparos", description: "Reparos rápidos e eficientes para resolver seus problemas com qualidade garantida." },
  { icon: Home, title: "Serviços Residenciais", description: "Soluções completas para sua casa, do básico ao complexo, com cuidado e atenção." },
  { icon: Building2, title: "Serviços Empresariais", description: "Atendimento especializado para empresas com foco em produtividade e resultado." },
  { icon: ClipboardList, title: "Consultoria", description: "Consultoria técnica para encontrar as melhores soluções para o seu projeto." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            O que fazemos
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Oferecemos uma gama completa de serviços profissionais para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-gradient-primary">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton text="Solicitar orçamento" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

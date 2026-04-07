import { Zap, UserCheck, FileCheck, MapPin, ThumbsUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const differentials = [
  { icon: Zap, title: "Atendimento Rápido", description: "Respondemos e agendamos com agilidade para não deixar você esperando." },
  { icon: UserCheck, title: "Profissionais Qualificados", description: "Equipe treinada e experiente para entregar o melhor resultado." },
  { icon: FileCheck, title: "Orçamento sem Compromisso", description: "Solicite seu orçamento gratuitamente e sem nenhuma obrigação." },
  { icon: MapPin, title: "Atendimento na Região", description: "{ icon: MapPin, title: "Atendimento em Porto Alegre e Região", description: "Cobertura em Porto Alegre e toda a região metropolitana." }," },
  { icon: ThumbsUp, title: "Qualidade Garantida", description: "Garantimos a qualidade de todos os nossos serviços realizados." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Por que nos escolher
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Nossos Diferenciais
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {differentials.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

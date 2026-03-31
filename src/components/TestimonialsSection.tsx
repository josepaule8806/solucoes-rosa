import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente Residencial",
    text: "Excelente atendimento! A equipe foi muito profissional e pontual. Recomendo a Soluções Rosa para todos.",
  },
  {
    name: "Carlos Oliveira",
    role: "Empresário",
    text: "Contratamos para manutenção da nossa empresa e ficamos muito satisfeitos. Serviço de qualidade e preço justo.",
  },
  {
    name: "Ana Rodrigues",
    role: "Cliente Residencial",
    text: "Desde a primeira ligação até a entrega do serviço, tudo foi perfeito. Profissionais competentes e atenciosos.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              Depoimentos
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div className="rounded-2xl bg-card p-8 shadow-card transition-all hover:shadow-elevated">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

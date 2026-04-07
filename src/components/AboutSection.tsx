import { ShieldCheck, Award, Users, Sun } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Award, label: "Anos no Mercado", value: "5+" },
  { icon: Sun, label: "Projetos Fotovoltaicos", value: "1.000+" },
  { icon: Users, label: "Clientes Satisfeitos", value: "500+" },
  { icon: ShieldCheck, label: "Qualidade Garantida", value: "100%" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <ScrollReveal>
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre nós
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Uma empresa comprometida com a <span className="text-gradient">excelência</span>
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Rosa Soluções</strong> é uma empresa especializada em <strong className="text-foreground">instalações elétricas, estruturas de telhado e energia solar fotovoltaica</strong>, A <strong className="text-foreground">Rosa Soluções</strong> é uma empresa especializada em <strong className="text-foreground">instalações elétricas, estruturas de telhado e energia solar fotovoltaica</strong>, atendendo Porto Alegre e região. Com mais de 5 anos no mercado, somos referência em qualidade e confiança. 5 anos no mercado, somos referência em qualidade e confiança.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Oferecemos serviços completos, desde a instalação e manutenção elétrica até a construção e reparo de telhados, incluindo estruturas, telhas e impermeabilização. Já realizamos mais de 1.000 projetos de módulos fotovoltaicos instalados.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Nosso nome é bem visto no mercado, com um número crescente de clientes satisfeitos. Trabalhamos com transparência, pontualidade e compromisso.
            </p>
          </ScrollReveal>

          <div className="grid gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="flex items-center gap-5 rounded-2xl bg-card p-6 shadow-card transition-all hover:shadow-elevated">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

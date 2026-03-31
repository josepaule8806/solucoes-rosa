import { ShieldCheck, Award, Users } from "lucide-react";

import { ShieldCheck, Award, Users, Sun } from "lucide-react";

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
          <div>
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre nós
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Uma empresa comprometida com a <span className="text-gradient">excelência</span>
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Rosa Soluções</strong> nasceu com a missão de oferecer serviços profissionais de alta qualidade para empresas e residências. Com uma equipe altamente qualificada, garantimos soluções eficientes e um atendimento personalizado.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Trabalhamos com transparência, pontualidade e compromisso, construindo relações de confiança com cada cliente. Nossa prioridade é entregar resultados que superem expectativas.
            </p>
          </div>

          <div className="grid gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 rounded-2xl bg-card p-6 shadow-card transition-all hover:shadow-elevated"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import solarAntes from "@/assets/solar-antes.jpg";
import solarDepois from "@/assets/solar-depois.jpg";
import ScrollReveal from "./ScrollReveal";

const preview = [
  { src: solarAntes, alt: "Limpeza solar - Antes" },
  { src: solarDepois, alt: "Limpeza solar - Depois" },
  { src: portfolio1, alt: "Instalação de equipamentos" },
  { src: portfolio2, alt: "Manutenção elétrica" },
  { src: portfolio3, alt: "Projeto residencial" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              Nosso trabalho
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Trabalhos Realizados
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Confira alguns dos nossos projetos concluídos com excelência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {preview.map((img, i) => (
            <ScrollReveal key={img.alt} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-heading font-bold text-primary-foreground shadow-elevated transition-all hover:scale-105 hover:brightness-110"
            >
              Ver todos os trabalhos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;

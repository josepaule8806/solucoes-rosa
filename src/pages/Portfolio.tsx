import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import solarAntes from "@/assets/solar-antes.jpg";
import solarLimpeza from "@/assets/solar-limpeza.jpg";
import solarDepois from "@/assets/solar-depois.jpg";

interface Project {
  title: string;
  description: string;
  images: { src: string; label?: string }[];
}

const projects: Project[] = [
  {
    title: "Limpeza de Placas Solares",
    description: "Serviço completo de limpeza profissional para máxima eficiência dos módulos fotovoltaicos.",
    images: [
      { src: solarAntes, label: "Antes" },
      { src: solarLimpeza, label: "Limpeza" },
      { src: solarDepois, label: "Depois" },
    ],
  },
  {
    title: "Instalação de Equipamentos",
    description: "Instalação profissional de equipamentos elétricos com segurança e precisão.",
    images: [{ src: portfolio1 }],
  },
  {
    title: "Manutenção Elétrica",
    description: "Manutenção preventiva e corretiva em instalações elétricas residenciais e comerciais.",
    images: [{ src: portfolio2 }],
  },
  {
    title: "Projeto Residencial",
    description: "Projeto elétrico residencial completo, do planejamento à execução.",
    images: [{ src: portfolio3 }],
  },
  {
    title: "Reforma de Banheiro",
    description: "Reforma completa com instalações hidráulicas e elétricas.",
    images: [{ src: portfolio4 }],
  },
  {
    title: "Projeto Empresarial",
    description: "Soluções elétricas para empresas com foco em segurança e produtividade.",
    images: [{ src: portfolio5 }],
  },
  {
    title: "Acabamento e Pintura",
    description: "Acabamento profissional com atenção aos detalhes.",
    images: [{ src: portfolio6 }],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Nossos Trabalhos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Conheça alguns dos projetos realizados pela Soluções Rosa. Qualidade e profissionalismo em cada detalhe.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 space-y-20">
          {projects.map((project, pi) => (
            <ScrollReveal key={project.title} delay={pi * 60}>
              <div>
                <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="mb-6 max-w-xl text-muted-foreground">
                  {project.description}
                </p>
                <div
                  className={`grid gap-4 ${
                    project.images.length === 1
                      ? "grid-cols-1 max-w-lg"
                      : project.images.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-3"
                  }`}
                >
                  {project.images.map((img, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl shadow-card">
                      <img
                        src={img.src}
                        alt={`${project.title} ${img.label || i + 1}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {img.label && (
                        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                          {img.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Gostou do que viu?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
          <WhatsAppButton text="Solicitar orçamento" variant="outline" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Portfolio;

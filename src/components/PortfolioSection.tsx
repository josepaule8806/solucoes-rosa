import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import ScrollReveal from "./ScrollReveal";

const images = [
  { src: portfolio1, alt: "Instalação de equipamentos" },
  { src: portfolio2, alt: "Manutenção elétrica" },
  { src: portfolio3, alt: "Projeto residencial concluído" },
  { src: portfolio4, alt: "Reforma de banheiro" },
  { src: portfolio5, alt: "Projeto empresarial" },
  { src: portfolio6, alt: "Acabamento e pintura" },
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
          {images.map((img, i) => (
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
      </div>
    </section>
  );
};

export default PortfolioSection;

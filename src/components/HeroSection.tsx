import heroBg from "@/assets/hero-bg.jpg";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Soluções Rosa workspace" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-rosa-700/90 via-rosa-600/80 to-rosa-500/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Soluções profissionais para você
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            Soluções profissionais com{" "}
            <span className="underline decoration-primary-foreground/40 decoration-4 underline-offset-8">
              qualidade e confiança
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
            Atendemos empresas e residências com serviços profissionais e atendimento rápido. Solicite seu orçamento sem compromisso.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/40 px-8 py-4 font-heading font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

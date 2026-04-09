import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import heroData from "@/content/hero.json";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrollY * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img ref={imgRef} src={heroData.backgroundImage} alt="Soluções Rosa banner" width={1920} height={1080} className="h-full w-full object-cover will-change-transform scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/65" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">

          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Liberte-se das contas de luz abusivas: <span className="text-accent italic">Economize até 95%</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
            Transforme o sol em liberdade financeira. Reduza custos drásticos, conquiste sua independência energética e valorize seu imóvel com as melhores soluções de Porto Alegre e região.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton text="Simular Minha Economia" className="px-10 py-5 text-lg" />
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-heading font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                Nossos Serviços
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80 text-sm font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                <ShieldCheck className="h-5 w-5 text-accent" />
              </div>
              <span>Instalação Certificada & Garantia de 25 anos nos painéis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

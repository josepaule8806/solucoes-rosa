import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

const CtaSection = () => {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-6 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Pare de pagar por energia desperdiçada
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-200">
            Comece sua jornada rumo à economia real hoje mesmo. Clique no botão abaixo e receba um orçamento personalizado para sua residência ou empresa.
          </p>
          <WhatsAppButton text="Falar no WhatsApp" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;

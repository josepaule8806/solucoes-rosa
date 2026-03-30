import WhatsAppButton from "./WhatsAppButton";

const CtaSection = () => {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Pronto para resolver seu problema?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-200">
          Entre em contato agora mesmo e solicite seu orçamento sem compromisso. Nossa equipe está pronta para atender você!
        </p>
        <WhatsAppButton text="Falar no WhatsApp" />
      </div>
    </section>
  );
};

export default CtaSection;

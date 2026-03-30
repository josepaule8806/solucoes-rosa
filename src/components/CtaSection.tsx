import WhatsAppButton from "./WhatsAppButton";

const CtaSection = () => {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Pronto para resolver seu problema?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90">
          Entre em contato agora mesmo e solicite seu orçamento sem compromisso. Nossa equipe está pronta para atender você!
        </p>
        <WhatsAppButton
          text="Falar no WhatsApp"
          variant="outline"
          className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        />
      </div>
    </section>
  );
};

export default CtaSection;

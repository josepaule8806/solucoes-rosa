import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqFiles = import.meta.glob("@/content/faq/*.json", { eager: true });
const faqs = Object.values(faqFiles).map((file: any) => file.default || file);

const FaqSection = () => {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              Dúvidas Comuns
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Tudo o que você precisa saber antes de dar os primeiros passos para a economia real.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <AccordionItem value={`item-${i}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <p className="mb-6 text-muted-foreground">Ainda tem alguma dúvida específica?</p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 font-heading font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Falar com um Especialista
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;

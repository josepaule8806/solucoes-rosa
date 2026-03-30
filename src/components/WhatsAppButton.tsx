import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento.";

interface WhatsAppButtonProps {
  text?: string;
  variant?: "primary" | "outline" | "floating";
  className?: string;
}

const WhatsAppButton = ({ text = "Solicitar orçamento no WhatsApp", variant = "primary", className = "" }: WhatsAppButtonProps) => {
  if (variant === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-elevated transition-transform hover:scale-110 ${className}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-heading font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground ${className}`}
      >
        <MessageCircle className="h-5 w-5" />
        {text}
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-heading font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-105 hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
};

export default WhatsAppButton;

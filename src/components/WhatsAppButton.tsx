import { MessageCircle } from "lucide-react";

import contactData from "@/content/contact.json";

const WHATSAPP_URL = `https://wa.me/${contactData.whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento.`;

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
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent shadow-elevated transition-transform hover:scale-110 ${className}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-accent-foreground" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/50 px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 ${className}`}
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
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-4 font-heading font-bold text-accent-foreground shadow-elevated transition-all hover:scale-105 hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
};

export default WhatsAppButton;

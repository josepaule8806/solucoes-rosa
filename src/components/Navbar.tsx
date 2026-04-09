import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio", isRoute: true },
  { href: "#faq", label: "FAQ" },
  { href: "#sobre", label: "Sobre" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Rosa Soluções" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            'isRoute' in l && l.isRoute ? (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            )
          )}
          <WhatsAppButton text="WhatsApp" className="px-5 py-2.5 text-sm" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          {navLinks.map((l) =>
            'isRoute' in l && l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            )
          )}
          <div className="mt-4">
            <WhatsAppButton text="WhatsApp" className="w-full justify-center py-3 text-sm" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

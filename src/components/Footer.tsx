import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-heading text-xl font-bold text-primary-foreground">
              Rosa <span className="text-accent">Soluções</span>
            </h3>
            <p className="text-sm text-blue-200">
              Soluções profissionais com qualidade e confiança para empresas e residências.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">Contato</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-accent" />
                <a href="https://instagram.com/rosasolucoesoficial" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  @rosasolucoesoficial
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Sua Cidade - Estado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">Navegação</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Rosa Soluções. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

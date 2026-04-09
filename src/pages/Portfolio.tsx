import { useState } from "react";
import { ArrowLeft, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const portfolioFiles = import.meta.glob("@/content/portfolio/*.json", { eager: true });
const projectsFromCMS = Object.values(portfolioFiles).map((file: any, index: number) => ({
  id: index + 1,
  ...(file.default || file)
}));

const projects = projectsFromCMS;

interface Project {
  id: number;
  category: string;
  serviceTitle: string;
  clientName: string;
  coverImage: string;
  galleryImages: { src: string; label?: string }[];
  description: string;
}



const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Nossos Trabalhos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Conheça alguns dos projetos realizados pela Soluções Rosa. Qualidade e profissionalismo em cada detalhe.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Category Pills */}
          <div className="mb-12 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 60}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group w-full overflow-hidden rounded-2xl bg-card text-left shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.serviceTitle}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute right-3 top-3 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {project.serviceTitle}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                      {project.clientName}
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">
                  {selectedProject.serviceTitle}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Cliente: {selectedProject.clientName}
                </DialogDescription>
              </DialogHeader>

              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>

              <div
                className={`grid gap-3 ${
                  selectedProject.galleryImages.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {selectedProject.galleryImages.map((img, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl">
                    <img
                      src={img.src}
                      alt={`${selectedProject.serviceTitle} ${img.label || i + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    {img.label && (
                      <span className="absolute left-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                        {img.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Gostou do que viu?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
          <WhatsAppButton text="Solicitar orçamento" variant="outline" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Portfolio;

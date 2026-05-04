import { Button } from "@/components/ui/button";
import { GraduationCap, HandHelping, Coins, Star, ShieldCheck, Sparkles, BookOpen, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-learn2gether.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Floating Glass Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 glass-panel shadow-lg transition-all duration-300">
        <div className="container flex items-center justify-between py-3 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl text-white shadow-lg shadow-primary/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            Learn<span className="text-primary">2</span>Gether
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">Beneficios</a>
            <a href="#perfiles" className="text-muted-foreground hover:text-primary transition-colors">Perfiles</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex gap-4">
            <Button asChild variant="ghost" className="hidden sm:flex rounded-xl hover:bg-white/5">
              <a href="#login">Entrar</a>
            </Button>
            <Button asChild className="rounded-xl bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105">
              <a href="#registro">Únete ahora</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 lg:pb-32">
          <div className="glow-bg -top-20 -left-20"></div>
          <div className="glow-bg top-40 -right-20" style={{ background: "hsl(var(--secondary) / 0.15)", filter: "blur(120px)" }}></div>
          <div className="glow-bg bottom-0 left-1/2 -translate-x-1/2" style={{ background: "hsl(var(--accent) / 0.1)", filter: "blur(150px)" }}></div>
          
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-md animate-fade-in">
                <Sparkles className="h-4 w-4" /> La revolución del micro-tutoring
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Aprende y enseña, <br/>
                <span className="text-gradient">juntos.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Conectamos a estudiantes que dominan la materia con compañeros que necesitan
                un empujón. Resuelve dudas al instante, gana créditos y avanza a tu ritmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:-translate-y-1">
                  <a href="#registro" className="flex items-center gap-2">
                    Empezar gratis <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 hover:-translate-y-1">
                  <a href="#como-funciona">Ver cómo funciona</a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
                  <ShieldCheck className="h-5 w-5 text-secondary" /> Tutores validados
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
                  <Star className="h-5 w-5 text-star" /> Valoraciones 100% reales
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0 perspective-[1000px]">
              <div className="card-float p-2 md:p-4 transform md:-rotate-y-6 md:rotate-x-6 transition-transform duration-700 hover:rotate-0 hover:scale-105">
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                  <img
                    src={heroImg}
                    alt="Estudiantes colaborando"
                    className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 sm:left-4 z-20 flex items-center gap-3 card-soft bg-background/80 backdrop-blur-xl border border-white/10 px-5 py-3 shadow-2xl animate-float">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-star/20 text-star shadow-inner">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div>
                  <p className="font-bold text-sm text-foreground">Nota: 9.5</p>
                  <p className="text-xs text-muted-foreground">Tutor validado</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 sm:right-4 z-20 flex items-center gap-3 card-soft bg-background/80 backdrop-blur-xl border border-white/10 px-5 py-3 shadow-2xl animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent shadow-inner">
                  <Coins className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-sm text-foreground">+15 créditos</p>
                  <p className="text-xs text-muted-foreground">¡Buen trabajo!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="relative py-24 border-t border-white/5 bg-surface-soft/50">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Una forma más <span className="text-gradient">humana</span> de estudiar</h2>
              <p className="text-lg text-muted-foreground">
                Cierra la brecha entre quien entiende y quien necesita ayuda. Sin academias caras, sin esperar a la próxima tutoría.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: HandHelping, color: "text-primary", bg: "bg-primary/10", border: "hover:border-primary/50", title: "Ayuda al instante", text: "Solicita una micro-tutoría sobre tu duda exacta y conecta con un compañero experto al momento." },
                { icon: Coins, color: "text-accent", bg: "bg-accent/10", border: "hover:border-accent/50", title: "Gana enseñando", text: "Comparte lo que sabes, suma créditos valiosos y canjéalos por clases cuando las necesites." },
                { icon: ShieldCheck, color: "text-secondary", bg: "bg-secondary/10", border: "hover:border-secondary/50", title: "100% Confianza", text: "Cada tutor muestra su nota verificada y valoraciones reales. Transparencia total sin sorpresas." },
              ].map(({ icon: Icon, color, bg, border, title, text }) => (
                <div key={title} className={`group card-float p-8 transition-all duration-500 ${border}`}>
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-6 ${bg} ${color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-foreground/90 group-hover:text-foreground transition-colors">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-24 relative overflow-hidden">
          <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30" style={{ background: "var(--gradient-brand)" }}></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Así funciona <span className="text-white">Learn2Gether</span></h2>
              <p className="text-lg text-muted-foreground">Tres pasos simples para que la ayuda llegue cuando más la necesitas.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-star/20 -translate-y-1/2 z-0" />
              
              {[
                { n: "01", title: "Publica tu duda", text: "Indica la asignatura, el tema y tu disponibilidad. Así de fácil.", color: "text-primary", bg: "bg-primary/10" },
                { n: "02", title: "Conecta y elige", text: "Selecciona entre compañeros validados con el perfil perfecto para ayudarte.", color: "text-accent", bg: "bg-accent/10" },
                { n: "03", title: "Aprende y valora", text: "Resuelve tu duda en minutos y deja tu reseña para ayudar a la comunidad.", color: "text-star", bg: "bg-star/10" },
              ].map((s) => (
                <div key={s.n} className="card-float p-8 text-center relative z-10 bg-surface-soft/80">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${s.bg} border border-white/5 mb-6 shadow-xl`}>
                    <span className={`text-3xl font-extrabold ${s.color}`}>{s.n}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfiles */}
        <section id="perfiles" className="py-24 border-t border-white/5 bg-surface-alt/30">
          <div className="container grid gap-8 lg:grid-cols-2">
            <div className="card-float p-10 group hover:border-help/30">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-32 h-32 text-help" />
              </div>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-help/15 text-help mb-8 shadow-lg shadow-help/10 transition-transform group-hover:scale-110">
                <BookOpen className="h-8 w-8" />
              </span>
              <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Encuentra a alguien como tú que ya entendió ese tema imposible. Sin academias, sin horarios rígidos.
              </p>
              <ul className="space-y-4 text-base font-medium mb-10">
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-help/20 text-help text-xs">✓</span> Sesiones desde 15 minutos</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-help/20 text-help text-xs">✓</span> Tutores de tu propia facultad</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-help/20 text-help text-xs">✓</span> Paga con créditos, no con tu mensualidad</li>
              </ul>
              <Button asChild size="lg" className="w-full sm:w-auto rounded-xl bg-help hover:bg-help/90 text-white shadow-lg shadow-help/20 transition-all hover:scale-105">
                <a href="#registro">Solicitar mi primera clase</a>
              </Button>
            </div>
            
            <div className="card-float p-10 group hover:border-secondary/30">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-32 h-32 text-secondary" />
              </div>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15 text-secondary mb-8 shadow-lg shadow-secondary/10 transition-transform group-hover:scale-110">
                <Users className="h-8 w-8" />
              </span>
              <h3 className="text-3xl font-bold mb-4">¿Dominas la materia?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Convierte tu esfuerzo en recompensas. Ayuda a tus compañeros, refuerza tus conocimientos y gana créditos.
              </p>
              <ul className="space-y-4 text-base font-medium mb-10">
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs">✓</span> Tú decides tu disponibilidad</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs">✓</span> Insignias de calidad por cada clase</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs">✓</span> Monetiza o canjea tus créditos</li>
              </ul>
              <Button asChild size="lg" className="w-full sm:w-auto rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:scale-105">
                <a href="#registro">Quiero ser tutor</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="registro" className="py-24 relative overflow-hidden border-t border-white/5">
          <div className="container relative z-10">
            <div className="card-float p-12 md:p-20 text-center max-w-5xl mx-auto overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-brand)" }} />
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Empieza a aprender con tu <span className="text-primary-glow">comunidad</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Únete gratis a Learn2Gether y descubre lo fácil que es resolver dudas o ganar recompensas enseñando. El conocimiento se comparte.
                </p>
                <div className="pt-8">
                  <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-white text-primary hover:bg-white/90 text-lg font-bold shadow-2xl transition-all hover:scale-105 hover:-translate-y-1">
                    <a href="#">Crear mi cuenta gratis</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-surface-soft/30 border-t border-white/5">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Preguntas <span className="text-gradient">frecuentes</span></h2>
              <p className="text-muted-foreground">Resolvemos tus dudas más comunes</p>
            </div>
            <div className="space-y-6">
              {[
                { q: "¿Cuánto cuesta usar Learn2Gether?", a: "Registrarte es 100% gratis. Las clases se pagan con créditos que puedes comprar o ganar ayudando a otros estudiantes en materias que dominas." },
                { q: "¿Cómo sé que el tutor está cualificado?", a: "Transparencia total: mostramos su nota certificada en la asignatura, las insignias obtenidas y las reseñas reales de otros alumnos tras cada sesión." },
                { q: "¿Puedo ser tutor y alumno a la vez?", a: "¡Por supuesto! Es la magia de nuestra comunidad. Pide ayuda en las asignaturas que te cuestan y enseña en las que destacas." },
              ].map((f) => (
                <div key={f.q} className="card-soft p-8 hover:bg-white/[0.07] transition-colors border-white/5">
                  <h3 className="text-xl font-bold mb-3 text-foreground/90">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-background py-12 relative overflow-hidden">
        <div className="glow-bg bottom-0 left-1/2 -translate-x-1/2 opacity-20 w-full h-[200px]" style={{ background: "var(--gradient-brand)" }}></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-bold text-xl text-white">
            <div className="p-1.5 bg-primary/20 rounded-lg text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            Learn2Gether
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Hecho por estudiantes, para estudiantes.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

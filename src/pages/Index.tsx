import { Button } from "@/components/ui/button";
import { GraduationCap, HandHelping, Coins, Star, ShieldCheck, Sparkles, BookOpen, Users } from "lucide-react";
import heroImg from "@/assets/hero-learn2gether.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <GraduationCap className="h-6 w-6" />
            Learn2Gether
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="opacity-90 hover:opacity-100">Cómo funciona</a>
            <a href="#beneficios" className="opacity-90 hover:opacity-100">Beneficios</a>
            <a href="#perfiles" className="opacity-90 hover:opacity-100">Perfiles</a>
            <a href="#faq" className="opacity-90 hover:opacity-100">FAQ</a>
          </nav>
          <Button asChild variant="secondary" className="rounded-lg">
            <a href="#registro">Iniciar sesión</a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="container grid gap-10 py-16 md:py-24 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary card-soft">
                <Sparkles className="h-3.5 w-3.5" /> Micro-tutorías entre estudiantes
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[hsl(var(--slate-deep))]">
                Aprende y enseña, <span className="text-primary">juntos.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Learn2Gether conecta a estudiantes que dominan la materia con compañeros que necesitan
                un empujón. Resuelve dudas al instante, gana créditos ayudando y avanza sin gastar un dineral.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)]">
                  <a href="#registro">Crear cuenta gratis</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg">
                  <a href="#como-funciona">Ver cómo funciona</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Tutores validados</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-star" /> Valoraciones reales</div>
              </div>
            </div>
            <div className="relative">
              <div className="card-float p-4 md:p-6">
                <img
                  src={heroImg}
                  alt="Dos estudiantes universitarios colaborando con un portátil"
                  width={1280}
                  height={960}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 card-soft px-4 py-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-star/20 text-star">
                  <Star className="h-4 w-4 fill-current" />
                </span>
                <div className="text-xs">
                  <p className="font-semibold">Nota: 9.5</p>
                  <p className="text-muted-foreground">Tutor validado</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 card-soft px-4 py-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Coins className="h-4 w-4" />
                </span>
                <div className="text-xs">
                  <p className="font-semibold">+15 créditos</p>
                  <p className="text-muted-foreground">¡Buen trabajo!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl">Una forma más humana de estudiar</h2>
              <p className="text-muted-foreground mt-3">
                Cierra la brecha entre quien entiende y quien necesita ayuda. Sin academias caras, sin esperar a la próxima tutoría.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: HandHelping, badge: "bg-help/15 text-help", title: "Pide ayuda al instante", text: "Solicita una micro-tutoría sobre la duda exacta que tienes y conecta con un compañero que ya la dominó." },
                { icon: Coins, badge: "bg-accent/15 text-accent", title: "Gana créditos enseñando", text: "Comparte lo que sabes, suma créditos y canjéalos por nuevas clases cuando los necesites." },
                { icon: ShieldCheck, badge: "bg-primary/15 text-primary", title: "Tutores con confianza", text: "Cada tutor muestra su nota en la asignatura y valoraciones reales. Sin sorpresas." },
              ].map(({ icon: Icon, badge, title, text }) => (
                <div key={title} className="card-float p-6">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${badge}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-16 md:py-24 bg-surface-soft">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl">Así funciona Learn2Gether</h2>
              <p className="text-muted-foreground mt-3">Tres pasos simples para que la ayuda llegue cuando la necesitas.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { n: "01", title: "Publica tu duda", text: "Indica la asignatura, el tema y cuándo te viene bien.", num: "text-primary/40" },
                { n: "02", title: "Conecta con un tutor", text: "Elige entre compañeros validados con buenas notas y reseñas.", num: "text-accent/40" },
                { n: "03", title: "Aprende y valora", text: "Resuelve la duda en minutos y deja una valoración honesta.", num: "text-star/60" },
              ].map((s) => (
                <div key={s.n} className="card-float p-6 relative">
                  <span className={`text-5xl font-bold ${s.num}`}>{s.n}</span>
                  <h3 className="text-xl mt-2 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfiles */}
        <section id="perfiles" className="py-16 md:py-24">
          <div className="container grid gap-6 md:grid-cols-2">
            <div className="card-float p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-help/15 text-help mb-4">
                <BookOpen className="h-6 w-6" />
              </span>
              <h3 className="text-2xl mb-2">¿Necesitas ayuda?</h3>
              <p className="text-muted-foreground mb-4">
                Encuentra a alguien como tú que ya entendió ese tema imposible. Sin academias, sin horarios rígidos.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2"><span className="text-help">●</span> Sesiones desde 15 minutos</li>
                <li className="flex gap-2"><span className="text-help">●</span> Tutores de tu propia facultad</li>
                <li className="flex gap-2"><span className="text-help">●</span> Paga con créditos, no con tu mensualidad</li>
              </ul>
              <Button asChild className="rounded-lg bg-help hover:bg-help/90 text-help-foreground">
                <a href="#registro">Solicitar mi primera clase</a>
              </Button>
            </div>
            <div className="card-float p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent mb-4">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="text-2xl mb-2">¿Dominas la materia?</h3>
              <p className="text-muted-foreground mb-4">
                Convierte tu esfuerzo en recompensas. Ayuda a tus compañeros y gana créditos canjeables.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2"><span className="text-accent">●</span> Tú decides tu disponibilidad</li>
                <li className="flex gap-2"><span className="text-accent">●</span> Insignias de calidad por cada clase</li>
                <li className="flex gap-2"><span className="text-accent">●</span> Refuerza lo que ya sabes enseñándolo</li>
              </ul>
              <Button asChild className="rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#registro">Quiero ser tutor</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="registro" className="py-16 md:py-24 bg-surface-soft">
          <div className="container">
            <div className="card-float p-10 md:p-14 text-center max-w-3xl mx-auto" style={{ background: "var(--gradient-brand)" }}>
              <h2 className="text-3xl md:text-4xl text-primary-foreground mb-3">
                Empieza a aprender con tu comunidad
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Únete gratis a Learn2Gether y descubre lo fácil que es resolver dudas (o ganar créditos) entre compañeros.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-lg">
                <a href="#">Crear mi cuenta</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl text-center mb-10">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Cuánto cuesta usar Learn2Gether?", a: "Registrarte es gratis. Las clases se pagan con créditos que puedes ganar ayudando a otros." },
                { q: "¿Cómo sé que el tutor es bueno?", a: "Mostramos su nota en la asignatura, sus insignias y las valoraciones de otros estudiantes." },
                { q: "¿Puedo ser tutor y alumno a la vez?", a: "¡Claro! La mayoría de la comunidad lo es. Pide ayuda en lo que te cuesta y enseña lo que dominas." },
              ].map((f) => (
                <div key={f.q} className="card-soft p-5">
                  <h3 className="font-semibold mb-1">{f.q}</h3>
                  <p className="text-muted-foreground text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--slate-deep))] text-white/80 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-semibold text-white">
            <GraduationCap className="h-5 w-5" /> Learn2Gether
          </div>
          <p>© {new Date().getFullYear()} Learn2Gether. Hecho por estudiantes, para estudiantes.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

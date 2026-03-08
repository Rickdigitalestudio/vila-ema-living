import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="h-screen min-h-[700px] relative flex items-end px-7 md:px-[60px] pb-[100px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/[0.88] via-background/50 to-background/25" />

      {/* Content */}
      <div className="relative z-[2] max-w-[720px] animate-fade-up">
        <div className="inline-flex items-center gap-[10px] text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-6">
          <span className="block w-10 h-px bg-gold" />
          Econ Construtora · Vila Ema · Zona Leste
        </div>

        <h1 className="font-display text-[clamp(54px,8vw,100px)] font-black leading-[1.0] mb-2">
          New{" "}
          <em className="italic text-gold">Vila Ema</em>
        </h1>

        <p className="font-heading text-[clamp(24px,3.5vw,48px)] tracking-[7px] text-cream-55 mb-7">
          Moderno. Prático. Seu.
        </p>

        <p className="text-[15px] leading-[1.75] text-cream-70 max-w-[520px] mb-9">
          Apartamentos de 2 dormitórios com terraço e lazer completo em uma das regiões mais valorizadas da Zona Leste. A apenas 600m da Estação Camilo Haddad.
        </p>

        <div className="flex gap-3 flex-wrap mb-10">
          {["2 Dormitórios", "Terraço", "Lazer Completo", "600m do Metrô"].map((badge) => (
            <span
              key={badge}
              className="bg-gold-subtle border border-gold-subtle text-gold px-[14px] py-[6px] rounded-sm text-[11px] font-bold tracking-[1.5px] uppercase"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex gap-[14px] flex-wrap">
          <a
            href="#contato"
            className="bg-gold text-primary-foreground px-[34px] py-[15px] text-xs font-bold tracking-[1.5px] uppercase no-underline rounded-sm hover:bg-primary-light hover:-translate-y-0.5 transition-all inline-block"
          >
            Quero Conhecer
          </a>
          <a
            href="#lazer"
            className="border border-cream/40 text-cream px-[34px] py-[15px] text-xs font-semibold tracking-[1.5px] uppercase no-underline rounded-sm hover:border-gold hover:text-gold hover:bg-gold-subtle/50 transition-all inline-block"
          >
            Ver o Lazer
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 right-7 md:right-[60px] flex items-center gap-3 text-[10px] tracking-[2.5px] uppercase text-cream/40 animate-fade-up-delayed">
        <span className="w-px bg-gradient-to-b from-primary to-transparent animate-shrink" style={{ height: 60 }} />
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;

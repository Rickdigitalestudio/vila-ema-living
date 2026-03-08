import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contato" className="bg-gradient-to-br from-secondary to-muted text-center px-7 md:px-[60px] py-[120px] relative overflow-hidden">
      <span className="absolute font-heading text-[280px] md:text-[420px] text-gold/[0.035] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
        NEW
      </span>

      <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px] relative z-[1]">
        <span className="block w-7 h-px bg-gold" />
        Fale com a Gente
      </div>

      <h2 className="font-display text-[clamp(38px,5vw,68px)] font-bold leading-[1.15] mb-[18px] relative z-[1]">
        Pronto para conquistar{" "}
        <em className="text-gold italic">o seu novo lar?</em>
      </h2>

      <p className="text-[15px] text-cream-70 max-w-[520px] mx-auto mb-11 leading-[1.8] relative z-[1]">
        Deixe seu contato e um de nossos especialistas entrará em contato para apresentar todas as condições e oportunidades do New Vila Ema.
      </p>

      <div className="flex flex-col sm:flex-row max-w-[480px] mx-auto mb-[14px] relative z-[1]">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-cream/[0.07] border border-gold/30 sm:border-r-0 text-cream px-[18px] py-[15px] text-sm font-body rounded-sm sm:rounded-r-none outline-none focus:border-gold placeholder:text-muted-foreground"
        />
        <button className="bg-gold text-primary-foreground border-none px-[26px] py-[15px] text-xs font-bold tracking-[1px] uppercase cursor-pointer rounded-sm sm:rounded-l-none font-body hover:bg-primary-light transition-colors mt-2 sm:mt-0">
          Quero Saber Mais
        </button>
      </div>

      <p className="text-[11px] text-muted-foreground relative z-[1] mb-7">
        Ao enviar, você concorda em receber informações sobre este empreendimento.
      </p>

      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-[1] inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 text-xs font-bold tracking-[1.5px] uppercase no-underline rounded-sm hover:bg-primary-light transition-colors"
      >
        💬 Falar pelo WhatsApp
      </a>
    </section>
  );
};

export default CTASection;

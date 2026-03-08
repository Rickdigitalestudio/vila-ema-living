const FooterSection = () => {
  return (
    <footer className="bg-dark2 border-t border-gold-faint px-7 md:px-[60px] pt-[60px] pb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-[50px] mb-12">
        {/* Brand */}
        <div>
          <span className="font-heading text-[30px] tracking-[3px] text-gold block mb-[14px]">
            NEW <span className="text-cream">VILA EMA</span>
          </span>
          <p className="text-[13px] text-muted-foreground leading-[1.7] max-w-[270px]">
            Um empreendimento Econ Construtora e Incorporadora. Qualidade, inovação e um novo jeito de viver na Zona Leste de São Paulo.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-[18px]">Navegação</h4>
          <ul className="list-none space-y-[9px]">
            {["O Empreendimento", "Área de Lazer", "Amenidades", "Localização", "Contato"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s/g, "").replace("á", "a")}`} className="text-muted-foreground text-[13px] no-underline hover:text-cream transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Lazer */}
        <div>
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-[18px]">Lazer</h4>
          <ul className="list-none space-y-[9px]">
            {["Piscinas", "Fitness", "Quadra", "Playground", "Pet Place"].map((l) => (
              <li key={l}>
                <a href="#lazer" className="text-muted-foreground text-[13px] no-underline hover:text-cream transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-[18px]">Contato</h4>
          <ul className="list-none space-y-[9px]">
            <li><a href="https://wa.me/5511999999999" className="text-muted-foreground text-[13px] no-underline hover:text-cream transition-colors">WhatsApp</a></li>
            <li><span className="text-muted-foreground text-[13px]">(11) 99999-9999</span></li>
            <li><span className="text-muted-foreground text-[13px]">econconstrutora.com.br</span></li>
            <li><a href="mailto:contato@econ.com.br" className="text-muted-foreground text-[13px] no-underline hover:text-cream transition-colors">contato@econ.com.br</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/[0.06] pt-7 flex flex-col md:flex-row justify-between items-center gap-[10px]">
        <p className="text-[11px] text-muted-foreground/55">
          © 2026 New Vila Ema · Econ Construtora e Incorporadora. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-muted-foreground/45 max-w-[380px] text-center md:text-right leading-[1.5]">
          Imagens meramente ilustrativas. As perspectivas artísticas têm caráter informativo. Sujeito a alterações sem aviso prévio. Consulte o memorial descritivo.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

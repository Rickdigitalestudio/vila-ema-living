const points = [
  { icon: "🚇", title: "Estação Camilo Haddad", desc: "Apenas 600 metros — cerca de 8 minutos a pé" },
  { icon: "🚇", title: "Estação Vila Tolstói", desc: "Poucos minutos de caminhada" },
  { icon: "🏥", title: "Hospitais e Clínicas", desc: "Acesso rápido aos principais serviços de saúde" },
  { icon: "🎓", title: "Faculdades e Escolas", desc: "Excelente infraestrutura educacional na região" },
];

const LocationSection = () => {
  return (
    <section id="localizacao" className="bg-dark px-7 md:px-[60px] py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div>
        <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
          <span className="block w-7 h-px bg-gold" />
          Localização
        </div>
        <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-[18px]">
          No coração da{" "}
          <em className="text-gold italic">Zona Leste</em>
        </h2>
        <p className="text-[15px] leading-[1.8] text-cream-70 max-w-[580px]">
          Estrategicamente localizado em Vila Ema, com acesso rápido ao metrô e a todos os serviços essenciais do bairro.
        </p>

        <div className="flex flex-col gap-4 mt-9">
          {points.map((p) => (
            <div key={p.title} className="flex items-start gap-[14px] p-[18px] bg-white-subtle border-l-[3px] border-gold rounded-r-sm">
              <span className="text-xl">{p.icon}</span>
              <div>
                <p className="text-sm font-bold mb-[3px]">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-dark3 rounded-md h-[400px] flex flex-col items-center justify-center border border-gold-faint relative overflow-hidden">
        <div className="absolute w-[14px] h-[14px] bg-gold rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-gold" />
        <div className="text-center p-5 relative z-[1]">
          <span className="text-[42px] block mb-[14px]">📍</span>
          <p className="font-display text-[22px] font-semibold mb-[6px]">Vila Ema</p>
          <p className="text-xs text-gold tracking-[2.5px] uppercase mb-6">Zona Leste · São Paulo · SP</p>
          <a
            href="https://www.google.com/maps/search/Vila+Ema+São+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-primary-foreground px-6 py-3 text-xs font-bold tracking-[1.5px] uppercase no-underline rounded-sm hover:bg-primary-light transition-colors inline-block"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

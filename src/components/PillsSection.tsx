const pills = [
  "🏊 Piscina Adulto", "👶 Piscina Infantil", "☀️ Solário", "🥩 Churrasqueira",
  "🍕 Forno de Pizza", "🏐 Quadra Recreativa", "🛝 Playground", "🧸 Brinquedoteca",
  "🐾 Pet Place", "🛁 Pet Wash", "🌳 Praça", "🍽️ Espaço Gourmet",
  "🎮 Salão de Jogos", "💇 Beauty Care", "🛒 Mini Market 24/7", "💪 Fitness Interno",
  "🏃 Fitness Externo", "🚲 Bicicletário", "📦 Delivery", "💻 Coworking",
  "🎉 Salão de Festas",
];

const PillsSection = () => {
  return (
    <section id="comodidades" className="bg-dark2 px-7 md:px-[60px] py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] items-end mb-[50px]">
        <div>
          <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
            <span className="block w-7 h-px bg-gold" />
            Tudo que você precisa
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15]">
            Lazer completo{" "}
            <em className="text-gold italic">para toda família</em>
          </h2>
        </div>
        <p className="text-[15px] leading-[1.8] text-cream-70">
          Mais de 20 itens de lazer e serviços criados para o seu conforto, bem-estar e praticidade no dia a dia.
        </p>
      </div>

      <div className="flex flex-wrap gap-[10px]">
        {pills.map((pill) => (
          <span
            key={pill}
            className="flex items-center gap-[9px] bg-white-subtle border border-white-subtle px-[18px] py-[11px] rounded-full text-[13px] font-medium text-cream/[0.78] hover:bg-gold-subtle/70 hover:border-gold-subtle hover:text-gold transition-all duration-250 cursor-default"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PillsSection;

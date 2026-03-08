const stats = [
  { value: "2", label: "Dormitórios" },
  { value: "20+", label: "Itens de Lazer" },
  { value: "600m", label: "Até o Metrô" },
  { value: "24/7", label: "Mini Market" },
];

const StatsSection = () => {
  return (
    <div className="bg-dark2 border-y border-gold-faint px-7 md:px-[60px] py-8 md:py-11 grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`text-center px-6 py-5 lg:py-0 ${
            i < stats.length - 1 ? "lg:border-r lg:border-cream/[0.07]" : ""
          } ${i < 2 ? "border-b lg:border-b-0 border-cream/[0.07]" : ""}`}
        >
          <span className="font-display text-[50px] font-bold text-gold block leading-none mb-2">
            {stat.value}
          </span>
          <span className="text-[11px] tracking-[2px] uppercase text-muted-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

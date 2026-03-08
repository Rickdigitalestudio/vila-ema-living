import brinquedotecaImg from "@/assets/brinquedoteca.jpg";
import gourmetImg from "@/assets/gourmet.jpg";
import fitnessExtImg from "@/assets/fitness-ext.jpg";

const spaces = [
  { img: brinquedotecaImg, title: "Brinquedoteca", sub: "Para as crianças" },
  { img: gourmetImg, title: "Churrasqueira", sub: "Espaço Gourmet" },
  { img: fitnessExtImg, title: "Fitness Externo", sub: "Ao ar livre" },
];

const MoreSpacesSection = () => {
  return (
    <section className="bg-dark px-7 md:px-[60px] py-[100px]">
      <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
        <span className="block w-7 h-px bg-gold" />
        Mais espaços
      </div>
      <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-14">
        Cada canto pensado{" "}
        <em className="text-gold italic">com cuidado</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
        {spaces.map((s) => (
          <div key={s.title} className="relative overflow-hidden aspect-[4/3] group">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/[0.88] to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-[15px] font-semibold text-cream mb-[3px]">{s.title}</p>
              <p className="text-[11px] text-gold tracking-[1.5px] uppercase">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreSpacesSection;

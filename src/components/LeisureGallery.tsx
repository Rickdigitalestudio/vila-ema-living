import poolImg from "@/assets/pool-area.jpg";
import fitnessImg from "@/assets/fitness.jpg";
import quadraImg from "@/assets/quadra.jpg";
import salaoImg from "@/assets/salao-jogos.jpg";
import playgroundImg from "@/assets/playground.jpg";
import gourmetImg from "@/assets/gourmet.jpg";

const items = [
  { img: poolImg, label: "Piscina Adulto & Infantil", span: true },
  { img: fitnessImg, label: "Fitness" },
  { img: quadraImg, label: "Quadra Recreativa" },
  { img: salaoImg, label: "Salão de Jogos" },
  { img: playgroundImg, label: "Playground" },
  { img: gourmetImg, label: "Espaço Gourmet" },
];

const LeisureGallery = () => {
  return (
    <section id="lazer" className="bg-dark px-7 md:px-[60px] py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] items-end mb-[60px]">
        <div>
          <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
            <span className="block w-7 h-px bg-gold" />
            Área de Lazer
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15]">
            Lazer pensado{" "}
            <em className="text-gold italic">para todos</em>
          </h2>
        </div>
        <p className="text-[15px] leading-[1.8] text-cream-70">
          Do adulto à criança, do pet ao home office — o New Vila Ema foi projetado para atender todos os perfis com espaços que transformam o cotidiano.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden cursor-pointer group ${
              item.span ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
            }`}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.07]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/[0.88] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-4 left-4 text-xs font-bold tracking-[1.5px] uppercase text-cream opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeisureGallery;

import minimarketImg from "@/assets/minimarket.jpg";
import petWashImg from "@/assets/pet-wash.jpg";
import coworkingImg from "@/assets/coworking.jpg";
import beautyCareImg from "@/assets/beauty-care.jpg";

const amenities = [
  { img: minimarketImg, title: "Mini Market", sub: "Aberto 24/7" },
  { img: petWashImg, title: "Pet Wash", sub: "Pet Care Completo" },
  { img: coworkingImg, title: "Coworking", sub: "Think Outside The Box" },
  { img: beautyCareImg, title: "Beauty Care", sub: "Seu cuidado começa aqui" },
];

const AmenitiesSection = () => {
  return (
    <section id="amenidades" className="bg-dark3 px-7 md:px-[60px] py-[100px]">
      <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
        <span className="block w-7 h-px bg-gold" />
        Diferenciais exclusivos
      </div>
      <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-14">
        Serviços que{" "}
        <em className="text-gold italic">fazem a diferença</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
        {amenities.map((a) => (
          <div key={a.title} className="relative overflow-hidden aspect-[3/4] group">
            <img
              src={a.img}
              alt={a.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/[0.92] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-[18px]">
              <p className="font-display text-[15px] font-semibold text-cream mb-[3px]">{a.title}</p>
              <p className="text-[11px] text-gold tracking-[1.5px] uppercase">{a.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;

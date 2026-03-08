import petPlaceImg from "@/assets/pet-place.jpg";
import petWashImg from "@/assets/pet-wash.jpg";

const PetSection = () => {
  return (
    <section id="pet" className="bg-dark3 px-7 md:px-[60px] py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
      <div className="grid grid-cols-2 gap-[6px]">
        <img src={petPlaceImg} alt="Pet Place" className="aspect-[4/3] object-cover rounded w-full" loading="lazy" />
        <img src={petWashImg} alt="Pet Wash" className="aspect-[4/3] object-cover rounded w-full" loading="lazy" />
      </div>

      <div>
        <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
          <span className="block w-7 h-px bg-gold" />
          Pet Friendly
        </div>
        <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-[18px]">
          Seu pet também{" "}
          <em className="text-gold italic">merece o melhor</em>
        </h2>
        <p className="text-[15px] leading-[1.8] text-cream-70 max-w-[580px]">
          Com Pet Place ao ar livre com equipamentos de agility e Pet Wash completo, o New Vila Ema é o lar ideal para você e seus companheiros. Aqui, toda a família é bem-vinda.
        </p>
      </div>
    </section>
  );
};

export default PetSection;

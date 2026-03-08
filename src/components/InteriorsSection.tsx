import livingImg from "@/assets/interior-living.jpg";
import bedroomImg from "@/assets/interior-bedroom.jpg";
import kitchenImg from "@/assets/interior-kitchen.jpg";

const InteriorsSection = () => {
  return (
    <section id="interiores" className="bg-dark px-7 md:px-[60px] py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div>
        <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
          <span className="block w-7 h-px bg-gold" />
          Interiores
        </div>
        <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-[18px]">
          Espaços para{" "}
          <em className="text-gold italic">o seu estilo</em>
        </h2>
        <p className="text-[15px] leading-[1.8] text-cream-70 max-w-[580px] mb-8">
          Ambientes modernos e integrados que traduzem o estilo de vida urbano de quem busca conforto e praticidade. Cada detalhe pensado para o seu ritmo.
        </p>
        <a
          href="#contato"
          className="bg-gold text-primary-foreground px-[34px] py-[15px] text-xs font-bold tracking-[1.5px] uppercase no-underline rounded-sm hover:bg-primary-light transition-colors inline-block"
        >
          Solicitar Planta
        </a>
      </div>

      <div className="grid grid-cols-2 gap-[6px]">
        <img src={livingImg} alt="Sala de estar" className="col-span-2 aspect-video object-cover rounded w-full" loading="lazy" />
        <img src={bedroomImg} alt="Quarto" className="aspect-square object-cover rounded w-full" loading="lazy" />
        <img src={kitchenImg} alt="Cozinha" className="aspect-square object-cover rounded w-full" loading="lazy" />
      </div>
    </section>
  );
};

export default InteriorsSection;

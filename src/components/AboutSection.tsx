import heroImg from "@/assets/hero-building.jpg";
import poolImg from "@/assets/pool-area.jpg";

const features = [
{ icon: "🏙️", text: "Região valorizada da Zona Leste" },
{ icon: "🚇", text: "600m da Estação Camilo Haddad" },
{ icon: "🏥", text: "Próximo a hospitais e faculdades" },
{ icon: "🌿", text: "Ambientes modernos e integrados" },
{ icon: "🏠", text: "Apartamentos com terraço" },
{ icon: "⭐", text: "Econ: qualidade e inovação" }];


const AboutSection = () => {
  return (
    <section id="sobre" className="bg-dark2 px-7 md:px-[60px] py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* Images */}
      <div className="relative h-[360px] lg:h-[560px]">
        <img

          alt="Fachada New Vila Ema"
          className="w-[74%] h-full object-cover rounded"
          loading="lazy" src={`${import.meta.env.BASE_URL}lovable-uploads/57bb4b8c-177c-4db0-bd6a-0d768b465b5e.jpg`} />
        
        <img

          alt="Área de lazer"
          className="absolute bottom-0 lg:-bottom-7 right-0 w-[54%] h-[210px] object-cover rounded border-4 border-secondary"
          loading="lazy" src={`${import.meta.env.BASE_URL}lovable-uploads/3b80c365-faef-46e3-8814-77e717ffa266.jpg`} />
        
        <div className="absolute top-11 -left-3 lg:-left-[18px] w-[5px] h-[110px] bg-gold" />
      </div>

      {/* Text */}
      <div>
        <div className="inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[3px] uppercase text-gold mb-[18px]">
          <span className="block w-7 h-px bg-gold" />
          Sobre o Empreendimento
        </div>

        <h2 className="font-display text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] mb-[18px]">
          Um novo jeito{" "}
          <em className="text-gold italic">de viver na Zona Leste</em>
        </h2>

        <p className="text-[15px] leading-[1.8] text-cream-70 max-w-[580px]">
          O New Vila Ema é a oportunidade ideal para sair do aluguel e conquistar o seu espaço, com toda a praticidade que você e sua família merecem. Localizado em Vila Ema, com acesso fácil a metrô, hospitais, faculdades e os principais serviços da região.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-10">
          {features.map((f) =>
          <div
            key={f.text}
            className="flex items-start gap-[11px] p-[14px] bg-gold-subtle/30 border border-gold-subtle/40 rounded-sm">
            
              <span className="text-lg">{f.icon}</span>
              <span className="text-[13px] font-medium text-cream/80 leading-[1.4]">{f.text}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;
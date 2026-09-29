# Vila Ema Living

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Vila Ema | Econ Construtora</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
  :root {
    --gold: #C9A84C;
    --gold-light: #E8C97A;
    --dark: #0E0E12;
    --dark2: #16161C;
    --dark3: #1E1E26;
    --white: #F5F3EE;
    --gray: #9A9A9A;
  }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--dark); color: var(--white); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 60px;
    background: linear-gradient(to bottom, rgba(14,14,18,0.95), transparent);
    backdrop-filter: blur(4px);
    transition: background 0.3s;
  }
  nav.scrolled { background: rgba(14,14,18,0.97); border-bottom: 1px solid rgba(201,168,76,0.15); }
  .nav-logo { font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 3px; color: var(--gold); }
  .nav-logo span { color: var(--white); }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { color: var(--white); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s, color 0.2s; }
  .nav-links a:hover { opacity: 1; color: var(--gold); }
  .nav-cta { background: var(--gold) !important; color: var(--dark) !important; padding: 10px 22px; border-radius: 2px; opacity: 1 !important; font-weight: 700 !important; }
  .nav-cta:hover { background: var(--gold-light) !important; }

  /* HERO */
  .hero { height: 100vh; min-height: 700px; position: relative; display: flex; align-items: flex-end; padding: 0 60px 100px; overflow: hidden; }
  .hero-bg { position: absolute; inset: 0; background: url('IMG_20260222_181753.jpg') center/cover no-repeat; animation: heroZoom 14s ease-out forwards; }
  @keyframes heroZoom { from { transform: scale(1.06); } to { transform: scale(1.0); } }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(14,14,18,0.88) 0%, rgba(14,14,18,0.5) 50%, rgba(14,14,18,0.25) 100%); }
  .hero-content { position: relative; z-index: 2; max-width: 720px; animation: fadeUp 1.2s ease-out 0.3s both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(35px); } to { opacity: 1; transform: translateY(0); } }
  .hero-tag { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; }
  .hero-tag::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }
  .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(54px, 8vw, 100px); font-weight: 900; line-height: 1.0; margin-bottom: 8px; }
  .hero-title em { font-style: italic; color: var(--gold); }
  .hero-sub { font-family: 'Bebas Neue', sans-serif; font-size: clamp(24px, 3.5vw, 48px); letter-spacing: 7px; color: rgba(245,243,238,0.55); margin-bottom: 28px; }
  .hero-desc { font-size: 15px; line-height: 1.75; color: rgba(245,243,238,0.72); max-width: 520px; margin-bottom: 36px; }
  .hero-badges { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
  .badge { background: rgba(201,168,76,0.14); border: 1px solid rgba(201,168,76,0.4); color: var(--gold); padding: 6px 14px; border-radius: 2px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .btn-primary { background: var(--gold); color: var(--dark); padding: 15px 34px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: background 0.25s, transform 0.2s; display: inline-block; }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
  .btn-outline { border: 1px solid rgba(245,243,238,0.4); color: var(--white); padding: 15px 34px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.25s; display: inline-block; }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.08); }
  .scroll-hint { position: absolute; bottom: 36px; right: 60px; display: flex; align-items: center; gap: 12px; font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(245,243,238,0.4); animation: fadeUp 1s ease-out 1.8s both; }
  .scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--gold), transparent); animation: shrink 2.2s ease-in-out infinite; }
  @keyframes shrink { 0%,100%{height:60px} 50%{height:28px} }

  /* STATS */
  .stats { background: var(--dark2); border-top: 1px solid rgba(201,168,76,0.15); border-bottom: 1px solid rgba(201,168,76,0.15); padding: 44px 60px; display: grid; grid-template-columns: repeat(4, 1fr); }
  .stat { text-align: center; padding: 0 24px; border-right: 1px solid rgba(255,255,255,0.07); }
  .stat:last-child { border-right: none; }
  .stat-n { font-family: 'Playfair Display', serif; font-size: 50px; font-weight: 700; color: var(--gold); display: block; line-height: 1; margin-bottom: 8px; }
  .stat-l { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gray); }

  /* SECTIONS */
  section { padding: 100px 60px; }
  .stag { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
  .stag::before { content: ''; display: block; width: 28px; height: 1px; background: var(--gold); }
  .stitle { font-family: 'Playfair Display', serif; font-size: clamp(34px, 4vw, 58px); font-weight: 700; line-height: 1.15; margin-bottom: 18px; }
  .stitle em { color: var(--gold); font-style: italic; }
  .sdesc { font-size: 15px; line-height: 1.8; color: rgba(245,243,238,0.62); max-width: 580px; }

  /* ABOUT */
  #sobre { background: var(--dark2); display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; }
  .about-imgs { position: relative; height: 560px; }
  .about-main { width: 74%; height: 100%; object-fit: cover; border-radius: 4px; display: block; }
  .about-accent { position: absolute; bottom: -28px; right: 0; width: 54%; height: 210px; object-fit: cover; border-radius: 4px; border: 4px solid var(--dark2); }
  .gold-bar { position: absolute; top: 44px; left: -18px; width: 5px; height: 110px; background: var(--gold); }
  .features { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 40px; }
  .feat { display: flex; align-items: flex-start; gap: 11px; padding: 14px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.14); border-radius: 3px; }
  .feat-icon { font-size: 18px; }
  .feat-text { font-size: 13px; font-weight: 500; color: rgba(245,243,238,0.82); line-height: 1.4; }

  /* LAZER GALLERY */
  #lazer { background: var(--dark); }
  .lazer-header { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 60px; }
  .lg { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
  .lc { position: relative; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
  .lc:first-child { grid-column: span 2; aspect-ratio: 16/9; }
  .lc img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; display: block; }
  .lc:hover img { transform: scale(1.07); }
  .lc-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,14,18,0.88) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s; }
  .lc:hover .lc-ov { opacity: 1; }
  .lc-lb { position: absolute; bottom: 16px; left: 16px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: var(--white); text-transform: uppercase; opacity: 0; transform: translateY(8px); transition: all 0.3s; }
  .lc:hover .lc-lb { opacity: 1; transform: translateY(0); }

  /* AMENIDADES */
  #amenidades { background: var(--dark3); }
  .am-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 3px; margin-top: 56px; }
  .am { position: relative; overflow: hidden; aspect-ratio: 3/4; }
  .am img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; display: block; }
  .am:hover img { transform: scale(1.08); }
  .am-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,14,18,0.92) 0%, transparent 52%); }
  .am-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 18px; }
  .am-t { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 600; color: var(--white); margin-bottom: 3px; }
  .am-s { font-size: 11px; color: var(--gold); letter-spacing: 1.5px; text-transform: uppercase; }

  /* PILLS */
  #comodidades { background: var(--dark2); }
  .pills-header { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; margin-bottom: 50px; }
  .pills { display: flex; flex-wrap: wrap; gap: 10px; }
  .pill { display: flex; align-items: center; gap: 9px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); padding: 11px 18px; border-radius: 50px; font-size: 13px; font-weight: 500; color: rgba(245,243,238,0.78); transition: all 0.25s; }
  .pill:hover { background: rgba(201,168,76,0.11); border-color: rgba(201,168,76,0.4); color: var(--gold); }
  .pi { font-size: 15px; }

  /* INTERIOR */
  #interiores { background: var(--dark); display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .int-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .int-big { grid-column: span 2; aspect-ratio: 16/9; object-fit: cover; border-radius: 4px; width: 100%; }
  .int-sm { aspect-ratio: 1; object-fit: cover; border-radius: 4px; width: 100%; }

  /* PET */
  #pet { background: var(--dark3); display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
  .pet-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .pet-img { aspect-ratio: 4/3; object-fit: cover; border-radius: 4px; width: 100%; }

  /* LOCATION */
  #localizacao { background: var(--dark); display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; }
  .loc-pts { display: flex; flex-direction: column; gap: 16px; margin-top: 36px; }
  .lp { display: flex; align-items: flex-start; gap: 14px; padding: 18px; background: rgba(255,255,255,0.03); border-left: 3px solid var(--gold); border-radius: 0 3px 3px 0; }
  .lp-icon { font-size: 20px; }
  .lp-t { font-size: 14px; font-weight: 700; margin-bottom: 3px; }
  .lp-d { font-size: 12px; color: var(--gray); }
  .loc-map { background: var(--dark3); border-radius: 6px; height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid rgba(201,168,76,0.18); position: relative; overflow: hidden; }
  .map-pulse { position: absolute; width: 14px; height: 14px; background: var(--gold); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%); animation: pulse 2.5s ease-out infinite; }
  @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(201,168,76,0.5)} 100%{box-shadow:0 0 0 45px rgba(201,168,76,0)} }
  .map-inner { text-align: center; padding: 20px; position: relative; z-index: 1; }
  .map-icon { font-size: 42px; display: block; margin-bottom: 14px; }
  .map-addr { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; margin-bottom: 6px; }
  .map-city { font-size: 12px; color: var(--gold); letter-spacing: 2.5px; text-transform: uppercase; }

  /* CTA */
  #contato { background: linear-gradient(135deg, var(--dark2), var(--dark3)); text-align: center; padding: 120px 60px; position: relative; overflow: hidden; }
  #contato::before { content: 'NEW'; position: absolute; font-family: 'Bebas Neue', sans-serif; font-size: 420px; color: rgba(201,168,76,0.035); top: 50%; left: 50%; transform: translate(-50%,-50%); white-space: nowrap; pointer-events: none; }
  .cta-title { font-family: 'Playfair Display', serif; font-size: clamp(38px, 5vw, 68px); font-weight: 700; line-height: 1.15; margin-bottom: 18px; position: relative; z-index: 1; }
  .cta-title em { color: var(--gold); font-style: italic; }
  .cta-desc { font-size: 15px; color: rgba(245,243,238,0.62); max-width: 520px; margin: 0 auto 44px; line-height: 1.8; position: relative; z-index: 1; }
  .cta-form { display: flex; max-width: 480px; margin: 0 auto 14px; position: relative; z-index: 1; }
  .cta-form input { flex: 1; background: rgba(255,255,255,0.07); border: 1px solid rgba(201,168,76,0.3); border-right: none; color: var(--white); padding: 15px 18px; font-size: 14px; font-family: 'DM Sans', sans-serif; border-radius: 2px 0 0 2px; outline: none; }
  .cta-form input::placeholder { color: var(--gray); }
  .cta-form input:focus { border-color: var(--gold); }
  .cta-form button { background: var(--gold); color: var(--dark); border: none; padding: 15px 26px; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; border-radius: 0 2px 2px 0; font-family: 'DM Sans', sans-serif; transition: background 0.25s; }
  .cta-form button:hover { background: var(--gold-light); }
  .cta-note { font-size: 11px; color: var(--gray); position: relative; z-index: 1; margin-bottom: 28px; }
  .cta-wa { position: relative; z-index: 1; }

  /* FOOTER */
  footer { background: var(--dark2); border-top: 1px solid rgba(201,168,76,0.12); padding: 60px 60px 28px; }
  .ft { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 50px; margin-bottom: 48px; }
  .fb .nav-logo { font-size: 30px; display: block; margin-bottom: 14px; }
  .fb p { font-size: 13px; color: var(--gray); line-height: 1.7; max-width: 270px; }
  .fc h4 { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
  .fc ul { list-style: none; }
  .fc ul li { margin-bottom: 9px; }
  .fc ul li a { color: var(--gray); text-decoration: none; font-size: 13px; transition: color 0.2s; }
  .fc ul li a:hover { color: var(--white); }
  .fb-bot { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; }
  .fb-copy { font-size: 11px; color: rgba(154,154,154,0.55); }
  .fb-legal { font-size: 10px; color: rgba(154,154,154,0.45); max-width: 380px; text-align: right; line-height: 1.5; }

  /* WA FLOAT */
  .wa { position: fixed; bottom: 28px; right: 28px; z-index: 200; background: #25D366; width: 58px; height: 58px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 26px; box-shadow: 0 6px 28px rgba(37,211,102,0.45); text-decoration: none; animation: waGlow 3s ease-in-out infinite; transition: transform 0.25s; }
  .wa:hover { transform: scale(1.12); }
  @keyframes waGlow { 0%,100%{box-shadow:0 6px 28px rgba(37,211,102,0.45)} 50%{box-shadow:0 8px 40px rgba(37,211,102,0.75)} }

  /* REVEAL */
  .rv { opacity: 0; transform: translateY(38px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .rv.in { opacity: 1; transform: translateY(0); }

  /* RESPONSIVE */
  @media(max-width:1024px){
    nav { padding: 16px 28px; }
    .nav-links { gap: 20px; }
    section { padding: 70px 30px; }
    .hero { padding: 0 30px 80px; }
    .stats { padding: 30px; grid-template-columns: repeat(2,1fr); gap: 0; }
    .stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); padding: 20px 0; }
    #sobre, #localizacao, #interiores, #pet { grid-template-columns: 1fr; gap: 40px; }
    .about-imgs { height: 360px; }
    .lazer-header { grid-template-columns: 1fr; gap: 24px; }
    .am-grid { grid-template-columns: repeat(2,1fr); }
    .ft { grid-template-columns: 1fr 1fr; gap: 36px; }
    .fb-bot { flex-direction: column; gap: 10px; text-align: center; }
    .fb-legal { text-align: center; }
    .pills-header { grid-template-columns: 1fr; }
  }
  @media(max-width:640px){
    .nav-links { display: none; }
    .hero-title { font-size: 42px; }
    .lg { grid-template-columns: 1fr; }
    .lc:first-child { grid-column: span 1; }
    .am-grid { grid-template-columns: 1fr; }
    .stats { grid-template-columns: 1fr 1fr; }
    .ft { grid-template-columns: 1fr; }
    .cta-form { flex-direction: column; }
    .cta-form input, .cta-form button { border-radius: 2px; border: 1px solid rgba(201,168,76,0.3); }
  }






NEW VILA EMA


    

O Empreendimento


    

Lazer


    

Amenidades


    

Localização


    

Quero Saber Mais






    

Econ Construtora · Vila Ema · Zona Leste


    

New
Vila Ema


    

Moderno. Prático. Seu.


    

Apartamentos de 2 dormitórios com terraço e lazer completo em uma das regiões mais valorizadas da Zona Leste. A apenas 600m da Estação Camilo Haddad.


    


      2 Dormitórios
      Terraço
      Lazer Completo
      600m do Metrô
    


    


      Quero Conhecer
      Ver o Lazer
    


    


    Scroll





2Dormitórios

20+Itens de Lazer

600mAté o Metrô

24/7Mini Market






    


    
    


    

Sobre o Empreendimento


    

Um novo jeito
de viver na Zona Leste


    

O New Vila Ema é a oportunidade ideal para sair do aluguel e conquistar o seu espaço, com toda a praticidade que você e sua família merecem. Localizado em Vila Ema, com acesso fácil a metrô, hospitais, faculdades e os principais serviços da região.


    


      

🏙️Região valorizada da Zona Leste


      

🚇600m da Estação Camilo Haddad


      

🏥Próximo a hospitais e faculdades


      

🌿Ambientes modernos e integrados


      

🏠Apartamentos com terraço


      

⭐Econ: qualidade e inovação


    






    


      

Área de Lazer


      

Lazer pensado
para todos


    


    

Do adulto à criança, do pet ao home office — o New Vila Ema foi projetado para atender todos os perfis com espaços que transformam o cotidiano.


    

Piscina Adulto & Infantil


    

Fitness


    

Quadra Recreativa


    

Salão de Jogos


    

Playground


    

Espaço Gourmet






    

Diferenciais exclusivos


    

Serviços que
fazem a diferença


    

Mini Market

Aberto 24/7


    

Pet Wash

Pet Care Completo


    

Coworking

Think Outside The Box


    

Beauty Care

Seu cuidado começa aqui






    


      

Tudo que você precisa


      

Lazer completo
para toda família


    


    

Mais de 20 itens de lazer e serviços criados para o seu conforto, bem-estar e praticidade no dia a dia.


    🏊 Piscina Adulto
    👶 Piscina Infantil
    ☀️ Solário
    🥩 Churrasqueira
    🍕 Forno de Pizza
    🏐 Quadra Recreativa
    🛝 Playground
    🧸 Brinquedoteca
    🐾 Pet Place
    🛁 Pet Wash
    🌳 Praça
    🍽️ Espaço Gourmet
    🎮 Salão de Jogos
    💇 Beauty Care
    🛒 Mini Market 24/7
    💪 Fitness Interno
    🏃 Fitness Externo
    🚲 Bicicletário
    📦 Delivery
    💻 Coworking
    🎉 Salão de Festas






    

Interiores


    

Espaços para
o seu estilo


    

Ambientes modernos e integrados que traduzem o estilo de vida urbano de quem busca conforto e praticidade. Cada detalhe pensado para o seu ritmo.


    Solicitar Planta


    
    
    






    
    


    

Pet Friendly


    

Seu pet também
merece o melhor


    

Com Pet Place ao ar livre com equipamentos de agility e Pet Wash completo, o New Vila Ema é o lar ideal para você e seus companheiros. Aqui, toda a família é bem-vinda.






    

Mais espaços


    

Cada canto pensado
com cuidado


    


      
      


        


          

Brinquedoteca


          

Para as crianças


        


      


    


    


      
      


        


          

Churrasqueira


          

Espaço Gourmet


        


      


    


    


      
      


        


          

Fitness Externo


          

Ao ar livre


        


      


    






    

Localização


    

No coração da
Zona Leste


    

Estrategicamente localizado em Vila Ema, com acesso rápido ao metrô e a todos os serviços essenciais do bairro.


    


      

🚇

Estação Camilo Haddad

Apenas 600 metros — cerca de 8 minutos a pé


      

🚇

Estação Vila Tolstói

Poucos minutos de caminhada


      

🏥

Hospitais e Clínicas

Acesso rápido aos principais serviços de saúde


      

🎓

Faculdades e Escolas

Excelente infraestrutura educacional na região


    


    


    


      📍
      

Vila Ema


      

Zona Leste · São Paulo · SP


      


      Ver no Google Maps
    






    

Fale com a Gente


    

Pronto para conquistar
o seu novo lar?


    

Deixe seu contato e um de nossos especialistas entrará em contato para apresentar todas as condições e oportunidades do New Vila Ema.


    


      
      Quero Saber Mais
    


    

Ao enviar, você concorda em receber informações sobre este empreendimento.


    


      💬 Falar pelo WhatsApp
    






    


      

NEW VILA EMA


      

Um empreendimento Econ Construtora e Incorporadora. Qualidade, inovação e um novo jeito de viver na Zona Leste de São Paulo.


    


    


      

Navegação


      


        

O Empreendimento


        

Área de Lazer


        

Amenidades


        

Localização


        

Contato


      


    


    


      

Lazer


      


        

Piscinas


        

Fitness


        

Quadra


        

Playground


        

Pet Place


        

Ver todos


      


    


    


      

Contato


      


        

WhatsApp


        

(11) 99999-9999


        

econconstrutora.com.br


        @econ.com.br">contato@econ.com.br</a></li>
      
    
  
  


    

© 2026 New Vila Ema · Econ Construtora e Incorporadora. Todos os direitos reservados.


    

Imagens meramente ilustrativas. As perspectivas artísticas têm caráter informativo. Sujeito a alterações sem aviso prévio. Consulte o memorial descritivo.

💬

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/802102c4-f670-454e-8caa-f441e95cd51b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

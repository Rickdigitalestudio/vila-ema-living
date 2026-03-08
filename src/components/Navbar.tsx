import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "O Empreendimento", href: "#sobre" },
    { label: "Lazer", href: "#lazer" },
    { label: "Amenidades", href: "#amenidades" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-7 md:px-[60px] py-4 md:py-5 transition-all duration-300 ${
        scrolled
          ? "bg-background/[0.97] border-b border-gold-faint backdrop-blur-sm"
          : "bg-gradient-to-b from-background/95 to-transparent backdrop-blur-[4px]"
      }`}
    >
      <a href="#" className="font-heading text-[26px] tracking-[3px] text-gold">
        NEW <span className="text-cream">VILA EMA</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex gap-9 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-cream text-xs font-medium tracking-[1.5px] uppercase opacity-70 hover:opacity-100 hover:text-gold transition-all duration-200 no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="bg-gold text-primary-foreground px-[22px] py-[10px] rounded-sm text-xs font-bold tracking-[1.5px] uppercase no-underline hover:bg-primary-light transition-colors"
          >
            Quero Saber Mais
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-cream text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/[0.97] border-b border-gold-faint p-6 flex flex-col gap-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-cream text-sm font-medium tracking-[1.5px] uppercase opacity-80 hover:text-gold transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="bg-gold text-primary-foreground px-5 py-3 rounded-sm text-xs font-bold tracking-[1.5px] uppercase no-underline text-center"
          >
            Quero Saber Mais
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-[200] bg-whatsapp w-[58px] h-[58px] rounded-full flex items-center justify-center text-[26px] no-underline animate-wa-glow hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppFloat;

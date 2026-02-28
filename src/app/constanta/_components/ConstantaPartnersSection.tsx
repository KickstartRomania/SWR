export function ConstantaPartnersSection() {
  const partners = ["Partner 1", "Partner 2", "Partner 3"];

  return (
    <section className="w-full bg-white border-y-[3px] border-foreground py-10 relative overflow-hidden flex flex-col items-center">
      <div className="absolute -top-4 left-4 md:left-10">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-sw-blue opacity-50 rotate-12">
          <path d="M25 5 L28 20 L45 25 L28 30 L25 45 L22 30 L5 25 L22 20 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-4 right-4 md:right-20">
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" className="text-sw-blue-washed rotate-45">
           <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="6" strokeDasharray="4 4" />
        </svg>
      </div>

      <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-6 -rotate-2 relative z-10">
        Our partners
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 px-8 relative z-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white font-bold text-sm">
              {index + 1}
            </div>
            <span className="font-heading font-bold text-2xl md:text-3xl">{partner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

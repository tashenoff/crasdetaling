import { useState, useEffect } from 'react';

export default function Hero() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="top" className="relative text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://avtoshark.com/wp-content/uploads/2020/08/top-krasivyh-mashin-scaled.jpg')",
          filter: "brightness(0.6) contrast(1.2)"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container-custom section-padding min-h-[90vh] flex flex-col justify-center relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-6 uppercase text-xs font-bold tracking-wider">
            Премиум детейлинг
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase">
            Брутальная защита <span className="text-orange-500">вашего автомобиля</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Профессиональная оклейка и детейлинг для тех, кто ценит качество и стиль
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              onClick={(e) => handleScrollToSection(e, 'services')}
              className="btn-primary text-center px-8 py-3 text-lg uppercase tracking-wide"
            >
              Наши услуги
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, 'contact')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold py-3 px-8 rounded text-center text-lg transition-colors uppercase tracking-wide"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for header height
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm shadow-lg shadow-orange-900/20 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <a 
            href="#" 
            onClick={(e) => handleScrollToSection(e, 'top')}
            className="font-bold text-2xl text-orange-500"
          >
            CRAS <span className="text-white">Детейлинг</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#services" 
            onClick={(e) => handleScrollToSection(e, 'services')}
            className="text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm font-medium tracking-wide"
          >
            Услуги
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleScrollToSection(e, 'portfolio')}
            className="text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm font-medium tracking-wide"
          >
            Портфолио
          </a>
          <a 
            href="#process" 
            onClick={(e) => handleScrollToSection(e, 'process')}
            className="text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm font-medium tracking-wide"
          >
            Процесс
          </a>
          <a 
            href="#instagram" 
            onClick={(e) => handleScrollToSection(e, 'instagram')}
            className="text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm font-medium tracking-wide"
          >
            Instagram
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, 'contact')}
            className="text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm font-medium tracking-wide"
          >
            Контакты
          </a>
          <a 
            href="tel:+77075707713" 
            className="flex items-center text-orange-500 hover:text-orange-400 transition-colors ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +7 (707) 570-77-13
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <a 
            href="tel:+77075707713" 
            className="flex items-center text-orange-500 hover:text-orange-400 mr-4"
            aria-label="Позвонить"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          
          <button 
            className="p-2 text-gray-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black pb-4">
          <div className="flex flex-col space-y-3 px-4">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-orange-500 transition-colors py-2 border-b border-gray-800 uppercase text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, 'services')}
            >
              Услуги
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-300 hover:text-orange-500 transition-colors py-2 border-b border-gray-800 uppercase text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, 'portfolio')}
            >
              Портфолио
            </a>
            <a 
              href="#process" 
              className="text-gray-300 hover:text-orange-500 transition-colors py-2 border-b border-gray-800 uppercase text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, 'process')}
            >
              Процесс
            </a>
            <a 
              href="#instagram" 
              className="text-gray-300 hover:text-orange-500 transition-colors py-2 border-b border-gray-800 uppercase text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, 'instagram')}
            >
              Instagram
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-orange-500 transition-colors py-2 border-b border-gray-800 uppercase text-sm font-medium tracking-wide"
              onClick={(e) => handleScrollToSection(e, 'contact')}
            >
              Контакты
            </a>
            <a 
              href="tel:+77075707713" 
              className="flex items-center text-orange-500 hover:text-orange-400 transition-colors py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (707) 570-77-13
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
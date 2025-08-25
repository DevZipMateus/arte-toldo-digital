
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  const navigationItems = useMemo(() => [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Contato', id: 'contato' }
  ], []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-arte-blue-navy text-white py-2 px-2 sm:px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Segunda a sexta 8h às 18h</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Rua Piauí, 5816 - Lagoa, Porto Velho - RO</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <a 
              href="https://wa.me/5569993067833" 
              className="hover:text-arte-blue-light transition-colors text-xs sm:text-sm"
            >
              (69) 99306-7833
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg will-change-transform">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <img 
                src="/lovable-uploads/05e7ad14-3936-4e92-847f-300a1eeb16da.png" 
                alt="Arte Toldo - Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto will-change-transform flex-shrink-0"
              />
              <div className="hidden sm:block min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-arte-blue-royal truncate">
                  Arte Toldo
                </h1>
                <p className="text-xs sm:text-sm text-arte-gray truncate">
                  Um legado em tendas e toldos
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-arte-blue-royal hover:text-arte-blue-light transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="outline"
                size="sm"
                className="border-2 border-arte-blue-royal text-arte-blue-royal bg-white/10 hover:bg-arte-blue-royal hover:text-white font-semibold transition-all hover:scale-105 will-change-transform text-sm lg:text-base px-3 lg:px-4 py-2"
                onClick={() => scrollToSection('contato')}
              >
                Orçamento Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-arte-blue-royal p-1 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t will-change-transform">
            <div className="container mx-auto px-4 py-4 sm:py-6">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-arte-blue-royal font-medium py-2 text-left hover:text-arte-blue-light transition-colors text-base"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-arte-blue-royal text-white hover:bg-arte-blue-navy mt-4 w-full"
                  onClick={() => scrollToSection('contato')}
                >
                  Orçamento Grátis
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;


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
      <div className="bg-arte-blue-navy text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Segunda a sexta 8h às 18h</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Rua Piauí, 5816 - Lagoa, Porto Velho - RO</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a 
              href="https://wa.me/5569993067833" 
              className="hover:text-arte-blue-light transition-colors"
            >
              (69) 99306-7833
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg will-change-transform">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/05e7ad14-3936-4e92-847f-300a1eeb16da.png" 
                alt="Arte Toldo - Logo"
                className="h-12 w-auto will-change-transform"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-arte-blue-royal">
                  Arte Toldo
                </h1>
                <p className="text-sm text-arte-gray">
                  Um legado em tendas e toldos
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-arte-blue-royal hover:text-arte-blue-light transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="outline"
                className="border-2 border-arte-blue-royal text-arte-blue-royal bg-white/10 hover:bg-arte-blue-royal hover:text-white font-semibold transition-all hover:scale-105 will-change-transform"
                onClick={() => scrollToSection('contato')}
              >
                Orçamento Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-arte-blue-royal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t will-change-transform">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-arte-blue-royal font-medium py-2 text-left hover:text-arte-blue-light transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-arte-blue-royal text-white hover:bg-arte-blue-navy mt-4"
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


import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 arte-gradient-primary"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-slide-up">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Mais de 20 anos de experiência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Um legado em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              tendas e toldos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Somos uma empresa séria e responsável com produtos inovadores e tecnológicos. 
            Oferecemos serviço totalmente personalizado para o que você desejar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <Button 
              size="lg"
              className="bg-white text-arte-blue-royal hover:bg-blue-50 font-semibold px-8 py-4 text-lg group transition-all hover:scale-105 arte-shadow-soft"
              onClick={() => scrollToSection('contato')}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-white/60 text-white bg-white/10 hover:bg-white hover:text-arte-blue-royal font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => scrollToSection('produtos')}
            >
              Ver Produtos
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-blue-100 text-sm">Produtos com materiais de primeira qualidade e acabamento perfeito</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-blue-100 text-sm">Nosso consultor vai até você para orçamento sem compromisso</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">20+ Anos</h3>
              <p className="text-blue-100 text-sm">Experiência consolidada no mercado de toldos e coberturas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;

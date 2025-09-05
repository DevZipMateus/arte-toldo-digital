import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Products = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-arte-blue-royal to-arte-blue-navy bg-clip-text text-transparent">
            Nosso Catálogo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra nossa ampla linha de produtos para proteção solar e cobertura. 
            Soluções personalizadas com materiais de alta qualidade e design moderno.
          </p>
        </div>

        {/* Preview das categorias principais */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Toldos Fixos</h3>
            <p className="text-muted-foreground mb-4">
              Soluções permanentes de proteção solar com máxima durabilidade
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              7+ modelos disponíveis
            </span>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Toldos Retráteis</h3>
            <p className="text-muted-foreground mb-4">
              Flexibilidade total com sistemas retráteis de alta qualidade
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              4+ modelos disponíveis
            </span>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Soluções Especiais</h3>
            <p className="text-muted-foreground mb-4">
              Sombrites, tendas, garagens e coberturas personalizadas
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              5+ categorias disponíveis
            </span>
          </Card>
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <div className="bg-arte-gradient-primary rounded-2xl p-12 text-white mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">
              Explore Nosso Catálogo Completo
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-zinc-950">
              Mais de 20 modelos diferentes de toldos, coberturas e soluções de proteção solar. 
              Encontre a opção perfeita para seu projeto.
            </p>
            
            <Link to="/produtos">
              <Button 
                size="lg" 
                className="text-arte-blue-royal font-bold px-8 py-4 bg-white hover:bg-gray-100 text-lg group transition-all duration-300 hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                Veja Nosso Catálogo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Informações adicionais */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">20+</div>
              <div className="text-muted-foreground">Modelos Disponíveis</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">7</div>
              <div className="text-muted-foreground">Categorias de Produtos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">100%</div>
              <div className="text-muted-foreground">Personalizável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
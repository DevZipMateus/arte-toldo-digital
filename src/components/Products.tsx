import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Home, Zap, Droplets, Shield, Star } from 'lucide-react';
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('fixos');
  const categories = [{
    id: 'fixos',
    label: 'Toldos Fixos',
    icon: <Home className="w-4 h-4" />
  }, {
    id: 'retrateis',
    label: 'Toldos Retráteis',
    icon: <Zap className="w-4 h-4" />
  }];
  const productTypes = {
    fixos: [{
      name: 'Lua/Curvo/Reto Fixo/Tampão',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente', 'Policarbonato alveolar 6mm', 'Policarbonato multiclick compacto', 'Policarbonato multiclick alveolar', 'Policarbonato compacto 3mm', 'ACM'],
      icon: <Sun className="w-6 h-6" />,
      description: 'Ideal para proteção solar permanente em varandas, janelas e fachadas.',
      highlight: true
    }, {
      name: 'Europeu',
      materials: ['Lona vinílica', 'Lona acrílica'],
      icon: <Shield className="w-6 h-6" />,
      description: 'Design elegante e moderno, perfeito para ambientes sofisticados.',
      highlight: false
    }, {
      name: 'Passarela',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente', 'Policarbonato alveolar 6mm', 'Policarbonato multiclick compacto', 'Policarbonato multiclick alveolar', 'Policarbonato compacto 3mm', 'ACM'],
      icon: <Home className="w-6 h-6" />,
      description: 'Cobertura para passarelas e corredores, garantindo proteção e conforto.',
      highlight: false
    }, {
      name: 'Francis',
      materials: ['Policarbonato alveolar 6mm', 'Policarbonato multiclick compacto', 'Policarbonato multiclick alveolar', 'Policarbonato compacto 3mm', 'ACM'],
      icon: <Star className="w-6 h-6" />,
      description: 'Modelo premium com design diferenciado e materiais de alta qualidade.',
      highlight: false
    }, {
      name: 'Lona para Piscina',
      materials: ['Lona vinílica'],
      icon: <Droplets className="w-6 h-6" />,
      description: 'Proteção específica para áreas de piscina, resistente à água e sol.',
      highlight: false
    }, {
      name: 'Sombrite',
      materials: ['Lona vinílica', 'Lona de sombreamento 090'],
      icon: <Sun className="w-6 h-6" />,
      description: 'Sombreamento eficiente para grandes áreas externas.',
      highlight: false
    }, {
      name: 'Sombreamento Esticado',
      materials: ['Lona de sombreamento 090'],
      icon: <Sun className="w-6 h-6" />,
      description: 'Sistema de sombreamento tensionado para máxima cobertura.',
      highlight: false
    }, {
      name: 'Pergolado de Alumínio',
      materials: ['Sem cobertura'],
      icon: <Home className="w-6 h-6" />,
      description: 'Estrutura elegante em alumínio para criar ambientes únicos.',
      highlight: false
    }],
    retrateis: [{
      name: 'Cortina',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente', 'Lona Screen', 'Lona Vinílica com Visor'],
      icon: <Zap className="w-6 h-6" />,
      description: 'Toldo retrátil versátil para controle total de sol e privacidade.',
      highlight: true
    }, {
      name: 'Cortina em Alumínio',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente', 'Lona Screen', 'Lona Vinílica com Visor'],
      icon: <Shield className="w-6 h-6" />,
      description: 'Sistema premium em alumínio com durabilidade superior.',
      highlight: true
    }, {
      name: 'Retrátil em Alumínio (3 braços de 2m)',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente'],
      icon: <Star className="w-6 h-6" />,
      description: 'Toldo retrátil com braços articulados para máxima funcionalidade.',
      highlight: false
    }, {
      name: 'Cortina com Braço',
      materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light', 'Plástico 060 transparente'],
      icon: <Zap className="w-6 h-6" />,
      description: 'Sistema com braços laterais para estabilidade e controle preciso.',
      highlight: false
    }, {
      name: 'Retrátil Estrutural',
      materials: ['Policarbonato alveolar 6mm', 'Policarbonato multiclick compacto', 'Policarbonato compacto 3mm', 'ACM'],
      icon: <Home className="w-6 h-6" />,
      description: 'Solução robusta para grandes vãos com materiais estruturais.',
      highlight: false
    }]
  };
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const MaterialBadge = ({
    material
  }: {
    material: string;
  }) => {
    const getVariant = (material: string) => {
      if (material.includes('Policarbonato') || material.includes('ACM')) return 'secondary';
      if (material.includes('Screen') || material.includes('Visor')) return 'default';
      return 'outline';
    };
    return <Badge variant={getVariant(material)} className="text-xs">
        {material}
      </Badge>;
  };
  return <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arte-blue-royal mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-arte-gray max-w-3xl mx-auto">
            Soluções completas em toldos e coberturas com a mais alta qualidade e tecnologia
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            {categories.map(category => <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 data-[state=active]:bg-arte-blue-royal data-[state=active]:text-white">
                {category.icon}
                {category.label}
              </TabsTrigger>)}
          </TabsList>

          {Object.entries(productTypes).map(([categoryId, products]) => <TabsContent key={categoryId} value={categoryId}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-0 arte-shadow-soft ${product.highlight ? 'ring-2 ring-arte-blue-light' : ''}`}>
                    {product.highlight && <div className="absolute -top-3 left-6">
                        <Badge className="bg-arte-blue-royal text-white">
                          Mais Popular
                        </Badge>
                      </div>}
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-arte-blue-royal/10 rounded-full p-3 text-arte-blue-royal">
                        {product.icon}
                      </div>
                      <h3 className="font-bold text-arte-blue-royal text-lg">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-arte-gray mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-arte-blue-royal mb-3">
                        Materiais Disponíveis:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.materials.slice(0, 3).map((material, idx) => <MaterialBadge key={idx} material={material} />)}
                        {product.materials.length > 3 && <Badge variant="outline" className="text-xs">
                            +{product.materials.length - 3} mais
                          </Badge>}
                      </div>
                    </div>

                    <Button className="w-full bg-arte-blue-royal hover:bg-arte-blue-navy text-white" onClick={scrollToContact}>
                      Solicitar Orçamento
                    </Button>
                  </Card>)}
              </div>
            </TabsContent>)}
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-arte-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">
            Não encontrou o que procura?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-zinc-950">
            Oferecemos soluções totalmente personalizadas. Entre em contato conosco 
            e nosso consultor irá até você para apresentar a melhor opção para seu projeto.
          </p>
          <Button size="lg" onClick={scrollToContact} className="text-arte-blue-royal font-semibold px-8 py-4 bg-zinc-400 hover:bg-zinc-300">
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>;
};
export default Products;
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Home, Zap, Droplets, Shield, Star, Building2, Tent, Warehouse, Zap as Solar, Wrench } from 'lucide-react';
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('toldos-fixos');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
  const categories = [
    {
      id: 'toldos-fixos',
      label: 'Toldos Fixos',
      icon: <Home className="w-4 h-4" />
    },
    {
      id: 'toldos-retrateis',
      label: 'Toldos Retráteis',
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: 'sombrites',
      label: 'Sombrites',
      icon: <Sun className="w-4 h-4" />
    },
    {
      id: 'tendas',
      label: 'Tendas',
      icon: <Tent className="w-4 h-4" />
    },
    {
      id: 'garagens-telha',
      label: 'Garagens com Telha',
      icon: <Warehouse className="w-4 h-4" />
    },
    {
      id: 'cobertura-inversor',
      label: 'Cobertura Inversor Solar',
      icon: <Solar className="w-4 h-4" />
    },
    {
      id: 'modelo-francis',
      label: 'Modelo Francis',
      icon: <Wrench className="w-4 h-4" />
    }
  ];
  const productTypes = {
    'toldos-fixos': {
      subcategories: [
        {
          id: 'bola',
          name: 'Bola',
          products: [{
            name: 'Toldo Fixo Bola',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Sun className="w-6 h-6" />,
            description: 'Toldo com formato em bola, ideal para proteção específica.',
            highlight: false
          }]
        },
        {
          id: 'lualona',
          name: 'Lua/Lona',
          products: [{
            name: 'Toldo Lua/Lona',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Home className="w-6 h-6" />,
            description: 'Toldo com formato curvo, proteção elegante e eficiente.',
            highlight: true
          }]
        },
        {
          id: 'fixolona',
          name: 'Fixo/Lona',
          products: [{
            name: 'Toldo Fixo/Lona',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Toldo fixo tradicional com lona, solução versátil.',
            highlight: false
          }]
        },
        {
          id: 'curvolona',
          name: 'Curvo/Lona',
          products: [{
            name: 'Toldo Curvo/Lona',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Sun className="w-6 h-6" />,
            description: 'Toldo com curvatura suave, design moderno e funcional.',
            highlight: false
          }]
        },
        {
          id: 'passarelalona',
          name: 'Passarela/Lona',
          products: [{
            name: 'Passarela com Lona',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Building2 className="w-6 h-6" />,
            description: 'Cobertura para passarelas com lona resistente.',
            highlight: false
          }]
        },
        {
          id: 'retopolicarboneto',
          name: 'Reto Policarbonato',
          products: [{
            name: 'Toldo Reto Policarbonato',
            materials: ['Policarbonato alveolar 6mm', 'Policarbonato compacto 3mm'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Toldo reto com policarbonato, máxima durabilidade.',
            highlight: false
          }]
        },
        {
          id: 'passarelapolicarbon',
          name: 'Passarela Policarbonato',
          products: [{
            name: 'Passarela Policarbonato',
            materials: ['Policarbonato alveolar 6mm', 'Policarbonato compacto 3mm'],
            icon: <Building2 className="w-6 h-6" />,
            description: 'Passarela com cobertura em policarbonato resistente.',
            highlight: false
          }]
        }
      ]
    },
    'toldos-retrateis': {
      subcategories: [
        {
          id: 'sanefa',
          name: 'Sanefa',
          products: [{
            name: 'Toldo Retrátil com Sanefa',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Zap className="w-6 h-6" />,
            description: 'Toldo retrátil com sanefa decorativa.',
            highlight: true
          }]
        },
        {
          id: 'aluminio',
          name: 'Alumínio',
          products: [{
            name: 'Toldo Retrátil em Alumínio',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona Screen'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Sistema premium em alumínio com durabilidade superior.',
            highlight: true
          }]
        },
        {
          id: 'hombrelone',
          name: 'Hombre/Lone',
          products: [{
            name: 'Toldo Hombre/Lone',
            materials: ['Lona vinílica', 'Lona acrílica'],
            icon: <Star className="w-6 h-6" />,
            description: 'Toldo retrátil com design diferenciado.',
            highlight: false
          }]
        },
        {
          id: 'policarboneto',
          name: 'Policarbonato',
          products: [{
            name: 'Toldo Retrátil Policarbonato',
            materials: ['Policarbonato alveolar 6mm', 'Policarbonato compacto 3mm'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Toldo retrátil com cobertura em policarbonato.',
            highlight: false
          }]
        }
      ]
    },
    'sombrites': {
      subcategories: [{
        id: 'geral',
        name: 'Sombrites',
        products: [{
          name: 'Sombrite',
          materials: ['Lona de sombreamento 090', 'Tela de sombreamento'],
          icon: <Sun className="w-6 h-6" />,
          description: 'Sombreamento eficiente para grandes áreas externas.',
          highlight: false
        }]
      }]
    },
    'tendas': {
      subcategories: [{
        id: 'geral',
        name: 'Tendas',
        products: [{
          name: 'Tendas',
          materials: ['Lona vinílica', 'Lona acrílica'],
          icon: <Tent className="w-6 h-6" />,
          description: 'Tendas para eventos e proteção temporária.',
          highlight: false
        }]
      }]
    },
    'garagens-telha': {
      subcategories: [{
        id: 'geral',
        name: 'Garagens com Telha',
        products: [{
          name: 'Garagem com Telha',
          materials: ['Telha metálica', 'Telha fibrocimento'],
          icon: <Warehouse className="w-6 h-6" />,
          description: 'Garagens com cobertura em telha resistente.',
          highlight: false
        }]
      }]
    },
    'cobertura-inversor': {
      subcategories: [{
        id: 'geral',
        name: 'Cobertura para Inversor Solar',
        products: [{
          name: 'Cobertura Inversor Solar',
          materials: ['Policarbonato compacto', 'ACM'],
          icon: <Solar className="w-6 h-6" />,
          description: 'Proteção específica para equipamentos de energia solar.',
          highlight: false
        }]
      }]
    },
    'modelo-francis': {
      subcategories: [{
        id: 'geral',
        name: 'Modelo Francis',
        products: [{
          name: 'Modelo Francis',
          materials: ['Policarbonato alveolar', 'ACM'],
          icon: <Wrench className="w-6 h-6" />,
          description: 'Modelo premium com design diferenciado e materiais de alta qualidade.',
          highlight: false
        }]
      }]
    }
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
          <TabsList className="grid w-full grid-cols-7 max-w-7xl mx-auto mb-12 h-auto">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-arte-blue-royal data-[state=active]:text-white text-xs"
              >
                {category.icon}
                <span className="text-center leading-tight">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(productTypes).map(([categoryId, categoryData]) => (
            <TabsContent key={categoryId} value={categoryId}>
              <div className="space-y-12">
                {categoryData.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="space-y-6">
                    <h3 className="text-2xl font-bold text-arte-blue-royal text-center mb-8">
                      {subcategory.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {subcategory.products.map((product, index) => (
                        <Card 
                          key={index} 
                          className={`p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-0 arte-shadow-soft ${product.highlight ? 'ring-2 ring-arte-blue-light' : ''}`}
                        >
                          {product.highlight && (
                            <div className="absolute -top-3 left-6">
                              <Badge className="bg-arte-blue-royal text-white">
                                Mais Popular
                              </Badge>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-arte-blue-royal/10 rounded-full p-3 text-arte-blue-royal">
                              {product.icon}
                            </div>
                            <h4 className="font-bold text-arte-blue-royal text-lg">
                              {product.name}
                            </h4>
                          </div>

                          <p className="text-arte-gray mb-6 leading-relaxed">
                            {product.description}
                          </p>

                          <div className="mb-6">
                            <h5 className="font-semibold text-arte-blue-royal mb-3">
                              Materiais Disponíveis:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {product.materials.slice(0, 3).map((material, idx) => (
                                <MaterialBadge key={idx} material={material} />
                              ))}
                              {product.materials.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{product.materials.length - 3} mais
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-arte-blue-royal hover:bg-arte-blue-navy text-white" 
                              onClick={scrollToContact}
                            >
                              Solicitar Orçamento
                            </Button>
                            {product.name === 'Toldo Bola' && (
                              <Button 
                                variant="outline"
                                onClick={() => window.location.href = '/produto/toldos-fixos/bola'}
                                className="flex-shrink-0"
                              >
                                Ver Detalhes
                              </Button>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
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
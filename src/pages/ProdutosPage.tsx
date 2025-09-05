import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Home, Shield, Sun, Building2, Tent, Car, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ImageGalleryModal from '@/components/ImageGalleryModal';

const ProdutosPage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se não estiver na página principal, redirecionar
      window.location.href = '/#contato';
    }
  };

  // Função para carregar todas as imagens de uma pasta específica
  const getImagesForSubcategory = (categoryId: string, subcategoryId: string) => {
    if (categoryId === 'toldos-fixos' && subcategoryId === 'bola') {
      // Lista todas as imagens da pasta toldofixo/bola
      const bola_images = [];
      for (let i = 1; i <= 20; i++) {
        // Tenta diferentes extensões e números
        ['jpg', 'jpeg', 'png', 'webp'].forEach(ext => {
          bola_images.push(`/lovable-uploads/toldofixo/bola/image${i}.${ext}`);
          bola_images.push(`/lovable-uploads/toldofixo/bola/bola${i}.${ext}`);
          bola_images.push(`/lovable-uploads/toldofixo/bola/toldo${i}.${ext}`);
          bola_images.push(`/lovable-uploads/toldofixo/bola/${i}.${ext}`);
        });
      }
      
      // Adiciona nomes comuns de arquivo
      const commonNames = [
        'main', 'principal', 'frente', 'lateral', 'detalhe', 'close',
        'vista1', 'vista2', 'vista3', 'foto1', 'foto2', 'foto3',
        'exemplo1', 'exemplo2', 'modelo1', 'modelo2'
      ];
      
      commonNames.forEach(name => {
        ['jpg', 'jpeg', 'png', 'webp'].forEach(ext => {
          bola_images.push(`/lovable-uploads/toldofixo/bola/${name}.${ext}`);
        });
      });
      
      return bola_images;
    }
    return [];
  };

  const MaterialBadge = ({ material }: { material: string }) => {
    const materialTypes: { [key: string]: 'default' | 'secondary' | 'outline' } = {
      'Lona vinílica': 'default',
      'Lona acrílica': 'secondary',
      'Lona poli light': 'outline',
      'Policarbonato alveolar 6mm': 'default',
      'Policarbonato compacto 3mm': 'secondary',
      'Alumínio': 'outline',
      'Aço galvanizado': 'default'
    };

    return (
      <Badge variant={materialTypes[material] || 'outline'} className="text-xs">
        {material}
      </Badge>
    );
  };

  const categories = [
    { id: 'toldos-fixos', label: 'Toldos Fixos', icon: <Home className="w-5 h-5" /> },
    { id: 'toldos-retrateis', label: 'Toldos Retráteis', icon: <Shield className="w-5 h-5" /> },
    { id: 'sombrites', label: 'Sombrites', icon: <Sun className="w-5 h-5" /> },
    { id: 'tendas', label: 'Tendas', icon: <Tent className="w-5 h-5" /> },
    { id: 'garagens-telha', label: 'Garagens com Telha', icon: <Car className="w-5 h-5" /> },
    { id: 'cobertura-inversor', label: 'Cobertura Inversor Solar', icon: <Zap className="w-5 h-5" /> },
    { id: 'modelo-francis', label: 'Modelo Francis', icon: <Star className="w-5 h-5" /> }
  ];

  const productTypes: { [key: string]: any } = {
    'toldos-fixos': {
      title: 'Toldos Fixos',
      description: 'Soluções permanentes de proteção solar com máxima durabilidade.',
      subcategories: [
        {
          id: 'bola',
          name: 'Bola',
          products: [{
            name: 'Toldo Bola',
            materials: ['Lona vinílica', 'Lona acrílica', 'Lona poli light'],
            icon: <Building2 className="w-6 h-6" />,
            description: 'Toldo com design esférico moderno, ideal para áreas comerciais.',
            highlight: true
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
            description: 'Passarela com cobertura de policarbonato resistente.',
            highlight: false
          }]
        }
      ]
    },
    'toldos-retrateis': {
      title: 'Toldos Retráteis',
      description: 'Flexibilidade total com sistemas retráteis de alta qualidade.',
      subcategories: [
        {
          id: 'sanefa',
          name: 'Sanefa',
          products: [{
            name: 'Toldo Retrátil Sanefa',
            materials: ['Lona acrílica', 'Alumínio'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Toldo retrátil com sanefa frontal para maior proteção.',
            highlight: true
          }]
        },
        {
          id: 'aluminio',
          name: 'Alumínio',
          products: [{
            name: 'Toldo Retrátil Alumínio',
            materials: ['Alumínio', 'Lona acrílica'],
            icon: <Home className="w-6 h-6" />,
            description: 'Sistema retrátil em alumínio, leveza e resistência.',
            highlight: false
          }]
        },
        {
          id: 'hombrelone',
          name: 'Hombre/Lone',
          products: [{
            name: 'Toldo Hombre/Lone',
            materials: ['Lona acrílica', 'Estrutura aço'],
            icon: <Sun className="w-6 h-6" />,
            description: 'Toldo retrátil estilo ombrelone, versátil e elegante.',
            highlight: false
          }]
        },
        {
          id: 'policarboneto',
          name: 'Policarbonato',
          products: [{
            name: 'Toldo Retrátil Policarbonato',
            materials: ['Policarbonato alveolar 6mm', 'Alumínio'],
            icon: <Shield className="w-6 h-6" />,
            description: 'Sistema retrátil com policarbonato, máxima proteção.',
            highlight: false
          }]
        }
      ]
    },
    'sombrites': {
      title: 'Sombrites',
      description: 'Telas de sombreamento para jardins e áreas externas.',
      subcategories: [
        {
          id: 'sombrite',
          name: 'Sombrite',
          products: [{
            name: 'Tela Sombrite',
            materials: ['Tela 50%', 'Tela 70%', 'Tela 90%'],
            icon: <Sun className="w-6 h-6" />,
            description: 'Tela de sombreamento em diferentes porcentagens.',
            highlight: true
          }]
        }
      ]
    },
    'tendas': {
      title: 'Tendas',
      description: 'Tendas para eventos e uso temporário.',
      subcategories: [
        {
          id: 'tenda',
          name: 'Tendas',
          products: [{
            name: 'Tenda para Eventos',
            materials: ['Lona vinílica', 'Estrutura alumínio'],
            icon: <Tent className="w-6 h-6" />,
            description: 'Tendas modulares para eventos de todos os tamanhos.',
            highlight: true
          }]
        }
      ]
    },
    'garagens-telha': {
      title: 'Garagens com Telha',
      description: 'Coberturas para garagens com telhas especiais.',
      subcategories: [
        {
          id: 'garagem',
          name: 'Garagem Telha',
          products: [{
            name: 'Cobertura Garagem',
            materials: ['Telha galvanizada', 'Telha cerâmica', 'Telha fibrocimento'],
            icon: <Car className="w-6 h-6" />,
            description: 'Coberturas para garagens com diferentes tipos de telha.',
            highlight: true
          }]
        }
      ]
    },
    'cobertura-inversor': {
      title: 'Cobertura para Inversor Solar',
      description: 'Proteção especializada para equipamentos solares.',
      subcategories: [
        {
          id: 'inversor',
          name: 'Inversor Solar',
          products: [{
            name: 'Cobertura Inversor',
            materials: ['Policarbonato', 'Alumínio', 'Aço galvanizado'],
            icon: <Zap className="w-6 h-6" />,
            description: 'Proteção especializada para inversores de energia solar.',
            highlight: true
          }]
        }
      ]
    },
    'modelo-francis': {
      title: 'Modelo Francis',
      description: 'Modelo exclusivo Francis com design diferenciado.',
      subcategories: [
        {
          id: 'francis',
          name: 'Francis',
          products: [{
            name: 'Modelo Francis',
            materials: ['Lona especial', 'Estrutura premium'],
            icon: <Star className="w-6 h-6" />,
            description: 'Modelo exclusivo com design único e materiais premium.',
            highlight: true
          }]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary font-medium">Catálogo</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Header da página */}
          <div className="text-center mb-12">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-arte-blue-royal to-arte-blue-navy bg-clip-text text-transparent">
              Nosso Catálogo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra nossa ampla linha de produtos para proteção solar e cobertura, 
              desenvolvidos com materiais de alta qualidade e tecnologia de ponta.
            </p>
          </div>

          {/* Tabs de Categorias */}
          <Tabs defaultValue="toldos-fixos" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-2 p-4 text-xs lg:text-sm"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Conteúdo das Categorias */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-arte-blue-royal">
                    {productTypes[category.id]?.title}
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {productTypes[category.id]?.description}
                  </p>
                </div>

                <div className="grid gap-8">
                  {/* Grid 3x3 para subcategorias */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productTypes[category.id]?.subcategories?.map((subcategory: any) => (
                      <div key={subcategory.id} className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold mb-4 text-arte-blue-navy bg-arte-blue-royal/5 py-2 px-4 rounded-lg">
                            {subcategory.name}
                          </h3>
                        </div>
                        
                        {/* Produtos dentro de cada subcategoria */}
                        <div className="space-y-4">
                          {subcategory.products.map((product: any, index: number) => (
                            <Card key={index} className="gruppe-card-hover transition-all duration-300 hover:shadow-lg h-full">
                              <div className="p-4">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-arte-blue-royal/10 rounded-lg flex items-center justify-center text-arte-blue-royal flex-shrink-0">
                                    {product.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="font-bold text-sm text-arte-blue-royal truncate">
                                      {product.name}
                                    </h4>
                                  </div>
                                </div>

                                <p className="text-arte-gray mb-4 leading-relaxed text-sm">
                                  {product.description}
                                </p>


                                <div className="flex gap-2">
                                  <Button 
                                    className="flex-1 bg-arte-blue-royal hover:bg-arte-blue-navy text-white text-sm py-2" 
                                    onClick={scrollToContact}
                                  >
                                    <Phone className="w-3 h-3 mr-2" />
                                    Solicitar Orçamento
                                  </Button>
                                  
                                  {subcategory.id === 'bola' && category.id === 'toldos-fixos' ? (
                                    <ImageGalleryModal
                                      trigger={
                                        <Button 
                                          variant="outline"
                                          className="flex-1 border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white text-sm py-2"
                                        >
                                          Ver Imagens
                                        </Button>
                                      }
                                      title={product.name}
                                      images={getImagesForSubcategory(category.id, subcategory.id)}
                                    />
                                  ) : (
                                    <Button 
                                      variant="outline"
                                      className="flex-1 border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white text-sm py-2"
                                    >
                                      Ver Imagens
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProdutosPage;
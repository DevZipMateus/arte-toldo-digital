import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Home, Shield, Sun, Building2, Tent, Car, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductsSidebar from '@/components/ProductsSidebar';

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
    const baseUrl = '/lovable-uploads/toldofixo/bola/';
    const imagePatterns = [];
    
    // Padrões mais focados baseados nas imagens que existem
    for (let i = 8; i <= 12; i++) {
      const patterns = [
        `${i}.jpg`, `${i}.jpeg`, `${i}.png`, `${i}.webp`,
        `bola${i}.jpg`, `bola${i}.jpeg`, `bola${i}.png`, `bola${i}.webp`,
        `toldo${i}.jpg`, `toldo${i}.jpeg`, `toldo${i}.png`, `toldo${i}.webp`,
        `image${i}.jpg`, `image${i}.jpeg`, `image${i}.png`, `image${i}.webp`
      ];
      imagePatterns.push(...patterns.map(pattern => baseUrl + pattern));
    }
    
    console.log('Generated image patterns:', imagePatterns);
    return imagePatterns;
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
    <Badge 
      variant={materialTypes[material] || 'default'}
      className="text-xs"
    >
      {material}
    </Badge>
  );
};

// Definição das categorias principais
const categories = [
  { id: 'toldos-fixos', label: 'Toldos Fixos', icon: <Home className="w-4 h-4" /> },
  { id: 'toldos-retrateis', label: 'Toldos Retráteis', icon: <Shield className="w-4 h-4" /> },
  { id: 'solucoes-especiais', label: 'Soluções Especiais', icon: <Star className="w-4 h-4" /> }
];

// Definição dos tipos de produtos com subcategorias
const productTypes: { [key: string]: { title: string; description: string; subcategories?: any[] } } = {
  'toldos-fixos': {
    title: 'Toldos Fixos',
    description: 'Soluções permanentes de proteção solar e cobertura para áreas externas.',
    subcategories: [
      {
        id: 'bola',
        name: 'Toldo Bola',
        products: [
          {
            name: 'Toldo Bola Premium',
            materials: ['Lona vinílica', 'Estrutura em alumínio'],
            icon: <Sun className="w-4 h-4" />,
            description: 'Toldo em formato de bola ideal para grandes áreas, oferece máxima proteção solar e resistência ao vento.',
            highlight: true
          },
          {
            name: 'Toldo Bola Compacto',
            materials: ['Lona acrílica', 'Estrutura em aço'],
            icon: <Shield className="w-4 h-4" />,
            description: 'Versão compacta do toldo bola, perfeita para espaços menores mantendo toda a funcionalidade.'
          }
        ]
      },
      {
        id: 'piramidal',
        name: 'Toldo Piramidal',
        products: [
          {
            name: 'Toldo Piramidal Standard',
            materials: ['Lona vinílica', 'Estrutura em alumínio'],
            icon: <Building2 className="w-4 h-4" />,
            description: 'Cobertura em formato piramidal, ideal para pátios e áreas centrais.'
          }
        ]
      }
    ]
  },
  'toldos-retrateis': {
    title: 'Toldos Retráteis',
    description: 'Flexibilidade total com toldos que se adaptam às suas necessidades.'
  },
  'solucoes-especiais': {
    title: 'Soluções Especiais',
    description: 'Projetos customizados para necessidades específicas.'
  }
};

const ProdutosPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const currentCategoryData = productTypes[activeCategory];
  const hasSubcategories = currentCategoryData?.subcategories && currentCategoryData.subcategories.length > 0;

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen bg-background flex w-full">
        <Header />
        
        {hasSubcategories && (
          <ProductsSidebar
            subcategories={currentCategoryData.subcategories}
            categoryId={activeCategory}
            activeSubcategory={activeSubcategory}
            onSubcategorySelect={setActiveSubcategory}
            scrollToContact={scrollToContact}
            getImagesForSubcategory={getImagesForSubcategory}
          />
        )}

        <SidebarInset>
          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="flex items-center gap-4 mb-8">
                {hasSubcategories && <SidebarTrigger />}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link to="/" className="hover:text-arte-blue-royal transition-colors">
                    <Home className="w-4 h-4" />
                  </Link>
                  <span>/</span>
                  <span>Produtos</span>
                </div>
              </div>

              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-arte-blue-navy mb-4">
                  Nosso Catálogo Completo
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Descubra nossa linha completa de toldos e coberturas, cada um desenvolvido 
                  com tecnologia avançada e materiais de alta qualidade.
                </p>
              </div>

              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2 data-[state=active]:bg-arte-blue-royal data-[state=active]:text-white"
                    >
                      {category.icon}
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-arte-blue-navy mb-4">
                        {productTypes[category.id]?.title}
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {productTypes[category.id]?.description}
                      </p>
                    </div>

                    {!hasSubcategories && (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground mb-4">
                          Esta categoria está em desenvolvimento. Em breve você terá acesso aos produtos.
                        </p>
                        <Button onClick={scrollToContact} className="bg-arte-blue-royal hover:bg-arte-blue-navy">
                          <Phone className="w-4 h-4 mr-2" />
                          Entre em contato
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>

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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProdutosPage;
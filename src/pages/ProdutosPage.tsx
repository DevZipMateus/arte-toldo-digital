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
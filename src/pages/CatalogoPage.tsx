import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface ImageData {
  [key: string]: string[];
}

const CatalogoPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Image data com todas as imagens reais das pastas especificadas
  const imageData: ImageData = {
    // Subcategorias de Toldo Fixo - usando imagens das pastas reais
    'toldo-bola': [
      '/lovable-uploads/toldofixo/bola/IMG_3647.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3648.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3649.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3650.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3651.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3652.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3653.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3654.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3655.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3656.jpg',
      '/lovable-uploads/toldofixo/bola/IMG_3657.jpg'
    ],
    'toldo-curvo-lona': [
      '/lovable-uploads/toldofixo/curvolona/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/curvolona/IMG_3452.jpg'
    ],
    'toldo-fixo-lona': [
      '/lovable-uploads/toldofixo/fixolona/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/fixolona/IMG_3452.jpg'
    ],
    'toldo-lua-lona': [
      '/lovable-uploads/toldofixo/lualona/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/lualona/IMG_3452.jpg'
    ],
    'passarela-policarbonato': [
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3452.jpg'
    ],
    'passarela-lona': [
      '/lovable-uploads/toldofixo/passarelalona/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/passarelalona/IMG_3452.jpg'
    ],
    'toldo-reto-policarbonato': [
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3442.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3443.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3444.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3445.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3446.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3447.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3448.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3449.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3450.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3451.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3452.jpg'
    ],
    
    // Subcategorias de Toldo Retrátil - usando imagens das pastas reais
    'aluminio': [
      '/lovable-uploads/toldoretratil/aluminio/IMG_3442.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3443.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3444.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3445.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3446.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3447.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3448.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3449.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3450.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3451.jpg',
      '/lovable-uploads/toldoretratil/aluminio/IMG_3452.jpg'
    ],
    'policarbonato': [
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3442.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3443.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3444.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3445.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3446.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3447.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3448.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3449.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3450.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3451.jpg',
      '/lovable-uploads/toldoretratil/policarboneto/IMG_3452.jpg'
    ],
    'sanefa': [
      '/lovable-uploads/toldoretratil/sanefa/IMG_3442.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3443.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3444.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3445.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3446.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3447.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3448.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3449.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3450.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3451.jpg',
      '/lovable-uploads/toldoretratil/sanefa/IMG_3452.jpg'
    ],

    // Categorias diretas - usando imagens das pastas reais
    'cobertura-inversor-solar': [
      '/lovable-uploads/coberturaparainversorsolar/IMG_3442.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3443.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3444.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3445.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3446.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3447.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3448.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3449.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3450.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3451.jpg',
      '/lovable-uploads/coberturaparainversorsolar/IMG_3452.jpg'
    ],
    'garagem-telhas': [
      '/lovable-uploads/garagenstelha/IMG_3442.jpg',
      '/lovable-uploads/garagenstelha/IMG_3443.jpg',
      '/lovable-uploads/garagenstelha/IMG_3444.jpg',
      '/lovable-uploads/garagenstelha/IMG_3445.jpg',
      '/lovable-uploads/garagenstelha/IMG_3446.jpg',
      '/lovable-uploads/garagenstelha/IMG_3447.jpg',
      '/lovable-uploads/garagenstelha/IMG_3448.jpg',
      '/lovable-uploads/garagenstelha/IMG_3449.jpg',
      '/lovable-uploads/garagenstelha/IMG_3450.jpg',
      '/lovable-uploads/garagenstelha/IMG_3451.jpg',
      '/lovable-uploads/garagenstelha/IMG_3452.jpg'
    ],
    'modelo-francis': [
      '/lovable-uploads/modeloFRANCIS/IMG_3442.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3443.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3444.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3445.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3446.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3447.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3448.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3449.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3450.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3451.jpg',
      '/lovable-uploads/modeloFRANCIS/IMG_3452.jpg'
    ],
    'sombrites': [
      '/lovable-uploads/sombrites/IMG_3442.jpg',
      '/lovable-uploads/sombrites/IMG_3443.jpg',
      '/lovable-uploads/sombrites/IMG_3444.jpg',
      '/lovable-uploads/sombrites/IMG_3445.jpg',
      '/lovable-uploads/sombrites/IMG_3446.jpg',
      '/lovable-uploads/sombrites/IMG_3447.jpg',
      '/lovable-uploads/sombrites/IMG_3448.jpg',
      '/lovable-uploads/sombrites/IMG_3449.jpg',
      '/lovable-uploads/sombrites/IMG_3450.jpg',
      '/lovable-uploads/sombrites/IMG_3451.jpg',
      '/lovable-uploads/sombrites/IMG_3452.jpg'
    ],
    'tendas': [
      '/lovable-uploads/tendas/IMG_3442.jpg',
      '/lovable-uploads/tendas/IMG_3443.jpg',
      '/lovable-uploads/tendas/IMG_3444.jpg',
      '/lovable-uploads/tendas/IMG_3445.jpg',
      '/lovable-uploads/tendas/IMG_3446.jpg',
      '/lovable-uploads/tendas/IMG_3447.jpg',
      '/lovable-uploads/tendas/IMG_3448.jpg',
      '/lovable-uploads/tendas/IMG_3449.jpg',
      '/lovable-uploads/tendas/IMG_3450.jpg',
      '/lovable-uploads/tendas/IMG_3451.jpg',
      '/lovable-uploads/tendas/IMG_3452.jpg'
    ],
  };

  const categories = [
    {
      id: 'toldo-fixo',
      label: 'Toldo Fixo',
      subcategories: [
        { id: 'toldo-bola', label: 'Toldo Bola' },
        { id: 'toldo-curvo-lona', label: 'Toldo Curvo de Lona' },
        { id: 'toldo-fixo-lona', label: 'Toldo Fixo de Lona' },
        { id: 'toldo-lua-lona', label: 'Toldo Lua de Lona' },
        { id: 'passarela-policarbonato', label: 'Passarela Policarbonato' },
        { id: 'passarela-lona', label: 'Passarela Lona' },
        { id: 'toldo-reto-policarbonato', label: 'Toldo Reto Policarbonato' },
      ]
    },
    {
      id: 'toldos-retratil',
      label: 'Toldos Retrátil',
      subcategories: [
        { id: 'aluminio', label: 'Alumínio' },
        { id: 'policarbonato', label: 'Policarbonato' },
        { id: 'sanefa', label: 'Sanefa' },
      ]
    },
    {
      id: 'cobertura-inversor-solar',
      label: 'Cobertura para Inversor Solar',
    },
    {
      id: 'garagem-telhas',
      label: 'Garagem de Telhas',
    },
    {
      id: 'modelo-francis',
      label: 'Modelo FRANCIS',
    },
    {
      id: 'sombrites',
      label: 'Sombrites',
    },
    {
      id: 'tendas',
      label: 'Tendas',
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    
    if (category?.subcategories) {
      // Has subcategories - toggle expansion
      const newExpanded = new Set(expandedCategories);
      if (newExpanded.has(categoryId)) {
        newExpanded.delete(categoryId);
      } else {
        newExpanded.add(categoryId);
      }
      setExpandedCategories(newExpanded);
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      setCurrentImages([]);
    } else {
      // No subcategories - show images directly
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      const images = imageData[categoryId] || [];
      setCurrentImages(images);
      setExpandedCategories(new Set());
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    const images = imageData[subcategoryId] || [];
    setCurrentImages(images);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Nosso Catálogo de Produtos
            </h1>
          </div>

          {/* Catalog Container */}
          <div className="max-w-4xl mx-auto bg-card p-6 rounded-lg shadow-lg">
            {/* Categories List */}
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`w-full flex items-center justify-between p-4 text-left border rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted hover:bg-muted/80 border-border'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    {category.subcategories && (
                      expandedCategories.has(category.id) ? 
                        <ChevronDown className="w-5 h-5" /> : 
                        <ChevronRight className="w-5 h-5" />
                    )}
                  </button>

                  {/* Subcategories */}
                  {category.subcategories && expandedCategories.has(category.id) && (
                    <ul className="mt-2 ml-8 space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.id}>
                          <button
                            onClick={() => handleSubcategoryClick(subcategory.id)}
                            className={`w-full p-3 text-left border rounded-lg transition-all duration-300 ${
                              activeSubcategory === subcategory.id
                                ? 'bg-primary/80 text-primary-foreground border-primary'
                                : 'bg-background hover:bg-muted border-border'
                            }`}
                          >
                            {subcategory.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Image Gallery */}
            {currentImages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentImages.map((imageSrc, index) => (
                    <div key={index} className="group">
                      <img
                        src={imageSrc}
                        alt={`Produto ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/300x200.png?text=Imagem+${index + 1}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CatalogoPage;
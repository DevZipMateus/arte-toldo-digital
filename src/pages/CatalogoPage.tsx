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

  // Image data - replace with actual image URLs
  const imageData: ImageData = {
    // Subcategorias de Toldo Fixo
    'toldo-bola': [
      'https://via.placeholder.com/250x200.png?text=Toldo+Bola+1', 
      'https://via.placeholder.com/250x200.png?text=Toldo+Bola+2'
    ],
    'toldo-curvo-lona': ['https://via.placeholder.com/250x200.png?text=Curvo+Lona+1'],
    'toldo-fixo-lona': [
      'https://via.placeholder.com/250x200.png?text=Fixo+Lona+1', 
      'https://via.placeholder.com/250x200.png?text=Fixo+Lona+2', 
      'https://via.placeholder.com/250x200.png?text=Fixo+Lona+3'
    ],
    'toldo-lua-lona': ['https://via.placeholder.com/250x200.png?text=Lua+Lona+1'],
    'passarela-policarbonato': ['https://via.placeholder.com/250x200.png?text=Passarela+Poli+1'],
    'passarela-lona': ['https://via.placeholder.com/250x200.png?text=Passarela+Lona+1'],
    'toldo-reto-policarbonato': [
      'https://via.placeholder.com/250x200.png?text=Reto+Poli+1', 
      'https://via.placeholder.com/250x200.png?text=Reto+Poli+2'
    ],
    
    // Subcategorias de Toldo Retrátil
    'aluminio': ['https://via.placeholder.com/250x200.png?text=Aluminio+1'],
    'policarbonato': [
      'https://via.placeholder.com/250x200.png?text=Policarbonato+1', 
      'https://via.placeholder.com/250x200.png?text=Policarbonato+2'
    ],
    'sanefa': ['https://via.placeholder.com/250x200.png?text=Sanefa+1'],

    // Categorias diretas (sem subcategoria)
    'cobertura-inversor-solar': [
      'https://via.placeholder.com/250x200.png?text=Inversor+1', 
      'https://via.placeholder.com/250x200.png?text=Inversor+2'
    ],
    'garagem-telhas': ['https://via.placeholder.com/250x200.png?text=Garagem+1'],
    'modelo-francis': [
      'https://via.placeholder.com/250x200.png?text=FRANCIS+1', 
      'https://via.placeholder.com/250x200.png?text=FRANCIS+2'
    ],
    'sombrites': ['https://via.placeholder.com/250x200.png?text=Sombrite+1'],
    'tendas': [
      'https://via.placeholder.com/250x200.png?text=Tenda+1', 
      'https://via.placeholder.com/250x200.png?text=Tenda+2', 
      'https://via.placeholder.com/250x200.png?text=Tenda+3'
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
      setCurrentImages(imageData[categoryId] || []);
      setExpandedCategories(new Set());
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    setCurrentImages(imageData[subcategoryId] || []);
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
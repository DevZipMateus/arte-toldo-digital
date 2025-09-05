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

  // Image data com todas as imagens reais do projeto organizadas por categoria
  const imageData: ImageData = {
    // Subcategorias de Toldo Fixo
    'toldo-bola': [
      '/lovable-uploads/dc3f0fd7-aad9-4157-b947-d267c639fa8e.png',
      '/lovable-uploads/bf55e8e8-a907-413b-a9bd-9983f4256d01.png'
    ],
    'toldo-curvo-lona': [
      '/lovable-uploads/61f9b0be-9f5c-48d6-98e8-c690835899fd.png',
      '/lovable-uploads/aab34821-aa86-4295-b1a9-6e8ec903cfa9.png'
    ],
    'toldo-fixo-lona': [
      '/lovable-uploads/toldofixo/fixolona/IMG_3442.jpg',
      '/lovable-uploads/1b168439-d266-41aa-b91f-f6244876818a.png',
      '/lovable-uploads/fdceb9b1-28bd-4783-acbe-bb44770bd811.png'
    ],
    'toldo-lua-lona': [
      '/lovable-uploads/toldofixo/lualona/IMG_3096.jpg',
      '/lovable-uploads/95aed9f6-52fd-4127-a7dd-d8f5f2f28027.png'
    ],
    'passarela-policarbonato': [
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3031.jpg',
      '/lovable-uploads/beb3b311-57f3-4094-b0c6-da6b697018ce.png',
      '/lovable-uploads/373ca068-3c3e-4738-83d4-06a68db9905d.png'
    ],
    'passarela-lona': [
      '/lovable-uploads/3a4b91a3-6285-4413-b90a-adca7bccf25c.png'
    ],
    'toldo-reto-policarbonato': [
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_2634.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3439.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_4445.jpg',
      '/lovable-uploads/0c874ae6-3d96-4498-970c-4df75e424bd7.png'
    ],
    
    // Subcategorias de Toldo Retrátil
    'aluminio': [
      '/lovable-uploads/f8931bbc-c9bf-4630-bf1f-918b7f077936.png',
      '/lovable-uploads/b57419fb-9f55-4d7b-aac5-3a4714409270.png',
      '/lovable-uploads/b50a47d5-ac2a-4758-a950-83ea9498c293.png'
    ],
    'policarbonato': [
      '/lovable-uploads/6576fd76-e1f1-41f1-b90d-9e80ba9423d7.png',
      '/lovable-uploads/626b025d-4ab9-4ed8-bc5f-56f8ba335441.png'
    ],
    'sanefa': [
      '/lovable-uploads/toldoretratil/sanefa/PHOTO-2022-11-19-11-41-22(1).jpg',
      '/lovable-uploads/toldoretratil/sanefa/PHOTO-2022-11-19-11-41-22(3).jpg',
      '/lovable-uploads/toldoretratil/sanefa/PHOTO-2022-11-19-11-41-22(5).jpg'
    ],

    // Categorias diretas
    'cobertura-inversor-solar': [
      '/lovable-uploads/coberturaparainversorsolar/IMG_3080.jpg'
    ],
    'garagem-telhas': [
      '/lovable-uploads/garagenstelha/IMG_7754.jpg',
      '/lovable-uploads/763c986a-ba23-409b-a5b4-198dc3d8cbd3.png'
    ],
    'modelo-francis': [
      '/lovable-uploads/c6723a03-905d-4365-b5bf-d619e2175619.png'
    ],
    'sombrites': [
      '/lovable-uploads/f8931bbc-c9bf-4630-bf1f-918b7f077936.png'
    ],
    'tendas': [
      '/lovable-uploads/b50a47d5-ac2a-4758-a950-83ea9498c293.png'
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
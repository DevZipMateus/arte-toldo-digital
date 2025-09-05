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

  // Image data com apenas as imagens que realmente existem no projeto
  const imageData: ImageData = {
    // Subcategorias de Toldo Fixo - usando apenas imagens que existem
    'toldo-bola': [
      // Estas imagens não existem ainda, usando placeholder
      'https://via.placeholder.com/300x200.png?text=Toldo+Bola+1',
      'https://via.placeholder.com/300x200.png?text=Toldo+Bola+2'
    ],
    'toldo-curvo-lona': [
      'https://via.placeholder.com/300x200.png?text=Toldo+Curvo+1'
    ],
    'toldo-fixo-lona': [
      // Esta imagem existe no projeto
      '/lovable-uploads/toldofixo/fixolona/IMG_3442.jpg',
      // Placeholder para outras
      'https://via.placeholder.com/300x200.png?text=Toldo+Fixo+2'
    ],
    'toldo-lua-lona': [
      '/lovable-uploads/toldofixo/lualona/IMG_3096.jpg'
    ],
    'passarela-policarbonato': [
      '/lovable-uploads/toldofixo/passarelapolicarbon/IMG_3031.jpg'
    ],
    'passarela-lona': [
      'https://via.placeholder.com/300x200.png?text=Passarela+Lona+1'
    ],
    'toldo-reto-policarbonato': [
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_2634.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_3439.jpg',
      '/lovable-uploads/toldofixo/retopolicarboneto/IMG_4445.jpg'
    ],
    
    // Subcategorias de Toldo Retrátil
    'aluminio': [
      'https://via.placeholder.com/300x200.png?text=Aluminio+1',
      'https://via.placeholder.com/300x200.png?text=Aluminio+2'
    ],
    'policarbonato': [
      'https://via.placeholder.com/300x200.png?text=Policarbonato+1',
      'https://via.placeholder.com/300x200.png?text=Policarbonato+2'
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
      '/lovable-uploads/garagenstelha/IMG_7754.jpg'
    ],
    'modelo-francis': [
      'https://via.placeholder.com/300x200.png?text=Francis+1'
    ],
    'sombrites': [
      'https://via.placeholder.com/300x200.png?text=Sombrite+1'
    ],
    'tendas': [
      'https://via.placeholder.com/300x200.png?text=Tenda+1'
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
    console.log('Categoria clicada:', categoryId);
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
      console.log('Categoria sem subcategorias, mostrando imagens:', imageData[categoryId]);
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      const images = imageData[categoryId] || [];
      console.log('Definindo imagens para categoria:', images);
      setCurrentImages(images);
      setExpandedCategories(new Set());
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    console.log('Subcategoria clicada:', subcategoryId);
    console.log('Imagens disponíveis:', imageData[subcategoryId]);
    setActiveSubcategory(subcategoryId);
    const images = imageData[subcategoryId] || [];
    console.log('Definindo imagens:', images);
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
                          console.log('Erro ao carregar imagem:', imageSrc);
                          target.src = `https://via.placeholder.com/300x200.png?text=Imagem+${index + 1}`;
                        }}
                        onLoad={() => {
                          console.log('Imagem carregada com sucesso:', imageSrc);
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
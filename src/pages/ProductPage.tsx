import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface ProductData {
  name: string;
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  materials: string[];
  images: string[];
  technicalSpecs?: {
    [key: string]: string;
  };
}

const getProductData = (category: string, subcategory: string): ProductData | null => {
  const productDatabase: { [key: string]: { [key: string]: ProductData } } = {
    'toldos-fixos': {
      'bola': {
        name: 'Toldo Fixo Bola',
        category: 'Toldos Fixos',
        subcategory: 'Bola',
        description: 'Toldo fixo com design em formato bola, ideal para proteção solar em áreas comerciais e residenciais. Oferece excelente resistência e durabilidade.',
        features: [
          'Design moderno e elegante',
          'Resistente a intempéries',
          'Fácil manutenção',
          'Proteção UV superior',
          'Estrutura robusta em alumínio'
        ],
        materials: ['Lona PVC', 'Estrutura Alumínio'],
        images: [
          '/lovable-uploads/toldofixo/bola/IMG_8411.jpg',
          // Adicionar mais imagens conforme disponíveis
        ],
        technicalSpecs: {
          'Largura': 'Até 6 metros',
          'Projeção': 'Até 4 metros',
          'Material da Estrutura': 'Alumínio extrudado',
          'Tipo de Lona': 'PVC 650g/m²',
          'Garantia': '2 anos'
        }
      }
    }
  };

  return productDatabase[category]?.[subcategory] || null;
};

const ProductPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  
  if (!category || !subcategory) {
    return <div>Produto não encontrado</div>;
  }

  const product = getProductData(category, subcategory);

  if (!product) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
              <Link to="/#produtos">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar aos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se não estiver na página principal, redirecionar
      window.location.href = '/#contato';
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
              <Link to="/#produtos" className="hover:text-primary">Produtos</Link>
              <span>/</span>
              <span className="text-primary font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Botão Voltar */}
          <div className="mb-6">
            <Link to="/#produtos">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos Produtos
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Galeria de Imagens */}
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="p-0">
                          <img
                            src={image}
                            alt={`${product.name} - Imagem ${index + 1}`}
                            className="w-full h-96 object-cover rounded-lg"
                            onError={(e) => {
                              // Fallback para imagem placeholder se não carregar
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Informações do Produto */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {product.category}
                  </span>
                  <span>•</span>
                  <span>{product.subcategory}</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Características */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materiais Disponíveis */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Materiais Disponíveis</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm border border-secondary/20"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Especificações Técnicas */}
              {product.technicalSpecs && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Especificações Técnicas</h3>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={scrollToContact}
                  className="flex-1 arte-gradient-primary border-0 text-white hover:opacity-90"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Seção de Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Interessado neste produto?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Entre em contato conosco para receber um orçamento personalizado e esclarecer todas as suas dúvidas.
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="arte-gradient-primary border-0 text-white hover:opacity-90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductPage;
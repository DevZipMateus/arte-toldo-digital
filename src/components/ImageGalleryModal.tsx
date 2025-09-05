import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryModalProps {
  trigger: React.ReactNode;
  title: string;
  images: string[];
}

const ImageGalleryModal = ({ trigger, title, images }: ImageGalleryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega e valida as imagens quando o modal abre
  React.useEffect(() => {
    if (isOpen && images.length > 0) {
      setLoading(true);
      const checkImages = async () => {
        const validImageUrls: string[] = [];
        
        for (const imageUrl of images) {
          try {
            const response = await fetch(imageUrl, { method: 'HEAD' });
            if (response.ok) {
              validImageUrls.push(imageUrl);
            }
          } catch (error) {
            // Imagem não existe, ignora
          }
        }
        
        setValidImages(validImageUrls);
        setLoading(false);
        setCurrentImageIndex(0);
      };
      
      checkImages();
    }
  }, [isOpen, images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  if (validImages.length === 0 && !loading) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold text-arte-blue-royal">
            {title} - Galeria de Imagens
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 pt-2">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-arte-blue-royal"></div>
              <span className="ml-2 text-muted-foreground">Carregando imagens...</span>
            </div>
          ) : validImages.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Nenhuma imagem encontrada para este produto.
            </div>
          ) : (
            <>
              <div className="relative w-full h-full max-h-[60vh] flex items-center justify-center">
                <img
                  src={validImages[currentImageIndex]}
                  alt={`${title} - Imagem ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                
                {validImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
              
              {validImages.length > 1 && (
                <div className="flex gap-2 mt-4 max-w-full overflow-x-auto pb-2">
                  {validImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-arte-blue-royal shadow-lg' 
                          : 'border-gray-200 hover:border-arte-blue-royal/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
              
              <div className="text-center mt-4 text-sm text-muted-foreground">
                {validImages.length > 1 && `Imagem ${currentImageIndex + 1} de ${validImages.length}`}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryModal;
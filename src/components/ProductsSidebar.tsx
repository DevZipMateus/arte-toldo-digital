import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import ImageGalleryModal from '@/components/ImageGalleryModal';

interface Product {
  name: string;
  materials: string[];
  icon: React.ReactNode;
  description: string;
  highlight?: boolean;
}

interface Subcategory {
  id: string;
  name: string;
  products: Product[];
}

interface ProductsSidebarProps {
  subcategories: Subcategory[];
  categoryId: string;
  activeSubcategory: string | null;
  onSubcategorySelect: (subcategoryId: string) => void;
  scrollToContact: () => void;
  getImagesForSubcategory: (categoryId: string, subcategoryId: string) => string[];
}

const ProductsSidebar = ({
  subcategories,
  categoryId,
  activeSubcategory,
  onSubcategorySelect,
  scrollToContact,
  getImagesForSubcategory
}: ProductsSidebarProps) => {
  return (
    <Sidebar className="w-80">
      <SidebarHeader>
        <h3 className="text-lg font-semibold text-arte-blue-royal">Subcategorias</h3>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {subcategories.map((subcategory) => (
                <SidebarMenuItem key={subcategory.id}>
                  <SidebarMenuButton
                    isActive={activeSubcategory === subcategory.id}
                    onClick={() => onSubcategorySelect(subcategory.id)}
                    className="w-full justify-start"
                  >
                    {subcategory.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Produtos da subcategoria ativa */}
        {activeSubcategory && (
          <SidebarGroup>
            <SidebarGroupLabel>
              {subcategories.find(sub => sub.id === activeSubcategory)?.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-4 p-2">
                {subcategories
                  .find(sub => sub.id === activeSubcategory)
                  ?.products.map((product, index) => (
                    <Card key={index} className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-arte-blue-royal/10 rounded-lg flex items-center justify-center text-arte-blue-royal flex-shrink-0">
                          {product.icon}
                        </div>
                        <h4 className="font-bold text-sm text-arte-blue-royal">
                          {product.name}
                        </h4>
                      </div>

                      <p className="text-arte-gray mb-3 text-xs leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2">
                        <Button 
                          size="sm"
                          className="w-full bg-arte-blue-royal hover:bg-arte-blue-navy text-white" 
                          onClick={scrollToContact}
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Orçamento
                        </Button>
                        
                        {activeSubcategory === 'bola' && categoryId === 'toldos-fixos' ? (
                          <ImageGalleryModal
                            trigger={
                              <Button 
                                size="sm"
                                variant="outline"
                                className="w-full border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white"
                              >
                                Ver Imagens
                              </Button>
                            }
                            title={product.name}
                            images={getImagesForSubcategory(categoryId, activeSubcategory)}
                          />
                        ) : (
                          <Button 
                            size="sm"
                            variant="outline"
                            className="w-full border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white"
                          >
                            Ver Imagens
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default ProductsSidebar;
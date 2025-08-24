import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import MenuFilter from '@/components/menu/MenuFilter';
import MenuCard from '@/components/menu/MenuCard';
import CartSidebar from '@/components/menu/CartSidebar';
import menuData from '@/data/menu.json';

const Menu = () => {
  const { t, language } = useLanguage();
  const { cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredDishes, setFilteredDishes] = useState(menuData.dishes);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredDishes(menuData.dishes);
    } else {
      setFilteredDishes(menuData.dishes.filter(dish => dish.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('menu')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover our exquisite collection of authentic dishes crafted with love and tradition'
              : 'அன்பு மற்றும் பாரம்பரியத்துடன் தயாரிக்கப்பட்ட எங்கள் உண்மையான உணவுகளின் அருமையான தொகுப்பைக் கண்டறியவும்'
            }
          </p>
        </motion.div>

        <MenuFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredDishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>

        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed bottom-6 right-6 z-30"
          >
            <Button
              onClick={() => setIsCartOpen(true)}
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {cartCount}
            </Button>
          </motion.div>
        )}

        <CartSidebar 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </div>
  );
};

export default Menu;
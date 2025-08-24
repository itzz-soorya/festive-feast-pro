import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface MenuCardProps {
  dish: {
    id: string;
    name: {
      en: string;
      ta: string;
    };
    category: string;
    image: string;
    description: {
      en: string;
      ta: string;
    };
  };
}

const MenuCard = ({ dish }: MenuCardProps) => {
  const { language } = useLanguage();
  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some(item => item.id === dish.id);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'veg':
        return 'bg-green-500 text-white';
      case 'non-veg':
        return 'bg-red-500 text-white';
      case 'sweets':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      veg: { en: 'Vegetarian', ta: 'சைவம்' },
      'non-veg': { en: 'Non-Veg', ta: 'அசைவம்' },
      sweets: { en: 'Sweets', ta: 'இனிப்புகள்' }
    };
    return labels[category as keyof typeof labels]?.[language] || category;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden shadow-elegant hover:shadow-primary/20 transition-all duration-300">
        <div className="relative">
          <img
            src={dish.image}
            alt={dish.name[language]}
            className="w-full h-48 object-cover"
          />
          <Badge className={`absolute top-2 right-2 ${getCategoryColor(dish.category)}`}>
            {getCategoryLabel(dish.category)}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
            {dish.name[language]}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {dish.description[language]}
          </p>
          <Button
            onClick={() => addToCart(dish)}
            disabled={isInCart}
            className="w-full"
            variant={isInCart ? "outline" : "default"}
          >
            {isInCart 
              ? (language === 'en' ? 'Added to Cart' : 'கார்ட்டில் சேர்க்கப்பட்டது')
              : (language === 'en' ? 'Add to Cart' : 'கார்ட்டில் சேர்க்கவும்')
            }
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MenuCard;
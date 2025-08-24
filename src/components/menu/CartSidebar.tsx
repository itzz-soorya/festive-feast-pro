import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleProceedToContact = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-xl z-50"
          >
            <Card className="h-full rounded-none border-0">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    {language === 'en' ? 'Your Cart' : 'உங்கள் கார்ட்'}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center text-muted-foreground mt-8">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>{language === 'en' ? 'Your cart is empty' : 'உங்கள் கார்ட் காலியாக உள்ளது'}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                        <div>
                          <h4 className="font-medium text-sm">{item.name[language]}</h4>
                          <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="space-y-2 pt-4 border-t">
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full"
                      >
                        {language === 'en' ? 'Clear Cart' : 'கார்ட்டை அழிக்கவும்'}
                      </Button>
                      <Button
                        onClick={handleProceedToContact}
                        className="w-full"
                      >
                        {language === 'en' ? 'Proceed to Contact' : 'தொடர்பு பக்கத்திற்கு செல்லவும்'}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Menu = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('menu')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite collection of authentic dishes crafted with love and tradition
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-12 shadow-elegant">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Menu Coming Soon
            </h2>
            <p className="text-muted-foreground">
              We're preparing our beautiful menu showcase with dishes, categories, and interactive features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
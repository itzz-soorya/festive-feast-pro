import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Reviews = () => {
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
            {t('reviews')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read what our satisfied customers have to say about their dining experiences
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-12 shadow-elegant">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Reviews Coming Soon
            </h2>
            <p className="text-muted-foreground">
              We're setting up our customer review system to showcase testimonials and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
import { motion } from 'framer-motion';
import { Heart, PartyPopper, Building, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const EventCategories = () => {
  const { t } = useLanguage();

  const categories = [
    {
      key: 'weddings',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      description: 'Elegant wedding catering with traditional and modern cuisine'
    },
    {
      key: 'parties',
      icon: PartyPopper,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Fun party catering for birthdays, anniversaries and celebrations'
    },
    {
      key: 'corporate',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Professional corporate catering for meetings and events'
    },
    {
      key: 'special',
      icon: Star,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      description: 'Customized catering for your special occasions'
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('eventCategoriesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever the occasion, we bring culinary excellence to your special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-elegant transition-all duration-300 text-center h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {t(category.key)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-0.5 bg-gradient-maroon mx-auto"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to create an unforgettable dining experience?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-festive text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-elegant hover:shadow-gold transition-all duration-300"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
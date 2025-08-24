import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      value: '10+',
      label: t('yearsExperience'),
      color: 'text-primary'
    },
    {
      icon: Users,
      value: '3000+',
      label: t('eventsCompleted'),
      color: 'text-secondary'
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Customer Satisfaction',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('aboutTitle')}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutText')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-card shadow-lg hover:shadow-elegant transition-all duration-300"
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="font-heading text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <div className="aspect-square bg-gradient-festive flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="font-heading text-2xl font-bold mb-4">Our Kitchen</div>
                  <p className="text-primary-foreground/80">
                    Where tradition meets innovation in every dish we create
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
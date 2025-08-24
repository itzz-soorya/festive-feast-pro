import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import galleryData from '@/data/gallery.json';

const Gallery = () => {
  const { t, language } = useLanguage();

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'wedding':
        return 'bg-pink-500 text-white';
      case 'corporate':
        return 'bg-blue-500 text-white';
      case 'party':
        return 'bg-purple-500 text-white';
      case 'special':
        return 'bg-green-500 text-white';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

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
            {t('gallery')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Explore our portfolio of successful events and memorable dining experiences'
              : 'எங்கள் வெற்றிகரமான நிகழ்வுகள் மற்றும் மறக்கமுடியாத உணவு அனுபவங்களின் போர்ட்ஃபோலியோவை ஆராயுங்கள்'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden shadow-elegant hover:shadow-primary/20 transition-all duration-300">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.caption[language]}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getEventTypeColor(event.eventType)}`}>
                    {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {event.caption[language]}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
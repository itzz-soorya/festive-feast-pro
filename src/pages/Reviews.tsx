import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import reviewsData from '@/data/reviews.json';

const Reviews = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    feedback: '',
    eventType: 'party'
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    toast({
      title: language === 'en' ? "Review Submitted!" : "மதிப்பாய்வு சமர்ப்பிக்கப்பட்டது!",
      description: language === 'en' 
        ? "Thank you for your feedback. It will be reviewed before publishing."
        : "உங்கள் கருத்துக்கு நன்றி. வெளியிடும் முன் இது மதிப்பாய்வு செய்யப்படும்.",
    });
    setNewReview({ name: '', rating: 5, feedback: '', eventType: 'party' });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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
            {t('reviews')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Read what our satisfied customers have to say about their dining experiences'
              : 'எங்கள் திருப்தியான வாடிக்கையாளர்கள் தங்கள் உணவு அனுபவங்களைப் பற்றி என்ன சொல்கிறார்கள் என்பதைப் படியுங்கள்'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {reviewsData.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-elegant hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <Badge className={getEventTypeColor(review.eventType)}>
                      {review.eventType.charAt(0).toUpperCase() + review.eventType.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {review.feedback[language]}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardHeader>
              <h2 className="font-heading text-2xl font-bold text-foreground text-center">
                {language === 'en' ? 'Leave a Review' : 'ஒரு மதிப்பாய்வை விடுங்கள்'}
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <Input
                  placeholder={language === 'en' ? 'Your Name' : 'உங்கள் பெயர்'}
                  value={newReview.name}
                  onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Rating' : 'மதிப்பீடு'}
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      >
                        <Star
                          className={`h-6 w-6 cursor-pointer ${
                            star <= newReview.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder={language === 'en' ? 'Your feedback...' : 'உங்கள் கருத்து...'}
                  value={newReview.feedback}
                  onChange={(e) => setNewReview(prev => ({ ...prev, feedback: e.target.value }))}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Submit Review' : 'மதிப்பாய்வு சமர்ப்பிக்கவும்'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
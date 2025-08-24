import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [booking, setBooking] = useState({
    name: '',
    contact: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const eventTypes = [
    { value: 'wedding', label: { en: 'Wedding', ta: 'திருமணம்' } },
    { value: 'party', label: { en: 'Birthday Party', ta: 'பிறந்தநாள் விழா' } },
    { value: 'corporate', label: { en: 'Corporate Event', ta: 'நிறுவன நிகழ்வு' } },
    { value: 'special', label: { en: 'Special Occasion', ta: 'சிறப்பு நிகழ்வு' } }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend/JSON file
    const newBooking = {
      ...booking,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    // Log booking in development mode only
    if (import.meta.env.DEV) {
      console.log('New booking:', newBooking);
    }
    
    toast({
      title: language === 'en' ? "Booking Submitted!" : "முன்பதிவு சமர்ப்பிக்கப்பட்டது!",
      description: language === 'en' 
        ? "We'll contact you within 24 hours to confirm your booking."
        : "உங்கள் முன்பதிவை உறுதிப்படுத்த 24 மணி நேரத்திற்குள் நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.",
    });
    
    setBooking({
      name: '',
      contact: '',
      email: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('booking')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Book your perfect catering experience with us for any occasion'
              : 'எந்தவொரு நிகழ்வுக்கும் எங்களுடன் உங்கள் சரியான கேட்டரிங் அனுபவத்தை முன்பதிவு செய்யுங்கள்'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-center">
                {language === 'en' ? 'Book Your Event' : 'உங்கள் நிகழ்வை முன்பதிவு செய்யுங்கள்'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Full Name' : 'முழு பெயர்'} *
                    </label>
                    <Input
                      placeholder={language === 'en' ? 'Enter your name' : 'உங்கள் பெயரை உள்ளிடவும்'}
                      value={booking.name}
                      onChange={(e) => setBooking(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Contact Number' : 'தொடர்பு எண்'} *
                    </label>
                    <Input
                      type="tel"
                      placeholder={language === 'en' ? 'Phone number' : 'தொலைபேசி எண்'}
                      value={booking.contact}
                      onChange={(e) => setBooking(prev => ({ ...prev, contact: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Email Address' : 'மின்னஞ்சல் முகவரி'}
                  </label>
                  <Input
                    type="email"
                    placeholder={language === 'en' ? 'your@email.com' : 'உங்கள்@மின்னஞ்சல்.com'}
                    value={booking.email}
                    onChange={(e) => setBooking(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Event Type' : 'நிகழ்வு வகை'} *
                    </label>
                    <Select
                      value={booking.eventType}
                      onValueChange={(value) => setBooking(prev => ({ ...prev, eventType: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Select event type' : 'நிகழ்வு வகையைத் தேர்ந்தெடுக்கவும்'} />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label[language]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'en' ? 'Event Date' : 'நிகழ்வு தேதி'} *
                    </label>
                    <Input
                      type="date"
                      value={booking.eventDate}
                      onChange={(e) => setBooking(prev => ({ ...prev, eventDate: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Expected Guest Count' : 'எதிர்பார்க்கப்படும் விருந்தினர் எண்ணிக்கை'}
                  </label>
                  <Input
                    type="number"
                    placeholder={language === 'en' ? 'Number of guests' : 'விருந்தினர்களின் எண்ணிக்கை'}
                    value={booking.guestCount}
                    onChange={(e) => setBooking(prev => ({ ...prev, guestCount: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Special Requirements' : 'சிறப்பு தேவைகள்'}
                  </label>
                  <Textarea
                    placeholder={language === 'en' 
                      ? 'Tell us about your preferences, dietary requirements, or any special requests...'
                      : 'உங்கள் விருப்பங்கள், உணவு தேவைகள் அல்லது ஏதேனும் சிறப்பு கோரிக்கைகள் பற்றி எங்களுக்குச் சொல்லுங்கள்...'
                    }
                    value={booking.message}
                    onChange={(e) => setBooking(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Submit Booking Request' : 'முன்பதிவு கோரிக்கையை சமர்ப்பிக்கவும்'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span className="text-sm">
              {language === 'en' ? '24/7 Support' : '24/7 ஆதரவு'}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {language === 'en' ? 'Quick Response' : 'விரைவான பதில்'}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span className="text-sm">
              {language === 'en' ? 'Free Consultation' : 'இலவச ஆலோசனை'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
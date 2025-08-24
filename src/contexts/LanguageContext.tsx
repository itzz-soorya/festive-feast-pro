import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    gallery: 'Gallery',
    reviews: 'Reviews',
    booking: 'Booking',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Delicious Catering for Every Occasion',
    heroSubtitle: 'Creating memorable dining experiences with authentic flavors and exceptional service',
    bookNow: 'Book Now',
    
    // About Section
    aboutTitle: 'Our Story',
    aboutText: "With over 10 years of passion for authentic cuisine, we've been creating unforgettable dining experiences for families and businesses. From traditional Tamil recipes passed down through generations to modern fusion dishes, we cater to every taste and occasion.",
    yearsExperience: '10+ Years Experience',
    eventsCompleted: '3000+ Events Completed',
    
    // Event Categories
    eventCategoriesTitle: 'Our Catering Services',
    weddings: 'Weddings',
    parties: 'Parties', 
    corporate: 'Corporate Events',
    special: 'Special Occasions',
    
    // Footer
    quickEnquiry: 'Quick Enquiry',
    followUs: 'Follow Us',
  },
  ta: {
    // Navigation
    home: 'முகப்பு',
    menu: 'உணவு பட்டியல்',
    gallery: 'படத்தொகுப்பு',
    reviews: 'விமர்சனங்கள்',
    booking: 'முன்பதிவு',
    contact: 'தொடர்பு',
    
    // Hero Section
    heroTitle: 'ஒவ்வொரு நிகழ்வுக்கும் சுவையான கேட்டரிங்',
    heroSubtitle: 'உண்மையான சுவைகள் மற்றும் சிறந்த சேவையுடன் மறக்கமுடியாத உணவு அனுபவங்களை உருவாக்குகிறோம்',
    bookNow: 'இப்போது முன்பதிவு செய்க',
    
    // About Section
    aboutTitle: 'எங்கள் கதை',
    aboutText: "10 ஆண்டுகளுக்கும் மேலாக உண்மையான உணவு வகைகளில் ஆர்வத்துடன், நாங்கள் குடும்பங்கள் மற்றும் வணிகங்களுக்கு மறக்கமுடியாத உணவு அனுபவங்களை உருவாக்கி வருகிறோம். தலைமுறைகளாக வழங்கப்பட்ட பாரம்பரிய தமிழ் சமையல் குறிப்புகள் முதல் நவீன கலவை உணவுகள் வரை, நாங்கள் ஒவ்வொரு சுவைக்கும் மற்றும் நிகழ்வுக்கும் கேட்டரிங் செய்கிறோம்.",
    yearsExperience: '10+ ஆண்டுகள் அனுபவம்',
    eventsCompleted: '3000+ நிகழ்வுகள் நிறைவு',
    
    // Event Categories
    eventCategoriesTitle: 'எங்கள் கேட்டரிங் சேவைகள்',
    weddings: 'திருமணங்கள்',
    parties: 'விழாக்கள்',
    corporate: 'நிறுவன நிகழ்வுகள்',
    special: 'சிறப்பு நிகழ்வுகள்',
    
    // Footer
    quickEnquiry: 'விரைவு விசாரணை',
    followUs: 'எங்களை பின்தொடரவும்',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
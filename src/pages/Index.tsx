import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { EventCategories } from '@/components/home/EventCategories';

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <EventCategories />
    </div>
  );
};

export default Index;

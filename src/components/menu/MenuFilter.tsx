import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuFilter = ({ selectedCategory, onCategoryChange }: MenuFilterProps) => {
  const { t } = useLanguage();

  const categories = [
    { key: 'all', label: { en: 'All', ta: 'அனைத்தும்' } },
    { key: 'veg', label: { en: 'Vegetarian', ta: 'சைவம்' } },
    { key: 'non-veg', label: { en: 'Non-Vegetarian', ta: 'அசைவம்' } },
    { key: 'sweets', label: { en: 'Sweets', ta: 'இனிப்புகள்' } }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.key}
          variant={selectedCategory === category.key ? "default" : "outline"}
          onClick={() => onCategoryChange(category.key)}
          className="px-6 py-2"
        >
          {category.label.en}
        </Button>
      ))}
    </div>
  );
};

export default MenuFilter;
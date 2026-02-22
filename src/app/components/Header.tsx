import { Link } from 'react-router';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'hu', label: 'HU' },
    { code: 'ro', label: 'RO' },
    { code: 'en', label: 'EN' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <ImageWithFallback
                  src="/pro-special.png"
                  alt="Pro Special logo"
                  className="w-1/6 h-1/6 object-cover"
             />
            <span className="text-xl font-bold text-gray-900">Pro Special</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {getTranslation(language, 'home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {getTranslation(language, 'about')}
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {getTranslation(language, 'programs')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {getTranslation(language, 'contact')}
            </button>

            <div className="flex gap-2 ml-4 border-l pl-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    language === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              {getTranslation(language, 'home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              {getTranslation(language, 'about')}
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              {getTranslation(language, 'programs')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              {getTranslation(language, 'contact')}
            </button>

            <div className="flex gap-2 pt-4 border-t">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    language === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

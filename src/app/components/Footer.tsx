import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">Pro Special</span>
            </div>
            <p className="text-gray-400">
              {language === 'hu' && 'Közösséget építünk speciális szükségletű gyerekek és családjaik számára.'}
              {language === 'ro' && 'Construim comunitate pentru copiii cu nevoi speciale și familiile lor.'}
              {language === 'en' && 'Building community for children with special needs and their families.'}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, 'contact')}</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@prospecial.org
              </p>
              <p>+40 XXX XXX XXX</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, 'followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Pro Special Egyesület. {getTranslation(language, 'allRightsReserved')}</p>
          <p>Website: <a href="mailto:info@map4.me">Szabó Tímea</a></p>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageWithFallback
                  src="/pro-special.png"
                  alt="Pro Special logo"
                  className="w-1/6 h-1/6 object-cover"
                />
              <span className="text-xl font-bold">Pro Special</span>
            </div>
            <p className="text-gray-200">
              {language === 'hu' && 'Pro Special Egyesület'}
              {language === 'ro' && 'Asociația Pro Special'}
              {language === 'en' && 'Pro Special Association'}
              {/*
              {language === 'hu' && 'Közösséget építünk speciális szükségletű gyerekek és családjaik számára.'}
              {language === 'ro' && 'Construim comunitate pentru copiii cu nevoi speciale și familiile lor.'}
              {language === 'en' && 'Building community for children with special needs and their families.'}
              */}
            </p>
            <p className="text-gray-200">
              {language === 'hu' && 'Adószám: 41138680'}
              {language === 'ro' && 'CIF: 41138680'}
              {language === 'en' && 'TIN: 41138680'}
            </p>
            <p className="text-gray-200">IBAN: RO27RZBR0000060021117292</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, 'contact')}</h3>
            <div className="space-y-2 text-gray-200">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@prospecial.org
              </p>
              <p>+40 XXX XXX XXX</p>
              <p>
                {language === 'hu' && '525400 Kézdivásárhely, Barompiac utca 8.'}
                {language === 'ro' && '525400 Mun. Târgu Secuiesc, str. Oborului, nr. 8'}
                {language === 'en' && 'RO-525400 Mun. Târgu Secuiesc, str. Oborului, nr. 8'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, 'followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/prospecial.org"
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

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-200">
          <p>© {currentYear} Pro Special Egyesület. {getTranslation(language, 'allRightsReserved')}</p>
          <p>Website: <a href="mailto:info@map4.me">Szabó Tímea</a></p>
        </div>
      </div>
    </footer>
  );
}

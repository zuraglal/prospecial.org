import { Heart, Users, Calendar, Tent } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  const { language } = useLanguage();

  const programs = [
    {
      icon: Calendar,
      titleKey: 'weeklyTitle' as const,
      descKey: 'weeklyDesc' as const,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      titleKey: 'eventsTitle' as const,
      descKey: 'eventsDesc' as const,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Tent,
      titleKey: 'campsTitle' as const,
      descKey: 'campsDesc' as const,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      titleKey: 'siblingsTitle' as const,
      descKey: 'siblingsDesc' as const,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Donation Section */}
      <section id="donation" className="bg-gradient-to-br from-indigo-300 to-purple-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getTranslation(language, 'donationTitle')}
              </h2>
              <p className="text-xl lg:text-2xl text-indigo-600 mb-6">
                {getTranslation(language, 'donationSubtitle')}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {getTranslation(language, 'donationDescription')}
              </p>
              <button
                onClick={() => {
                  window.location.href = "https://formular230.ro/asociatia-pro-special";
                }}
                className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {getTranslation(language, 'donateLink')}
              </button>
            </div>
    
            <div className="text-center mb-16 relative">
              <div> {/* className="rounded-2xl shadow-lg">*/}
                <a href="/pro-special-anaf-230-2025.pdf">
                <ImageWithFallback
                  src="/pro-special-anaf-230-2025.jpg"
                  alt="ANAF 230 3,5%"
                  className="w-2/3 h-auto object-cover"
                />
                </a>
              </div>

              <div>
                <button
                  onClick={() => {
                  window.location.href = "pro-special-anaf-230-2025.pdf";
                }}
                  className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                  {getTranslation(language, 'donatePDF')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(language, 'heroTitle')}
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-600 mb-6">
                {getTranslation(language, 'heroSubtitle')}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {getTranslation(language, 'heroDescription')}
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {getTranslation(language, 'learnMore')}
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/2024-05-11-egymasert-egyutt.jpg"
                  alt="Kirándulás"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'aboutTitle')}
            </h2>
            <p className="text-xl text-indigo-600">
              {getTranslation(language, 'aboutSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                {getTranslation(language, 'aboutText1')}
              </p>
              <p className="text-lg text-gray-700">
                {getTranslation(language, 'aboutText2')}
              </p>
              <p className="text-lg text-gray-700">
                {getTranslation(language, 'aboutText3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/2023-09-30-szlanikfurdo.jpg"
                  alt="Szlanikfürdőn a csapat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg mt-8">
                <ImageWithFallback
                  src="/2024-09-16-meseterapia.jpg"
                  alt="Meseterápiás kör"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'programsTitle')}
            </h2>
            <p className="text-xl text-indigo-600">
              {getTranslation(language, 'programsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {getTranslation(language, program.titleKey)}
                  </h3>
                  <p className="text-gray-700">
                    {getTranslation(language, program.descKey)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/2025-09-28-fustolgo-asztfalt.jpg"
              alt="7. Füstölgő aszfalt mini paralimpia"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'contactTitle')}
            </h2>
            <p className="text-xl text-indigo-600 mb-6">
              {getTranslation(language, 'contactSubtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {getTranslation(language, 'contactText')}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'emailLabel')}
                </h3>
                <a
                  href="mailto:info@prospecial.org"
                  className="text-blue-600 hover:text-blue-700 text-lg"
                >
                  info@prospecial.org
                </a>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'phoneLabel')}
                </h3>
                <a
                  href="tel:+40xxxxxxxxx"
                  className="text-blue-600 hover:text-blue-700 text-lg"
                >
                  +40 XXX XXX XXX
                </a>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'addressLabel')}
                </h3>
                <p className="text-gray-700 text-lg">
                  {language === 'hu' && '525400 Kézdivásárhely, Barompiac utca 8., Románia'}
                  {language === 'ro' && '525400 Mun. Târgu Secuiesc, str. Oborului, nr. 8, România'}
                  {language === 'en' && 'RO-525400 Târgu Secuiesc, str. Oborului, nr. 8, Romania'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

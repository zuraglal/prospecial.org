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
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(language, 'heroTitle')}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-600 mb-6">
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
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                {getTranslation(language, 'learnMore')}
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643214410415-de1976ad74ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNwZWNpYWwlMjBuZWVkcyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzcxNzM4NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Children engaging in activities"
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
            <p className="text-xl text-blue-600">
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
                  src="https://images.unsplash.com/photo-1715775491904-ef5cdae40f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzcxNzA5MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse children playing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwZ3JvdXB8ZW58MXx8fHwxNzcxNzM4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Family support"
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
            <p className="text-xl text-blue-600">
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
              src="https://images.unsplash.com/photo-1565365527469-4008f67e8664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MXx8fHwxNzcxNzM4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Summer camp activities"
              className="w-full h-96 object-cover"
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
            <p className="text-xl text-blue-600 mb-6">
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
                  {language === 'hu' && 'Románia'}
                  {language === 'ro' && 'România'}
                  {language === 'en' && 'Romania'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

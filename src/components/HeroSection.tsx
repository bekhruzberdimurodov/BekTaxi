
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Smartphone, Phone, MapPin, Star, Shield, Clock, ArrowRight, Car } from 'lucide-react';
import playmarket from '/public/Play Market.svg';
import appstore from '/public/App Store.svg';

const HeroSection: React.FC = () => {
  const { t, tArray } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle yellow shadows and shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-yellow-300/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Trust badge with yellow accent */}
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-sm bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
                {t('heroTrustBadge')}
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t('subtitle')}
              </p>
            </div>

            {/* Feature cards */}
            <div className="fix2 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ boxShadow: '0 10px 30px -10px rgba(251, 191, 36, 0.3)' }}>
                <Shield className="h-8 w-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-gray-800">{t('heroSafe')}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ boxShadow: '0 10px 30px -10px rgba(251, 191, 36, 0.3)' }}>
                <Clock className="h-8 w-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-gray-800">{t('hero24_7')}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105" style={{ boxShadow: '0 10px 30px -10px rgba(251, 191, 36, 0.3)' }}>
                <Car className="h-8 w-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-gray-800">{t('heroFast')}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{t('downloadText')}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                
                  <a href="https://play.google.com/store/apps/details?id=uz.unical.bektaxi.user&pcampaignid=web_share">
                    <div className="playmarket"></div>
                  </a>
                 <div className="appstore"></div>
                </div>
              </div>

              {/* Phone number */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{t('contactNumber')}</h3>
                <a href="tel:+998712345678" className="group inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span>+998 (71) 234-56-78</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Working areas */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                {t('workingAreas')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tArray('areas').map((area, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-sm"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Taxi Visual */}
          <div className="flex justify-center order-1 lg:order-2 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group max-w-full">
              {/* Yellow shadow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-4 bg-yellow-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              {/* Main taxi card */}
              <div className="taxicar">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

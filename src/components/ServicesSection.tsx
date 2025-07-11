
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Smartphone, 
  MapPin, 
  CreditCard, 
  Clock,
  Star,
  Download,
  ChevronRight,
  Play,
  Apple,
  Zap,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import ImageModal from './ImageModal';

const ServicesSection: React.FC = () => {
  const { t, tArray } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      gradient: "from-blue-500 to-cyan-500",
      icon: Download,
      titleKey: "step1Title",
      descKey: "step1Desc",
      hasModal: true
    },
    {
      number: "02", 
      gradient: "from-green-500 to-emerald-500",
      icon: MapPin,
      titleKey: "step2Title",
      descKey: "step2Desc",
      hasModal: false
    },
    {
      number: "03",
      gradient: "from-purple-500 to-pink-500",
      icon: CreditCard,
      titleKey: "step3Title",
      descKey: "step3Desc",
      hasModal: false
    },
    {
      number: "04",
      gradient: "from-orange-500 to-red-500",
      icon: Star,
      titleKey: "step4Title",
      descKey: "step4Desc",
      hasModal: false
    }
  ];

  const features = tArray('appFeatures');

  const stats = [
    { number: "10K+", labelKey: "statClients", icon: Users },
    { number: "4.9", labelKey: "statRating", icon: Star },
    { number: "24/7", labelKey: "statServiceTime", icon: Clock },
    { number: "99%", labelKey: "statSatisfaction", icon: Award }
  ];

  const handleStepClick = (step: any) => {
    if (step.hasModal) {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="services" className="py-2 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 animate-glow">
            <Sparkles className="h-5 w-5 text-blue-600 animate-spin-slow" />
            <span className="text-blue-800 font-semibold">{t('modernApp')}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            {t('aboutApp')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('appDescription')}
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-zoom-in hover:border-blue-200 relative overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Gradient background overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="fix3 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <stat.icon className=" h-10 w-10 text-blue-600 group-hover:scale-125 transition-transform duration-300" />
                  <div className="fix3-in w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <div className="w-10 h-10 bg-white rounded-xl animate-pulse"></div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{t(stat.labelKey)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced How it works with modal functionality */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Enhanced Left side - Animated phones */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Enhanced main phone */}
              <div className="relative z-10 mx-auto w-80 h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-700 hover:shadow-3xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-[2.5rem] relative overflow-hidden animate-gradient bg-[length:200%_200%]">
                  {/* Enhanced phone screen content */}
                  <div className="absolute inset-4 bg-white rounded-[2rem] p-6 overflow-hidden">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-glow">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800">BekTaxi</div>
                          <div className="text-sm text-slate-600">{t('heroFast')} {t('heroService')}</div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-100 rounded-xl p-4">
                        <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                          <MapPin className="h-8 w-8 text-white animate-bounce-soft" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-slate-300 rounded w-3/4 animate-pulse"></div>
                          <div className="h-2 bg-slate-300 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
                            <div className="flex-1 h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce-soft shadow-2xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-float shadow-2xl">
                <Shield className="h-10 w-10 text-white" />
              </div>

              {/* Additional floating particles */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* Enhanced Right side - Steps with modal */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">{t('howItWorks')}</h3>
              <p className="text-lg text-slate-600">{t('howItWorksSubtitle')}</p>
            </div>
            
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(step)}
                className={`group bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative overflow-hidden ${
                  step.hasModal ? 'cursor-pointer hover:border-blue-300' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start space-x-6 relative z-10">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl group-hover:shadow-2xl`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {t(step.descKey)}
                    </p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div id="about" className="mb-20">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-12 animate-fade-in-up">
            {t('features')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-zoom-in hover:border-blue-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                    <Sparkles className="w-8 h-8 text-white animate-pulse group-hover:animate-spin" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg leading-relaxed group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {feature}
                  </h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Download CTA */}
        <div id='app'   className="text-center animate-fade-in-up">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_200%]"></div>
            
            {/* Enhanced floating shapes */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-8 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            
            <div id='app' className="relative z-10 text-white">
              <h3  className="text-5xl font-bold mb-6">{t('downloadNow')}</h3>
              <p  className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                {t('downloadDescription')}
              </p>
              <div  className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
               <a href="https://play.google.com/store/apps/details?id=uz.unical.bektaxi.user&pcampaignid=web_share">
                    <div className="playmarket"></div>
                  </a>
                 <div className="appstore"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        alt="BekTaxi Mobile App Installation Guide"
      />
    </section>
  );
};

export default ServicesSection;

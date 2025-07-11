
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail,
  MapPin,
  ExternalLink,
  Car,
  Star,
  Youtube,
  Send,
  Heart,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', gradient: 'from-blue-600 to-blue-700', hoverGradient: 'from-blue-500 to-blue-600' },
    { name: 'Instagram', icon: Instagram, url: '#', gradient: 'from-pink-600 to-purple-600', hoverGradient: 'from-pink-500 to-purple-500' },
    { name: 'YouTube', icon: Youtube, url: '#', gradient: 'from-red-600 to-red-700', hoverGradient: 'from-red-500 to-red-600' },
    { name: 'Telegram', icon: Send, url: '#', gradient: 'from-blue-500 to-cyan-500', hoverGradient: 'from-blue-400 to-cyan-400' },
  ];

  const services = [
    { nameKey: 'footerService1', icon: Car },
    { nameKey: 'footerService2', icon: MapPin },
    { nameKey: 'footerService3', icon: Award },
    { nameKey: 'footerService4', icon: Car },
    { nameKey: 'footerService5', icon: MapPin }
  ];

  const features = [
    { nameKey: 'footerFeature1', icon: Shield },
    { nameKey: 'footerFeature2', icon: Zap },
    { nameKey: 'footerFeature3', icon: Clock },
    { nameKey: 'footerFeature4', icon: Award }
  ];

  return (
    <footer id="footer" className="relative text-black overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Enhanced animated grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-glow">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  BekTaxi
                </h3>
                <p className="text-sm text-blue-300">{t('heroTrustBadge')}</p>
              </div>
            </div>
            
            <p className="text-black mb-6 leading-relaxed">
              {t('footerCompanyDescription')}
            </p>
            
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
              <span className="text-sm text-blue-300 ml-2">5.0 (1000+ {t('footerReviews')})</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-black group   transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <span>+998 (71) 234-56-78</span>
              </div>
              <div className="flex items-center text-black group   transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <span>info@bektaxi.uz</span>
              </div>
              <div className="flex items-center text-black group   transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <span>{t('footerInUzbekistan')}</span>
              </div>
            </div>
          </div>

          {/* Enhanced Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group flex items-center text-black   transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <service.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{t(service.nameKey)}</span>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Features */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              {t('features')}
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="group flex items-center text-black   transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{t(feature.nameKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Social Media & Zaffo Group */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                {t('socialMedia')}
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group relative bg-gradient-to-r ${social.gradient} p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="text-sm  text-black mb-2">{t('footerFollowUs')}</p>
                <p className="text-yellow-400 font-bold">@BekTaxiOfficial</p>
              </div>
            </div>

            {/* Enhanced Zaffo Group Ad */}
            <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-6 rounded-3xl text-black overflow-hidden animate-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 animate-gradient bg-[length:200%_200%]"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full transform translate-x-12 -translate-y-12 animate-float"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3 flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  Zaffo Group
                </h4>
                <p className="text-sm mb-4 font-medium leading-relaxed">{t('zaffoAd')}</p>
                <div className="text-sm mb-4 flex items-center bg-black/20 rounded-lg p-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  <span className="font-bold">+998 (87) 322 2010</span>
                </div>
                <a 
                  href="#" 
                  className="group inline-flex items-center text-sm font-bold bg-black text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-slate-800"
                >
                  {t('zaffoDetails')}
                  <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2  text-black">
              <span>© 2025 BekTaxi. {t('footerRights')}</span>
              <span className="text-pink-400">|</span>
              <span className="flex items-center space-x-1">
                <span>{t('footerMadeWith')}</span>
            
                <span>{t('Company')}</span>
              </span>
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className=" text-black hover:text-yellow-400 transition-colors duration-300 hover:underline">
                {t('footerPrivacy')}
              </a>
              <a href="#" className=" text-black hover:text-yellow-400 transition-colors duration-300 hover:underline">
                {t('footerTerms')}
              </a>
              <a href="#" className=" text-black hover:text-yellow-400 transition-colors duration-300 hover:underline">
                {t('footerContact')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;

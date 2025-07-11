
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Car, Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'uz' as const, name: 'O\'zbekcha', flag: '🇺🇿', short: 'UZ' },
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺', short: 'RU' },
    { code: 'en' as const, name: 'English', flag: '🇬🇧', short: 'EN' }
  ];

  const navItems = [
    { name: 'home', id: 'hero' },
    { name: 'services', id: 'services' },
    { name: 'about', id: 'about' },
    { name: 'contact', id: 'app' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 animate-fade-in border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 animate-scale-in">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Car className="h-7 w-7 text-black" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                BekTaxi
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                {t('subtitle')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 relative group py-2 bg-transparent border-none cursor-pointer"
              >
                {t(`nav_${item.name}`)}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Language Switcher */}
            <div className="hidden sm:flex items-center space-x-1 bg-gray-50 rounded-full p-1">
              <Globe className="h-4 w-4 text-gray-600 mx-2" />
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  variant="ghost"
                  size="sm"
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    language === lang.code
                      ? 'bg-yellow-400 text-black shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-gray-800'
                  }`}
                >
 
                  <span className="hidden lg:inline">{lang.name}</span>
                  <span className="lg:hidden">{lang.short}</span>
                </Button>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="sm:hidden flex items-center space-x-1">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  variant="ghost"
                  size="sm"
                  className={`rounded-full px-2 py-1 text-sm transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-600'
                  }`}
                >
                  {lang.flag}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-gray-50 rounded-lg p-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-yellow-600 font-medium py-2 px-3 rounded-lg hover:bg-white transition-all duration-300 bg-transparent border-none cursor-pointer"
              >
                {t(`nav_${item.name}`)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

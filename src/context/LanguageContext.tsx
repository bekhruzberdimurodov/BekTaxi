
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface Translations {
  [key: string]: {
    uz: string;
    ru: string;
    en: string;
  } | {
    uz: string[];
    ru: string[];
    en: string[];
  };
}

const translations: Translations = {
  title: {
    uz: "BekTaxi - Professional Taksi Xizmati",
    ru: "BekTaxi - Профессиональная Служба Такси",
    en: "BekTaxi - Professional Taxi Service"
  },
  subtitle: {
    uz: "Tezkor, ishonchli va xavfsiz taksi xizmati",
    ru: "Быстрое, надежное и безопасное такси",
    en: "Fast, reliable and safe taxi service"
  },
  
  // Navigation translations
  nav_home: {
    uz: "Bosh sahifa",
    ru: "Главная",
    en: "Home"
  },
  nav_services: {
    uz: "Xizmatlar",
    ru: "Услуги",
    en: "Services"
  },
  nav_about: {
    uz: "Biz haqimizda",
    ru: "О нас",
    en: "About"
  },
  nav_contact: {
    uz: "Aloqa",
    ru: "Контакты",
    en: "Contact"
  },

  // Hero section
  downloadText: {
    uz: "Ilovani yuklab oling:",
    ru: "Скачать приложение:",
    en: "Download the app:"
  },
  contactNumber: {
    uz: "Qo'ng'iroq qiling:",
    ru: "Звоните:",
    en: "Call us:"
  },
  workingAreas: {
    uz: "Ishlaydigan tumanlar:",
    ru: "Рабочие районы:",
    en: "Working areas:"
  },
  heroTrustBadge: {
    uz: "Professional xizmat",
    ru: "Профессиональный сервис",
    en: "Professional service"
  },
  heroSafe: {
    uz: "Xavfsiz",
    ru: "Безопасно",
    en: "Safe"
  },
  hero24_7: {
    uz: "24/7",
    ru: "24/7",
    en: "24/7"
  },
  heroFast: {
    uz: "Tezkor",
    ru: "Быстро",
    en: "Fast"
  },
  heroOnline: {
    uz: "Online!",
    ru: "Онлайн!",
    en: "Online!"
  },
  heroClients: {
    uz: "Mijozlar",
    ru: "Клиенты",
    en: "Clients"
  },
  heroRating: {
    uz: "Rating",
    ru: "Рейтинг",
    en: "Rating"
  },
  heroService: {
    uz: "Xizmat",
    ru: "Сервис",
    en: "Service"
  },

  // Services section
  aboutApp: {
    uz: "Ilova haqida",
    ru: "О приложении",
    en: "About the App"
  },
  appDescription: {
    uz: "Zamonaviy texnologiyalar va professional xizmat bilan eng yaxshi taksi tajribasi",
    ru: "Лучший опыт такси с современными технологиями и профессиональным сервисом",
    en: "Best taxi experience with modern technology and professional service"
  },
  modernApp: {
    uz: "Zamonaviy dastur",
    ru: "Современное приложение",
    en: "Modern App"
  },
  howItWorks: {
    uz: "Qanday ishlaydi?",
    ru: "Как это работает?",
    en: "How It Works?"
  },
  howItWorksSubtitle: {
    uz: "Faqat 4 ta oddiy qadam bilan taksi chaqiring",
    ru: "Вызовите такси всего за 4 простых шага",
    en: "Call a taxi in just 4 simple steps"
  },
  features: {
    uz: "Xususiyatlar",
    ru: "Особенности",
    en: "Features"
  },
  downloadNow: {
    uz: "Hoziroq yuklab oling!",
    ru: "Скачайте сейчас!",
    en: "Download Now!"
  },
  downloadDescription: {
    uz: "Eng yaxshi taksi xizmatidan foydalanish uchun ilovani yuklab oling",
    ru: "Скачайте приложение для лучшего сервиса такси",
    en: "Download the app for the best taxi service experience"
  },

  // Stats
  statClients: {
    uz: "Yaqin mijozlar",
    ru: "Довольных клиентов",
    en: "Happy clients"
  },
  statRating: {
    uz: "O'rtacha rating",
    ru: "Средний рейтинг",
    en: "Average rating"
  },
  statServiceTime: {
    uz: "Xizmat vaqti",
    ru: "Время работы",
    en: "Service time"
  },
  statSatisfaction: {
    uz: "Qoniqish darajasi",
    ru: "Уровень удовлетворенности",
    en: "Satisfaction rate"
  },

  // Steps
  step1Title: {
    uz: "Ilovani o'rnating",
    ru: "Установите приложение", 
    en: "Install the App"
  },
  step1Desc: {
    uz: "BekTaxi ilovasini Play Store yoki App Store'dan bepul yuklab oling",
    ru: "Скачайте приложение BekTaxi бесплатно из Play Store или App Store",
    en: "Download BekTaxi app for free from Play Store or App Store"
  },
  step2Title: {
    uz: "Manzilni kiriting",
    ru: "Введите адрес",
    en: "Enter Address"
  },
  step2Desc: {
    uz: "Qayerdan va qayerga borish kerakligini kiriting, taksi avtomatik topiladi",
    ru: "Укажите откуда и куда нужно ехать, такси найдется автоматически",
    en: "Enter your pickup and destination, taxi will be found automatically"
  },
  step3Title: {
    uz: "To'lovni amalga oshiring",
    ru: "Произведите оплату",
    en: "Make Payment"
  },
  step3Desc: {
    uz: "Naqd yoki plastik karta orqali xavfsiz to'lov qiling",
    ru: "Безопасная оплата наличными или банковской картой",
    en: "Secure payment by cash or credit card"
  },
  step4Title: {
    uz: "Sayohatdan zavqlaning",
    ru: "Наслаждайтесь поездкой",
    en: "Enjoy Your Ride"
  },
  step4Desc: {
    uz: "Professional haydovchi bilan qulay va xavfsiz sayohat qiling",
    ru: "Комфортная и безопасная поездка с профессиональным водителем",
    en: "Comfortable and safe ride with professional driver"
  },

  // App stores
  playStore: {
    uz: "Play Store",
    ru: "Play Store",
    en: "Play Store"
  },
  appStore: {
    uz: "App Store",
    ru: "App Store",
    en: "App Store"
  },
  googlePlay: {
    uz: "Google",
    ru: "Google",
    en: "Google"
  },
  app: {
    uz: "App",
    ru: "App",
    en: "App"
  },
  store: {
    uz: "Store",
    ru: "Store",
    en: "Store"
  },

  // Working areas
  areas: {
    uz: ["Toshkent", "Yunusobod", "Chilonzor", "Yashnobod", "Mirzo Ulug'bek", "Mirobod", "Shayxontohur"],
    ru: ["Ташкент", "Юнусабад", "Чиланзар", "Яшнабад", "Мирзо Улугбек", "Мирабад", "Шайхантаур"],
    en: ["Tashkent", "Yunusabad", "Chilanzar", "Yashnabad", "Mirzo Ulugbek", "Mirabad", "Shaykhantaur"]
  },

  // App features
  appFeatures: {
    uz: [
      "Tezkor buyurtma berish",
      "Real vaqtda kuzatish", 
      "Xavfsiz to'lov",
      "Professional haydovchilar",
      "24/7 qo'llab-quvvatlash",
      "Arzimli narxlar",
      "Toza va qulay avtomobillar",
      "GPS navigatsiya",
      "Oldindan bron qilish",
      "Bonus dasturi"
    ],
    ru: [
      "Быстрое оформление заказа",
      "Отслеживание в реальном времени",
      "Безопасная оплата",
      "Профессиональные водители",
      "Поддержка 24/7",
      "Доступные цены",
      "Чистые и комфортные автомобили",
      "GPS навигация",
      "Предварительное бронирование",
      "Программа бонусов"
    ],
    en: [
      "Quick order placement",
      "Real-time tracking",
      "Secure payment",
      "Professional drivers",
      "24/7 support", 
      "Affordable prices",
      "Clean and comfortable cars",
      "GPS navigation",
      "Advance booking",
      "Bonus program"
    ]
  },

  // Footer
  services: {
    uz: "Xizmatlarimiz",
    ru: "Наши услуги",
    en: "Our Services"
  },
  socialMedia: {
    uz: "Ijtimoiy tarmoqlar",
    ru: "Социальные сети",
    en: "Social Media"
  },
  footerCompanyDescription: {
    uz: "Professional taksi xizmati - tezkor, ishonchli va xavfsiz transport yechimi barcha shahar bo'ylab.",
    ru: "Профессиональная служба такси - быстрое, надежное и безопасное транспортное решение по всему городу.",
    en: "Professional taxi service - fast, reliable and safe transport solution throughout the city."
  },
  footerReviews: {
    uz: "sharh",
    ru: "отзывов",
    en: "reviews"
  },
  footerFollowUs: {
    uz: "Bizni kuzatib boring:",
    ru: "Следите за нами:",
    en: "Follow us:"
  },
  footerRights: {
    uz: "Barcha huquqlar himoyalangan.",
    ru: "Все права защищены.",
    en: "All rights reserved."
  },
  footerMadeWith: {
    uz: "IT kompaniya:",
    ru: "Сделано с",
    en: "Made with"
  },
  footerInUzbekistan: {
    uz: "in Uzbekistan",
    ru: "в Узбекистане",
    en: "in Uzbekistan"
  },
  Company:{
    uz: "Zaffo Group",
    ru: "Zaffo Group",
    en: "Zaffo Group",
  },
  footerPrivacy: {
    uz: "Maxfiylik siyosati",
    ru: "Политика конфиденциальности",
    en: "Privacy Policy"
  },
  footerTerms: {
    uz: "Foydalanish shartlari",
    ru: "Условия использования",
    en: "Terms of Service"
  },
  footerContact: {
    uz: "Aloqa",
    ru: "Контакты",
    en: "Contact"
  },

  // Footer services
  footerService1: {
    uz: "Shahar bo'ylab taksi",
    ru: "Такси по городу",
    en: "City taxi"
  },
  footerService2: {
    uz: "Aeroportga transfer",
    ru: "Трансфер в аэропорт",
    en: "Airport transfer"
  },
  footerService3: {
    uz: "Biznes klass",
    ru: "Бизнес класс",
    en: "Business class"
  },
  footerService4: {
    uz: "Yuk tashish",
    ru: "Грузоперевозки",
    en: "Cargo transport"
  },
  footerService5: {
    uz: "Turli shaharlar arasi",
    ru: "Междугородние поездки",
    en: "Intercity trips"
  },

  // Footer features
  footerFeature1: {
    uz: "Xavfsiz to'lov",
    ru: "Безопасная оплата",
    en: "Secure payment"
  },
  footerFeature2: {
    uz: "Tezkor xizmat",
    ru: "Быстрый сервис",
    en: "Fast service"
  },
  footerFeature3: {
    uz: "24/7 qo'llab-quvvatlash",
    ru: "Поддержка 24/7",
    en: "24/7 support"
  },
  footerFeature4: {
    uz: "Professional haydovchilar",
    ru: "Профессиональные водители",
    en: "Professional drivers"
  },

  // Zaffo Group
  zaffoAd: {
    uz: "Zaffo Group - IT yechimlar va web dasturlash",
    ru: "Zaffo Group - IT решения и веб-разработка",
    en: "Zaffo Group - IT solutions and web development"
  },
  zaffoDetails: {
    uz: "Batafsil",
    ru: "Подробнее",
    en: "Learn more"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    const translation = translations[key];
    if (translation && typeof translation[language] === 'string') {
      return translation[language] as string;
    }
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  const tArray = (key: string): string[] => {
    const translation = translations[key];
    if (translation && Array.isArray(translation[language])) {
      return translation[language] as string[];
    }
    console.warn(`Array translation missing for key: ${key}`);
    return [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

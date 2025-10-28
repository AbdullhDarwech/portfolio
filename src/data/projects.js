

// src/data/projects.js
export const skills = [
  { ar: "React", en: "React" },
  { ar: "Tailwind CSS", en: "Tailwind CSS" },
  { ar: "Framer Motion", en: "Framer Motion" },
  { ar: "JavaScript", en: "JavaScript" },
  { ar: "HTML", en: "HTML" },
  { ar: "CSS", en: "CSS" },
];

export const projects = [
  {
    name: { ar: "البطاقة الرقمية", en: "Digital Card" },
    description: { 
      ar: "بطاقة رقمية شخصية تفاعلية تعرض معلوماتي ومهاراتي.",
      en: "Interactive personal digital card showing my info and skills."
    },
    image: "/projects/digital-card.jpg",
    link: "https://cardly1.netlify.app/",
  },

  {
    name: { ar: "تطبيق متجر", en: "Store App" },
    description: { 
      ar: "تطبيق لبيع وشراء المنتجات باستخدام React و Tailwind.",
      en: "Application for buying and selling products using React and Tailwind."
    },
    image: "/projects/store.png",
    link: "https://github.com/AbdullhDarwech/Store-Cars",
  },
  {
    name: { ar: "موقع لمطعم", en: "Restaurant Website" },
    description: { 
      ar: "موقع مطعم يقدم قائمة طعام متنوعة تحتوي على فئات مختلفة من الأكلات، مع عرض صورها ووصفها بطريقة جذابة وسهلة التصفح.",
      en: "A restaurant website showcasing a diverse food menu with categorized dishes, detailed descriptions, and appealing images for an interactive browsing experience."
    },
    image: "/projects/resturant1.png",
    link: "https://project-resturant1.netlify.app/",
  },
  
];

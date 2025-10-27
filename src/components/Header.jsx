import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { language, toggleLanguage } = useContext(LanguageContext);

  const sections = [
  
    { id: "hero", label: { en: "Home", ar: "الرئيسية" } },
    { id: "projects", label: { en: "Projects", ar: "المشاريع" } },
    { id: "about", label: { en: "About Me", ar: "نبذة عني" } },
    { id: "contact", label: { en: "Contact", ar: "تواصل معي" } },
  ];
  const texts = {
    en: {
      name: "Abdulla",
 
    },
    ar: {
      name: "عبدالله",
 
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-white/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* شعار */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "hero")}
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
        >
    {texts[language].name}
        </a>

        {/* قائمة التنقل + زر اللغة */}
        <nav className="flex items-center gap-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`relative transition-all duration-300 ${
                activeSection === id
                  ? "text-indigo-600 font-semibold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-indigo-600"
                  : "hover:text-indigo-600"
              }`}
            >
              {label[language]}
            </a>
          ))}

          {/* زر اللغة متجاوب */}
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 rounded-full border border-indigo-600 text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
        </nav>
      </div>

      {/* للهواتف الصغيرة: قائمة قابلة للفتح */}
      {/* يمكن إضافة هاتفيًا قائمة هامبرغر إذا أحببت */}
    </motion.header>
  );
}

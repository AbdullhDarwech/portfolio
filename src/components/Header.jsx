import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { Menu, X } from "lucide-react"; // أيقونات جميلة وخفيفة

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const sections = [
    { id: "hero", label: { en: "Home", ar: "الرئيسية" } },
    { id: "projects", label: { en: "Projects", ar: "المشاريع" } },
    { id: "about", label: { en: "About Me", ar: "نبذة عني" } },
    { id: "contact", label: { en: "Contact", ar: "تواصل معي" } },
  ];

  const texts = {
    en: { name: "Abdulla" },
    ar: { name: "عبدالله" },
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
    setMenuOpen(false);
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
          className="text-2xl font-bold text-indigo-900 hover:text-indigo-500 transition-colors duration-300"
        >
          {texts[language].name}
        </a>

        {/* أزرار سطح المكتب */}
        <nav className="hidden md:flex items-center gap-6">
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
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 rounded-full border border-indigo-600 text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
        </nav>

        {/* زر القائمة للهاتف */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-indigo-700 hover:bg-indigo-100 transition-colors duration-300"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* القائمة المنسدلة للجوال */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 shadow-lg backdrop-blur-lg py-4"
          >
            <div className="flex flex-col items-center gap-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`text-lg transition-colors duration-300 ${
                    activeSection === id
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-600"
                  }`}
                >
                  {label[language]}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="mt-2 px-4 py-2 border border-indigo-600 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                {language === "en" ? "AR" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

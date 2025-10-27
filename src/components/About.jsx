import React, { useContext } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/projects";
import { LanguageContext } from "../context/LanguageContext";

export default function About() {
  const { language } = useContext(LanguageContext);

  const texts = {
    title: { en: "About Me", ar: "نبذة عني" },
    description: {
      en: `I am a Front-End Developer passionate about creating modern and interactive web applications. I specialize in React, Tailwind CSS, and Framer Motion to build fast, clean, and visually appealing interfaces.`,
      ar: `أنا مطور واجهات أمامية شغوف بإنشاء تطبيقات ويب حديثة وتفاعلية. أتخصص في React و Tailwind CSS و Framer Motion لبناء واجهات سريعة، نظيفة وجذابة بصريًا.`,
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-slate-50 to-white text-gray-900"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* نص التعريف */}
        <div>
          <h3 className="text-4xl font-bold text-indigo-600 mb-5 drop-shadow-lg">
            {texts.title[language]}
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            {texts.description[language]}
          </p>

          {/* زر تواصل معي */}
          <a
            href="#contact"
            className="mt-8 inline-block px-7 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-500 transition-all duration-300"
          >
            {language === "ar" ? "تواصل معي ✉️" : "Contact Me ✉️"}
          </a>
        </div>

        {/* المهارات */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.1 }}
            >
              {skill[language]}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* تأثير خلفية ناعم */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}

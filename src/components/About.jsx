import React, { useContext } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/projects";
import { LanguageContext } from "../context/LanguageContext";

export default function About() {
  const { language } = useContext(LanguageContext);

  const texts = {
    title: { en: "About Me", ar: "نبذة عني" },
    description: {
      en: `Front-End developer specializing in building modern applications using React, Tailwind CSS, and Framer Motion. I love writing clean code and creating enjoyable and fast user interfaces.`,
      ar: `مطور واجهات أمامية متخصص في بناء تطبيقات حديثة باستخدام React و Tailwind CSS و Framer Motion. أحب كتابة كود نظيف وبناء واجهات مستخدم ممتعة وسريعة.`,
    },
  };

  return (
    <section id="about" className="relative py-20 bg-dark backdrop-blur-sm">
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* النص التعريفي */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">{texts.title[language]}</h3>
          <p className="mt-5 text-gray-700 leading-relaxed text-lg">
            {texts.description[language]}
          </p>
        </div>

        {/* المهارات */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start mt-6 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {skill[language]}

            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

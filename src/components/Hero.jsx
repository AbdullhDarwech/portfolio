import React, { useContext } from "react";
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useContext(LanguageContext);

  const { scrollY } = useViewportScroll();

  // تحريك الخلفية والصورة والنص بشكل سلس
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const imgY = useTransform(scrollY, [0, 500], [0, -100]);
  const textY = useTransform(scrollY, [0, 500], [0, -20]);

  // تطبيق spring لجعل الحركة سلسة
  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 });
  const smoothImgY = useSpring(imgY, { stiffness: 50, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 50, damping: 20 });

  const texts = {
    en: {
      greeting: "👋 Hello, I'm",
      name: "Abdulla",
      description:
        "A passionate Front-End Developer creating interactive web experiences combining beauty and speed using React, Tailwind CSS, and Framer Motion.",
      projectsBtn: "View My Projects 🚀",
      contactBtn: "Contact Me ✉️",
    },
    ar: {
      greeting: "👋 مرحباً، أنا",
      name: "عبدالله",
      description:
        "مطور واجهات أمامية شغوف بإنشاء تجارب ويب تفاعلية تجمع بين الجمال والسرعة باستخدام React و Tailwind و Framer Motion.",
      projectsBtn: "عرض مشاريعي 🚀",
      contactBtn: "تواصل معي ✉️",
    },
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[100vh] overflow-hidden">
      {/* الخلفية */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-40 blur-3xl z-20"
        style={{ y: smoothBgY }}
      />

      {/* الصورة تغطي كامل الخلفية */}
      <motion.img
        src="/your-photo.png"
        alt={texts[language].name}
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-100"
        style={{ y: smoothImgY }}
      />

      {/* النصوص */}
      <motion.div
        className="relative max-w-2xl text-center md:text-start z-10 px-6 md:px-0"
        style={{ y: smoothTextY }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
          {texts[language].greeting}{" "}
          <span className="text-indigo-200">{texts[language].name}</span>
        </h1>

        <p className="mt-5 text-lg text-white leading-relaxed drop-shadow-sm">
          {texts[language].description}
        </p>

        <div className="mt-10 flex justify-center md:justify-start gap-5">
          <a
            href="#projects"
            className="px-7 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {texts[language].projectsBtn}
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            {texts[language].contactBtn}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800); // تأخير الدخول
    return () => clearTimeout(timer);
  }, []);

  const texts = {
    en: {
      greeting: "Hello, I’m",
      name: "Abdulla Darwich",
      role: "Front-End Developer",
      description:
        "I create modern, responsive, and high-performance web interfaces with React, Tailwind, and Framer Motion.",
      projectsBtn: "Explore Projects 🚀",
      contactBtn: "Let’s Talk ✉️",
    },
    ar: {
      greeting: "مرحباً، أنا",
      name: "عبدالله درويش",
      role: "مطور واجهات أمامية",
      description:
        "أبني واجهات ويب عصرية وسريعة الاستجابة باستخدام React و Tailwind و Framer Motion بتصميم عصري مميز.",
      projectsBtn: "استكشف مشاريعي 🚀",
      contactBtn: "تواصل معي ✉️",
    },
  };

  return (
    <section id="hero" className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* 🎥 خلفية فيديو */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 🌈 تدرجات الإضاءة */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 via-purple-900/30 to-slate-900/60 mix-blend-overlay" />
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px]"
        animate={{ y: [0, 50, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[160px]"
        animate={{ y: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ تأثير دخول الصفحة */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center text-white text-3xl font-bold z-50"
          >
            {language === "ar" ? "جارٍ التحميل..." : "Loading..."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💎 المحتوى */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-lg sm:text-xl text-gray-400 tracking-wide">
            {texts[language].greeting}
          </p>

          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]">
            {texts[language].name}
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-2xl sm:text-3xl font-medium text-gray-300"
          >
            {texts[language].role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed text-base sm:text-lg"
          >
            {texts[language].description}
          </motion.p>

          {/* 🚀 الأزرار */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            <a
              href="#projects"
              className="relative group px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              <span className="relative z-10">{texts[language].projectsBtn}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold rounded-xl border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 hover:scale-105 transition-all duration-300"
            >
              {texts[language].contactBtn}
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

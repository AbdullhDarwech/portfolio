// ✅ عدّل مكون Projects.jsx كالتالي
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useContext(LanguageContext);

  const sectionTitle = {
    en: "My Projects",
    ar: "مشاريعي",
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          {sectionTitle[language]}
        </h3>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 ${
                project.name.ar === "البطاقة الرقمية"
                  ? "border-4 border-indigo-500 hover:scale-105 hover:shadow-2xl"
                  : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
                  >
                    {language === "ar" ? "معاينة المشروع" : "View Project"}
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name[language]}
                </h4>
                <p className="text-gray-600 text-sm">
                  {project.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

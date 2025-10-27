import React, { useContext } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "../data/projects";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useContext(LanguageContext);

  const sectionTitle = {
    en: "My Projects",
    ar: "مشاريعي",
  };

  // مكون الكارد مع تأثير Parallax خفيف
  const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    return (
      <motion.div
        className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const posX = e.clientX - rect.left - rect.width / 2;
          const posY = e.clientY - rect.top - rect.height / 2;
          x.set(posX / 10);
          y.set(posY / 10);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <div className="relative overflow-hidden rounded-t-3xl">
          <motion.img
            src={project.image}
            alt={project.name[language]}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-500 transition-colors"
            >
              {language === "ar" ? "معاينة المشروع" : "View Project"}
            </a>
          </motion.div>
        </div>
        <div className="p-6">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">
            {project.name[language]}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description[language]}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-indigo-600 mb-12 text-center drop-shadow-lg">
          {sectionTitle[language]}
        </h3>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>

      {/* خلفيات زخرفية متدرجة */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full opacity-15 blur-3xl -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

export default function Contact() {
  const [status, setStatus] = useState("");
  const { language } = useContext(LanguageContext);

  const texts = {
    title: { en: "Contact Me", ar: "تواصل معي" },
    description: {
      en: "Send me a message or contact via email:",
      ar: "أرسل لي رسالة أو تواصل عبر البريد الإلكتروني:",
    },
    name: { en: "Name", ar: "الاسم" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    message: { en: "Your Message", ar: "رسالتك" },
    submit: { en: "Send", ar: "إرسال" },
    emailAddress: "darwecabdullh.email@example.com",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm("service_aq94ti3", "template_xpkyblq", form, "pQFSolQXaJE02vA_l")
      .then(
        () => {
          setStatus(language === "ar" ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!");
          form.reset();
        },
        () => {
          setStatus(
            language === "ar"
              ? "حدث خطأ أثناء الإرسال، حاول لاحقًا."
              : "An error occurred. Please try again later."
          );
        }
      );
  };

  return (
    <section id="contact" className="py-12 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center"
      >
        {texts.title[language]}
      </motion.h3>

      <p className="mt-3 text-center text-gray-700 max-w-xl mx-auto">
        {texts.description[language]}{" "}
        <strong className="text-accent">{texts.emailAddress}</strong>
      </p>

      {status && (
        <p className="mt-4 text-center text-green-600 font-medium">{status}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
        <label className="block">
          <span className="text-gray-700">{texts.name[language]}</span>
          <input
            type="text"
            name="name"
            placeholder={texts.name[language]}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">{texts.email[language]}</span>
          <input
            type="email"
            name="email"
            placeholder={texts.email[language]}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700">{texts.message[language]}</span>
          <textarea
            name="message"
            rows="5"
            placeholder={texts.message[language]}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-accent text-white font-semibold rounded hover:bg-accent-dark transition-colors"
        >
          {texts.submit[language]}
        </button>
      </form>

      {/* وسائل التواصل الاجتماعي */}
      <div className="mt-8 flex justify-center space-x-6 text-gray-700">
        <a
          href="https://www.facebook.com/abdullah.darwech.7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors text-2xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/3bdullh17"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullh-darwech-855bab267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors text-2xl"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
}

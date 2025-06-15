"use client";

import React, { useState } from "react";
import ContactForm from "./contactform";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ContactProps {
  darkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  const isDark =
    typeof darkMode === "boolean"
      ? darkMode
      : typeof window !== "undefined" &&
        document.body.classList.contains("dark-mode");

  return (
    <section
      className={`w-full min-h-[60vh] flex flex-col items-center justify-center transition-all duration-300 ${
        isDark ? "bg-[#15003b]" : "bg-[#fdc9bf]"
      } ${showForm ? "pt-4 pb-4" : "pt-16 pb-16"}`}
      id="contact"
    >
      {!showForm && (
        <>
          <h1
            className={`text-center font-extrabold leading-tight ${
              showForm ? "" : "mb-8"
            }`}
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: isDark ? "#fff" : "#181a20",
            }}
          >
            {t("contactSection.titleLine1")} <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark
                  ? "from-[#f43f5e] via-[#a537e0] to-[#6366f1]"
                  : "from-orange-400 via-pink-500 to-fuchsia-600"
              }`}
            >
              {t("contactSection.titleLine2")}
            </span>
          </h1>

          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
          >
            {t("contactSection.contactBtn")}
          </button>
        </>
      )}

      <AnimatePresence>
        {showForm && (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <ContactForm darkMode={darkMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

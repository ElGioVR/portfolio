"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  companyKey: string;
  roleKey: string;
  dateKey: string;
  detailKeys: string[];
}

interface ExperienceProps {
  darkMode?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    companyKey: "experience.companyGlobal.name",
    roleKey: "experience.companyGlobal.role",
    dateKey: "experience.companyGlobal.date",
    detailKeys: ["experience.companyGlobal.details1", "experience.companyGlobal.details2"],
  },
  {
    companyKey: "experience.companyGroup.name",
    roleKey: "experience.companyGroup.role",
    dateKey: "experience.companyGroup.date",
    detailKeys: ["experience.companyGroup.details1"],
  },
];

// ✅ Corregido: función normal que recibe props y retorna ReactNode
const TimelineExperience = ( {darkMode}: ExperienceProps ) => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation();

  return (
    <section
      className={`w-full pt-12 pb-4 md:pb-12 px-6 flex flex-col items-center transition-colors duration-300 ml-2 mr-2 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center mb-8">
        {/* Izquierda - Tabs y Texto */}
        <div className="space-y-6">
          <h2
            className={`text-4xl font-bold mb-16 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("experience.title")}
            <span className="text-gradient-wave ml-1">.</span>
          </h2>
          <p
            className="text-base md:text-lg mb-4"
            style={{ color: "var(--text-color)" }}
          >
            {t("experience.description")}
          </p>

          {/* Tabs de empresas */}
          <div className="flex flex-wrap gap-3 pt-4">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  i === selected
                    ? darkMode
                      ? "bg-[#2f1141] border-fuchsia-500 text-white"
                      : "bg-[#f3e8ff] border-fuchsia-500 text-fuchsia-700"
                    : darkMode
                    ? "bg-[#0e0a1d] border-[#38134d] text-[#dabdfa]"
                    : "bg-[#faf2fc] border-[#e9d5fa] text-[#a537e0]"
                }`}
              >
                {t(exp.companyKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Derecha - Detalles */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl border p-6 shadow-xl flex flex-col gap-4 max-w-md w-full mx-auto mb-4 md:mb-8
            ${
              darkMode
                ? "bg-[#0e0a1d] border-[#38134d] text-[#dabdfa]"
                : "bg-white border-[#f0e6fa] text-[#3b0764]"
            }`}
        >
          <h3 className="text-xl font-semibold">
            {t(experiences[selected].roleKey)}
          </h3>
          <p className="text-sm opacity-80">{t(experiences[selected].dateKey)}</p>
          <ul className="text-sm space-y-2 list-disc pl-5">
            {experiences[selected].detailKeys.map((key, idx) => (
              <li key={idx}>{t(key)}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ Exportación corregida
export default TimelineExperience;

"use client";

import React, { useState } from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function AbouthMe({ darkMode }: { darkMode?: boolean }) {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(0);

  const cvFile = i18n.language === "es" ? "/cv/cv-es.pdf" : "/cv/cv-en.pdf";

  const services = [
    {
      key: "developer",
      icon: "💻",
    },
    {
      key: "uiux",
      icon: "👨‍💻",
    },
    {
      key: "designer",
      icon: "🖌️",
    },
  ];

  const isDark =
    typeof darkMode === "boolean"
      ? darkMode
      : typeof window !== "undefined" &&
        document.body.classList.contains("dark-mode");

  const selectedService = services[selected];

  return (
    <section className="w-full flex flex-col items-center justify-center pt-8 pb-4 md:py-14 px-4 md:px-8">
      {/* Mobile: chips */}
      <div className="w-full md:hidden flex flex-row justify-center gap-3 flex-wrap mt-4 mb-6">
        {services.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setSelected(i)}
            className={`flex items-center gap-2 px-1 py-1 rounded-full border-2 shadow-sm hover:shadow-md transition-all duration-200
              ${i === selected
                ? isDark
                  ? "bg-[#2f1141] border-fuchsia-500 text-white"
                  : "bg-[#f3e8ff] border-fuchsia-500 text-fuchsia-700"
                : isDark
                  ? "bg-[#0e0a1d] border-[#38134d] text-[#dabdfa]"
                  : "bg-[#faf2fc] border-[#e9d5fa] text-[#a537e0]"
              }`}
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="font-semibold text-base">
              {t(`about.${s.key}.title`)}
            </span>
          </button>
        ))}
      </div>

      {/* Texto y CV */}
      <div className="max-w-5xl w-full text-left mb-6 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-6">
          <span className={`text-4xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
            {t("about.title1")}
          </span>
          <br />
          <span className={`text-4xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
            {t("about.title2")}
          </span>{" "}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r text-4xl font-bold mb-1 ${
              isDark
                ? "from-[#f43f5e] via-[#a537e0] to-[#6366f1]"
                : "from-orange-400 via-pink-500 to-fuchsia-600"
            }`}
          >
            {t(`about.${selectedService.key}.title`)}.
          </span>
        </h2>

        <p className="text-base md:text-lg mb-4" style={{ color: "var(--text-color)" }}>
          {t(`about.${selectedService.key}.desc`)}
        </p>
        <p className="text-base md:text-lg mb-4" style={{ color: "var(--text-color)" }}>
          {t(`about.${selectedService.key}.details`)}
        </p>

        <a
          href={cvFile}
          download={i18n.language === "es" ? "CV-GioVazquez-ES.pdf" : "CV-GioVazquez-EN.pdf"}
          className={`font-semibold px-6 py-2 rounded-lg shadow transition mx-auto md:mx-0 block text-center md:inline-block ${
            isDark
              ? "bg-white text-[#231d31] hover:bg-[#faf2fc]"
              : "bg-[#a472a8] text-white hover:bg-[#a472a8]"
          }`}
        >
          {i18n.language === "es" ? "Descargar CV" : "Download CV"}
        </a>
      </div>

      {/* Desktop: cards estilo partner */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setSelected(i)}
            className={`flex flex-col items-center justify-center gap-4 p-6 rounded-xl border transition-shadow duration-300 shadow-md hover:shadow-lg text-center
              ${isDark
                ? "bg-[#0e0a1d] border-[#38134d] text-[#dabdfa]"
                : "bg-white border-[#f0e6fa] text-[#3b0764]"
              }
              ${i === selected ? "ring-2 ring-fuchsia-500" : ""}
            `}
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="text-xl font-semibold">{t(`about.${s.key}.title`)}</h3>
            <p className="text-sm opacity-80">{t(`about.${s.key}.desc`)}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

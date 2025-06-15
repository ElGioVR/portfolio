import React from "react";
import { useTranslation } from "react-i18next";

interface StatsBoxProps {
  darkMode: boolean;
}

export default function StatsBox({ darkMode }: StatsBoxProps) {
  const { t } = useTranslation();


  return (
    <div
      className="w-full max-w-5xl mx-auto mt-16 mb-8 rounded-2xl flex flex-col md:flex-row gap-8 relative px-0 md:px-6 md:py-8"
      style={{
        background: darkMode
          ? "rgba(64, 45, 78, 0.0)"
          : "rgba(236, 223, 245, 0.4)",
        boxShadow: darkMode
          ? "0 0 40px 0 rgba(168,85,247,0.15), 0 0 80px 0 rgba(236,72,153,0.10)"
          : "0 0 40px 0 rgba(184, 154, 212, 0.2), 0 0 80px 0 rgba(221, 158, 189, 0.15)",
      }}
    >
      {/* Mobile: 2 en 2 */}
      <div className="flex flex-col w-full gap-6 md:hidden px-6 py-6">
        <div className="flex flex-row gap-6">
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-ecb9f7">25+</div>
            <div className="text-#dabdfa-300 mt-2">{t("main.course")}</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-ecb9f7">98%</div>
            <div className="text-#dabdfa-300 mt-2">{t("main.satisfactionRate")}</div>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-ecb9f7">20+</div>
            <div className="text-#dabdfa-300 mt-2">{t("main.succesfullProjects")}</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-3xl font-bold text-#ecb9f7">13+</div>
            <div className="text-#dabdfa-300 mt-2">{t("main.businessTransformed")}</div>
          </div>
        </div>
      </div>
      {/* Desktop: 4 columnas */}
      <div className="hidden md:flex flex-1 flex-row w-full">
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-bold text-ecb9f7">25+</div>
          <div className="text-#dabdfa-300 mt-2">{t("main.course")}</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-bold text-ecb9f7">98%</div>
          <div className="text-#dabdfa-300 mt-2">{t("main.satisfactionRate")}</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-bold text-ecb9f7">20+</div>
          <div className="text-#dabdfa-3000 mt-2">{t("main.succesfullProjects")}</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl md:text-4xl font-bold text-#ecb9f7">13+</div>
          <div className="text-#dabdfa-300 mt-2">{t("main.businessTransformed")}</div>
        </div>
      </div>
      {/* Efecto neón animado */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none z-0"
        style={{
          border: "2px solid transparent",
          background:
            "linear-gradient(90deg,rgba(168,85,247,0.15),rgba(236,72,153,0.10))",
          filter: "blur(8px)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
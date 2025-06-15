"use client";

import "../../i18n";
import { useTranslation } from "react-i18next";

import StatsBox from "./StatsBox";


// HeroSection Component
export default function HeroSection({ darkMode }: { darkMode: boolean }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] mt-16" id="home">
      <div className="relative w-full flex flex-col items-center">
        <h1
          className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-center leading-tight tracking-tight"
          style={{ color: "var(--text-color)", marginTop: "5rem" }}
        >
          {t("main.title1")}
          <br />
          {t("main.title2")}
          <br />
          <span className="relative">
            <span
              className="text-gradient-wave font-extrabold"
              style={{ position: "relative", zIndex: 2 }}
            >
              FULL STACK
            </span>
            <span className="px-2" />
          </span>
          DEVELOPER
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {(darkMode && (
          <>
            <img
              src="/jd.png"
              alt="JD Group"
              className="w-40 h-35 object-contain"
            />
            <img
              src="https://g-global.com/wp-content/uploads/2023/07/Asset-9.webp"
              alt="G-Global"
              className="w-40 h-35 object-contain"
            />
          </>
        )) || (
          <>
            <img
              src="https://www.jdgroup.net/wp-content/uploads/2023/05/logo-jd-group@2.png"
              alt="JD Group"
              className="w-40 h-35 object-contain"
            />
            <img src="/logo-gg.svg" alt="G-Global" className="w-40 h-35" />
          </>
        )}
      </div>
      <div className="w-full px-4 md:px-0 mb-4 md:mb-8">
        <StatsBox darkMode={darkMode} />
      </div>
    </div>
  );
}
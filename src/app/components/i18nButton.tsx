import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  darkMode?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ darkMode }) => {
  const { i18n } = useTranslation();

  // Renderiza solo en cliente para evitar hydration mismatch
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const current = i18n.language.startsWith("es") ? "es" : "en";

  return (
    <div
      className={`inline-flex rounded-full p-1 ${
        darkMode ? "bg-[#231d31]" : "bg-[#faf2fc]"
      }`}
    >
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`flex items-center px-3 py-1 rounded-full transition-colors text-sm font-semibold
          ${
            current === "en"
              ? darkMode
                ? "bg-[#4c1869] text-white shadow"
                : "bg-white text-[#a21caf] shadow"
              : darkMode
              ? "text-gray-300 hover:bg-[#2d2340]"
              : "text-[#a21caf] hover:bg-[#f3e1fa]"
          }
        `}
        aria-pressed={current === "en"}
      >
        <span style={{ fontSize: "1.5em", lineHeight: 1, marginRight: 6 }}>🗽</span>
        <span className="font-bold tracking-wide">EN</span>
      </button>
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`flex items-center px-3 py-1 rounded-full transition-colors text-sm font-semibold
          ${
            current === "es"
              ? darkMode
                ? "bg-[#4c1869] text-white shadow"
                : "bg-white text-[#a21caf] shadow"
              : darkMode
              ? "text-gray-300 hover:bg-[#2d2340]"
              : "text-[#a21caf] hover:bg-[#f3e1fa]"
          }
        `}
        aria-pressed={current === "es"}
      >
        <span style={{ fontSize: "1.5em", lineHeight: 1, marginRight: 6 }}>🪅</span>
        <span className="font-bold tracking-wide">ES</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
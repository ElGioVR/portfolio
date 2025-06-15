import React from "react";
import CountVisit from "./countVisit";
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { t } = useTranslation();

  const isDark =
    typeof darkMode === "boolean"
      ? darkMode
      : typeof window !== "undefined" &&
        document.body.classList.contains("dark-mode");

  return (
    <footer
      className={`w-full pt-16 pb-8 px-4 md:px-16 ${
        isDark ? "bg-[#120f22]" : "bg-[#fcc0fc]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex-1">
          <div className={`mb-4 font-medium var(--text-color)`}>
            <CountVisit darkMode={darkMode} />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl md:text-4xl font-extrabold var(--text-color)">
              Gio
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark
                    ? "from-[#f43f5e] via-[#a537e0] to-[#6366f1]"
                    : "from-orange-400 via-pink-500 to-fuchsia-600"
                }`}
              >
                Vazquez.
              </span>
            </span>
          </div>
          <div className={`mb-6 var(--text-color)`}>
            {t("footer.description")}
          </div>
        </div>

        {/* Social icons to the right */}
        <div className="flex items-end md:items-start justify-end md:justify-end mt-6 md:mt-0">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/elgiovr/" aria-label="Instagram" className="hover:opacity-80">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/gio-vazquez-rangel-7985bb217/" aria-label="LinkedIn" className="hover:opacity-80">
              <LinkedInIcon />
            </a>
            <a href="https://x.com/ElGioVR" aria-label="Twitter" className="hover:opacity-80">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={`mt-12 text-xs text-center var(--text-color)`}>
        ©2025. {t("footer.madeBy")}{" "}
        <span className="font-semibold">Gio Vazquez</span> {t("footer.with")}{" "}
        <span className="font-semibold">❤️</span>
      </div>
    </footer>
  );
};

export default Footer;

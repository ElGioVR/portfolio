/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // Asegúrate de tener i18next configurado

interface SkillsProps {
  darkMode?: boolean;
}

const skillsData = [
  { key: "webDesign", emoji: "🎨" },
  { key: "frontend", emoji: "💻" },
  { key: "backend", emoji: "🧠" },
  { key: "softSkills", emoji: "🤝" },
  { key: "tools", emoji: "🛠️" },
  { key: "platforms", emoji: "☁️" },
  { key: "languages", emoji: "🗣️" },
  { key: "extra", emoji: "📋" },
];

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, isIntersecting };
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const isDark =
    typeof darkMode === "boolean"
      ? darkMode
      : typeof window !== "undefined" &&
        document.body.classList.contains("dark-mode");

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-6 xl:px-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl" id="skills">
        <h2
          className={`text-4xl font-bold mb-16 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {t("skills.title")}
          <span
            className={`ml-1 text-transparent bg-clip-text bg-gradient-to-r ${
              isDark
                ? "from-[#f43f5e] via-[#a537e0] to-[#6366f1]"
                : "from-orange-400 via-pink-500 to-fuchsia-600"
            }`}
          >
            .
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const { ref, isIntersecting } = useInView({ threshold: 0.2 });

            return (
              <div
                key={skill.key}
                ref={ref}
                className={`rounded-xl p-6 transition-opacity transition-transform duration-700 ease-out
                  ${
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  ${
                    isDark
                      ? "bg-[#0e0a1d] border border-[#32285c] text-white"
                      : "bg-white border border-[#eee0fa] text-[#32124f]"
                  }
                `}
                style={{
                  transitionDelay: isIntersecting ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="text-4xl mb-3">{skill.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{t(`skills.${skill.key}.title`)}</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {t(`skills.${skill.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

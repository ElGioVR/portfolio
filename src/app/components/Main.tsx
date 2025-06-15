"use client";

import { useState, useEffect } from "react";
import AbouthMe from "./abouthMe";
import TimelineExperience from "./experiense";
import "../../i18n";
import { useTranslation } from "react-i18next";
import Skills from "./skills";
import Footer from "./footer";
import Contact from "./contact";
import ConfferyVisit from "./conffety";


import NavBar from "./NavBar";
import AnimatedBackground from "./animateBackGround";
import HeroSection from "./heroSection";


export default function Main() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newVisit, setNewVisit] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t('menu.home'), href: "#home" },
    { label: t('menu.about'), href: "#about" },
    { label: t('menu.experience'), href: "#experience" },
    { label: t('menu.skills'), href: "#skills" },
    { label: t('menu.contact'), href: "#contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const alreadyVisited = localStorage.getItem("confetty")
    if (!alreadyVisited) {
      setNewVisit(true);
    }
  }, []);


  return (
    <section
      className="min-h-screen w-full font-sans relative overflow-hidden"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--background)",
        transition: "color 0.3s",
      }}
    >
      <NavBar
        darkMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
      />

      {newVisit && <ConfferyVisit trigger={newVisit} />}


      <AnimatedBackground darkMode={darkMode} />

      <HeroSection darkMode={darkMode} />

      <div className="w-full flex justify-center mt-16 mb-16" id="about">
        <AbouthMe darkMode={darkMode} />
      </div>

      <div className="w-full flex justify-center mt-26 mb-26" id="experience">
        <TimelineExperience darkMode={darkMode} />
      </div>

      <div className="w-full flex justify-center mt-26 mb-26" id="skills">
        <Skills darkMode={darkMode} />
      </div>

      <div className="w-full flex justify-center mt-26" id="contact">
        <Contact darkMode={darkMode} />
      </div>

      <div className="w-full flex justify-center">
        <Footer darkMode={darkMode} />
      </div>

      {/* Botón de cambio de modo oscuro/claro */}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 w-14 h-14 p-0 flex items-center justify-center rounded-full shadow-lg transition z-20 overflow-hidden"
        style={{
          boxShadow:
            "0 0 40px 0 rgba(168,85,247,0.15), 0 0 80px 0 rgba(236,72,153,0.10)",
          backdropFilter: "blur(8px)",
          borderRadius: "50%",
        }}
      >
        <span className="relative z-10 flex items-center justify-center">
          {darkMode ? (
            <img src="/sun.svg" alt="Light Mode" className="w-6 h-6" />
          ) : (
            <img src="/moon.svg" alt="Dark Mode" className="w-6 h-6" />
          )}
        </span>
        {/* Borde animado tipo neón */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            padding: 2,
            background:
              "linear-gradient(270deg, #a21caf, #f43f5e, #6366f1, #a21caf)",
            backgroundSize: "400% 400%",
            animation: "neon-border 6s linear infinite",
            zIndex: 1,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderRadius: "50%",
          }}
        />
      </button>
    </section>
  );
}
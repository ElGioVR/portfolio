"use client";

import "../../i18n";
import I18nButton from "./i18nButton";
import { useRef } from "react";

interface NavBarProps {
  darkMode: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navLinks: { label: string; href: string }[];
}

export default function NavBar({ darkMode, menuOpen, setMenuOpen, navLinks }: NavBarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* NAVBAR NORMAL SOLO SI NO ESTÁ EL MENÚ COLAPSADO */}
      {!menuOpen && (
        <nav
          className="flex justify-between items-center px-6 md:px-12 py-4 w-full fixed top-0 left-0 z-30"
          style={{
            background: darkMode
              ? "rgba(41, 29, 49, 0.3)"
              : "rgba(219, 203, 230, 0.5)",
            backdropFilter: "blur(2px)",
            minHeight: "60px",
          }}
        >
          {/* Botón móvil a la izquierda */}
          <div className="md:hidden flex items-center order-1">
            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>

          {/* GIO VAZQUEZ e idioma al centro en móvil */}
<div className="flex flex-1 md:hidden items-center justify-between order-2">
  <span className="font-bold text-xl" style={{ color: "var(--text-color)", marginLeft: "1rem" }}>
    GIO VAZQUEZ
  </span>
  <div className="ml-4 flex items-center justify-end">
    <I18nButton darkMode={darkMode} />
  </div>
</div>

          {/* Menú desktop */}
          <div
            className={`
              flex-col md:flex-row md:flex gap-8 absolute md:static top-full right-0 w-full md:w-auto shadow md:shadow-none transition-all duration-300
              hidden md:flex
              ${darkMode ? "md:bg-transparent bg-[#231d31]" : "md:bg-transparent bg-white"}
              text-center pr-6 md:pr-0
              h-screen md:h-auto
              overflow-y-auto md:overflow-visible
            `}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-purple-400 transition-colors px-6 py-4 md:p-0"
                style={{ color: "var(--text-color)", fontSize: ".9rem" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Escritorio: GIO VAZQUEZ y contacto */}
          <div className="hidden md:block">
            <div className="inline-block ml-4">
              <I18nButton darkMode={darkMode} />
            </div>
          </div>
        </nav>
      )}

      {/* MENÚ COLAPSABLE MÓVIL */}
      <div
        ref={menuRef}
        className={`
          fixed inset-0 z-50 flex flex-col
          ${darkMode ? "bg-[#231d31]" : "bg-[#fde9f8]"}
          bg-opacity-100
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
          md:hidden
        `}
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Header del menú colapsable */}
        <div className="flex items-center w-full px-8 pt-8 pb-2">
          {/* Botón cerrar a la izquierda */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl ml-1"
            aria-label="Close menu"
          >
            <svg
              className="w-15 h-15"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Texto a la derecha */}
        </div>
        <nav className="w-full mt-4">
          <ul className="flex flex-col gap-6 w-full px-8 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 text-[2.7rem] font-semibold text-right
                    ${darkMode ? "text-[#f0c0f7] hover:text-[#a78bfa]" : "text-[#2d133b] hover:text-[#a21caf]"}
                    transition-colors
                  `}
                  onClick={() => setMenuOpen(false)}
                  style={{ lineHeight: "4.2rem" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
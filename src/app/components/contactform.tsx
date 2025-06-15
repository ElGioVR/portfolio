"use client";

import React, { useState } from "react";
import Person from "../components/person";
import ConfferyVisit from "../components/conffety";
import ThankYouContact from "../components/ThanksYouContact";

import "../../i18n";
import { useTranslation } from "react-i18next";

interface GetAQuoteSectionProps {
  darkMode?: boolean;
}

export default function GetAQuoteSection({ darkMode }: GetAQuoteSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const { name, email, message, budget } = form;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, budget, lang }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowThankYou(true);
        }, 3000);
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isDark =
    typeof darkMode === "boolean"
      ? darkMode
      : typeof window !== "undefined" &&
        document.body.classList.contains("dark-mode");

  return (
    <section
      className={`flex flex-col items-center justify-center gap-10 px-6 py-2 md:py-4 transition-colors duration-300 ${
        isDark ? "bg-[#15003b]" : "bg-[#fdc9bf]"
      }`}
    >
      {submitted && <ConfferyVisit trigger={true} />}

      {showThankYou ? (
        <div>
          <ThankYouContact darkMode={darkMode} />
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left: Title and Illustration */}
          <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center justify-between text-left md:items-start">
            <div className="flex-1 order-1 md:order-none text-left mb-2 md:mb-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t("contact.title")}
                <br />
                <span className={isDark ? "text-gray-300" : "text-gray-500"}>
                  {t("contact.subtitle")}
                </span>
              </h1>
            </div>
            <div className="flex-1 order-2 md:order-none mt-2 md:mt-4 text-right md:text-left">
              <Person name={form.name} submitted={submitted} />
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="w-full md:w-1/2 max-w-md flex flex-col gap-7"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-5">
              <input
                type="text"
                placeholder={t("contact.name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`flex-1 px-4 py-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#18122b] border-[#a472a8] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#a537e0]"
                    : "bg-white border-[#a472a8] text-[#231d31] placeholder-gray-500 focus:ring-2 focus:ring-[#a537e0]"
                }`}
                required
              />
              <input
                type="email"
                placeholder={t("contact.email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`flex-1 px-4 py-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#18122b] border-[#a472a8] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#f43f5e]"
                    : "bg-white border-[#a472a8] text-[#231d31] placeholder-gray-500 focus:ring-2 focus:ring-[#f43f5e]"
                }`}
                required
              />
            </div>

            <textarea
              placeholder={t("contact.message")}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`px-4 py-3 rounded-lg border outline-none transition-all ${
                isDark
                  ? "bg-[#18122b] border-[#a472a8] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#a537e0]"
                  : "bg-white border-[#a472a8] text-[#231d31] placeholder-gray-500 focus:ring-2 focus:ring-[#a537e0]"
              }`}
              rows={4}
              required
            />

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
                  isDark
                    ? "bg-[#18122b] border-[#a472a8] text-white focus:ring-2 focus:ring-[#a537e0]"
                    : "bg-white border-[#a472a8] text-[#231d31] focus:ring-2 focus:ring-[#a537e0]"
                }`}
              >
                <option value="">{t("contact.selectBudget")}</option>
                <option value="Less than $1,000">{t("contact.budget1")}</option>
                <option value="$1,000 - $5,000">{t("contact.budget2")}</option>
                <option value="$5,000 - $10,000">{t("contact.budget3")}</option>
                <option value="More than $10,000">{t("contact.budget4")}</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
              <span
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t("contact.noForm")}{" "}
                <a href="mailto:hello@significa.co" className="underline">
                  hello@gioprofile.co
                </a>
              </span>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-semibold shadow transition-all flex items-center gap-2 ${
                  isDark
                    ? "bg-white text-[#231d31] hover:bg-[#faf2fc]"
                    : "bg-[#231d31] text-white hover:bg-[#a472a8]"
                } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? t("contact.sending") : t("contact.send")}
                {!loading && <span aria-hidden>→</span>}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

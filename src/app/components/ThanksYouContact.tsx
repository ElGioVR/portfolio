import React from "react";
import { useTranslation } from "react-i18next";
import "../../../public/css/thx.css";

interface ThankYouContactProps {
  darkMode?: boolean;
}

const ThankYouContact = ({ darkMode }: ThankYouContactProps) => {
  const { t } = useTranslation();

  return (
    <div className={`thankyou-container ${darkMode ? "dark" : "light"}`}>
      <img
        src="../me.png"
        alt="Person"
        className="person-img"
        style={{
          background: darkMode
            ? "linear-gradient(to right, #f43f5e, #a537e0, #6366f1)"
            : "linear-gradient(to right, #f97316, #ec4899, #d946ef)",
        }}
      />
      <div className="thankyou-text">
        <h2>{t("thankyouContact.title")}</h2>
        <p>{t("thankyouContact.message")}</p>
      </div>
    </div>
  );
};

export default ThankYouContact;

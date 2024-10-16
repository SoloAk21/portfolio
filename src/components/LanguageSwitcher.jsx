import React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  // Determine the next language based on the current language
  const nextLang = i18n.language === "en" ? "am" : "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="flex justify-center items-center font-extralight text-primary cursor-pointer"
    >
      {t("switch", { lang: nextLang })} {/* Correctly passing nextLang here */}
      <FaCaretDown style={{ marginLeft: "5px" }} />
    </div>
  );
}

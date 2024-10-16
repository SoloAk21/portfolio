import React from "react";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ isOpen, onClose, darkMode }) => {
  const { t } = useTranslation();
  return (
    isOpen && (
      <div
        className={`fixed top-0 left-0 h-screen w-64 p-4 z-40 transition-all duration-300 ease-in-out ${
          darkMode ? "bg-gray-800 text-slate-200" : "bg-slate-200 text-gray-800"
        }`}
      >
        <div className="flex justify-between py-4 ">
          <img src="assets/images/soloak.png" width={40} alt="SoloAk" />
          <IoMdClose className="icon cursor-pointer" onClick={onClose} />
        </div>

        <NavLinks onClick={onClose} />
        <button className="btn mt-4">{t("hireMe")}</button>
      </div>
    )
  );
};

export default MobileMenu;

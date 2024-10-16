import React from "react";
import { NAV_LINKS } from "../constants/constants";
import { useTranslation } from "react-i18next";

const NavLinks = ({ onClick }) => {
  const { i18n, t } = useTranslation();

  return (
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
      {NAV_LINKS.map((link) => (
        <li className="nav-li" key={link.id}>
          <a href={`#${link.id}`} className="nav-li_a" onClick={onClick}>
            {t(link.label[i18n.language])}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

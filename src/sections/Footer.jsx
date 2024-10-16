import React from "react";
import { NAV_LINKS, SOCIAL_MEDIA } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail, MdOutlineFileDownload } from "react-icons/md";
import NavLinks from "../components/NavLinks";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <footer className="footer-container">
      <div>
        <img src="assets/images/soloak.png" width={80} alt="SoloAk" />
      </div>
      <div className="c-space">
        <ul className="flex flex-row gap-2 md:gap-4">
          {NAV_LINKS.map((link) => (
            <li className="nav-li" key={link.id}>
              <a href={`#${link.id}`} className="nav-li_a">
                {t(link.label[i18n.language])}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 md:m-16">
        <div>
          <div className="flex justify-center space-x-4">
            {SOCIAL_MEDIA.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.link}
                  className="social-icon"
                  aria-label={social.label}
                >
                  <IconComponent className="s-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="contact-item">
          <MdOutlineEmail /> <a href="#">soloasefa6603@gmail.com</a>
        </div>
        <div className="contact-item">
          <LuPhone /> <a href="#">+2519 6603 6251</a>
        </div>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} SoloAk. {t("allRightsReserved")}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_DATA } from "../constants/constants";
import { MdOutlineFileDownload } from "react-icons/md";
import { downloadAndOpenFile } from "../utils/fileUtils";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // Retrieve current language for translations

  // Function to handle resume download and open
  const handleDownloadAndOpen = () => {
    const fileUrl = "assets/images/soloak-resume.png";
    const fileName = "soloak-resume.png";
    downloadAndOpenFile(fileUrl, fileName, true);
  };
  return (
    <div className="tools-container">
      <div className="tools-title">{t(ABOUT_DATA.title[currentLanguage])}</div>
      <div className="tools-desc">
        {t(ABOUT_DATA.description[currentLanguage])}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
        {/* Profile Image and Shape Container */}
        <div className="relative flex-1 flex items-center justify-center max-w-[400px] max-h-[618px]">
          {/* Shape - Half Circle */}
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[480px] bg-[#5f5f5f] opacity-5 transform -translate-x-1/2 rounded-tl-full rounded-tr-full z-0" />

          {/* Profile Image */}
          <img
            src="assets/images/profile.png"
            alt="Profile"
            className="w-[400px] h-[618px] object-cover object-top z-10 opacity-50 grayscale"
          />
        </div>

        {/* Text Content */}
        <div className="relative flex-1 text-center mt-4 md:mt-0">
          {ABOUT_DATA.sections.map((section, index) => (
            <div key={index} className="about-info">
              <div className="about-title">
                {t(section.title[currentLanguage])}
              </div>
              <div className="about-desc">
                {t(section.description[currentLanguage])}
              </div>
            </div>
          ))}

          {/* Additional Info Section */}
          <div className="about-title">
            {t(ABOUT_DATA.additionalInfo.title[currentLanguage])}
          </div>
          <div className="about-desc">
            {t(ABOUT_DATA.additionalInfo.description[currentLanguage])}
          </div>
          <div className="flex justify-center">
            <button
              className="btn-outlined flex gap-1 justify-center items-center"
              onClick={handleDownloadAndOpen}
            >
              {t("resume")} <MdOutlineFileDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

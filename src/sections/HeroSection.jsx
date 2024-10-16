// src/components/HeroSection.js

import React from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_MEDIA } from "../constants/constants";
import { MdOutlineFileDownload } from "react-icons/md";
import { downloadAndOpenFile } from "../utils/fileUtils";
import { motion } from "framer-motion"; // Import framer-motion
import TypingEffect from "react-typing-effect";

const HeroSection = () => {
  const { t } = useTranslation();

  // Function to handle resume download and open
  const handleDownloadAndOpen = () => {
    const fileUrl = "assets/images/soloak-resume.png";
    const fileName = "soloak-resume.png";
    downloadAndOpenFile(fileUrl, fileName, true);
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-8 lg:p-10 h-auto z-0">
      <motion.div
        className="flex-1 flex-col md:flex-row gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
          <div>
            <motion.div className="hero-greeting" variants={textVariants}>
              {t("greeting")}
            </motion.div>
            <motion.div className="name hero-title" variants={textVariants}>
              {t("fullName")}
            </motion.div>
            <motion.div
              className="profession hero-subtitle md:mt-4"
              variants={textVariants}
            >
              <TypingEffect
                text={[t("profession")]}
                speed={200} // Typing speed (ms)
                eraseSpeed={50} // Erase speed (ms)
                typingDelay={500} // Delay before typing starts (ms)
                eraseDelay={2000} // Delay before erasing starts (ms)
                cursor={<span className="typing-cursor">|</span>}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10 md:m-16">
          <div>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              {SOCIAL_MEDIA.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    className="social-icon"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2 }} // Hover animation
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="icon s-icon" />
                  </motion.a>
                );
              })}
            </div>
          </div>
          <motion.div
            className="flex justify-center gap-4"
            variants={textVariants}
          >
            <button className="btn">{t("hireMe")}</button>
            <button
              className="btn-outlined flex gap-1 justify-center items-center"
              onClick={handleDownloadAndOpen}
            >
              {t("resume")} <MdOutlineFileDownload />
            </button>
          </motion.div>
          <motion.div
            className="container flex justify-center divide-x divide-gray-300 dark:divide-gray-600 rounded-md bg-section dark:bg-dark-section shadow-lg"
            style={{ maxWidth: "420px" }}
            variants={textVariants}
          >
            <div className="experience-block">
              <div className="experience-number">3+</div>
              <div className="experience-description">{t("experience")}</div>
            </div>
            <div className="experience-block">
              <div className="experience-number">10+</div>
              <div className="experience-description">{t("projectsDone")}</div>
            </div>
            <div className="experience-block">
              <div className="experience-number">5+</div>
              <div className="experience-description">{t("happyClients")}</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="hidden relative md:flex justify-center items-center h-[618px]">
        <div className="absolute w-[400px] h-[480px] rounded-full bottom-0" />
        <div className="hero-circle" />
        <div className="absolute inset-0 rounded-full" />
        <div className="relative z-10 w-[400px] h-[618px] rounded-full overflow-hidden">
          <motion.img
            src="assets/images/profile.png"
            alt={t("fullName")}
            className="object-cover w-full h-full"
            style={{ objectPosition: "top" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

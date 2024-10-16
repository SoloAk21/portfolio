import React from "react";
import { useTranslation } from "react-i18next";
import { PROJECT_DATA } from "../constants/constants";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="projects-container">
      <h2
        className="projects-title   ;
;
"
      >
        {t(PROJECT_DATA.title[currentLanguage])}
      </h2>
      <p className="projects-desc">
        {t(PROJECT_DATA.description[currentLanguage])}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECT_DATA.projects.map((project, index) => (
          <div
            key={index}
            className="project-card hover-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-content">
              <h3 className="project-title">
                {project.title[currentLanguage]}
              </h3>
              <p className="project-description">
                {project.description[currentLanguage]}
              </p>
              <p className="project-techStack">
                <strong>{t("Tech Stack")}:</strong> <br />
                {project.techStack[currentLanguage]}
              </p>
              <div className="project-links self-end">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.githubLink[currentLanguage]}
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.liveSite[currentLanguage]}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

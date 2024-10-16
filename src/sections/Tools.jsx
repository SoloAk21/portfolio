import React from "react";
import { TOOLS_DATA } from "../constants/constants";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="tools-container">
      <div className="tools-title">{t("essentialTools")}</div>
      <div className="tools-desc">{t("toolsDescription")}</div>

      <div className="tools-grid">
        {TOOLS_DATA.map((tool) => (
          <div key={tool.id} className="tool-card">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="tool-logo"
            />
            <div>
              <div className="tool-name">{tool.name[i18n.language]}</div>
              <div className="tool-type">{tool.type[i18n.language]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

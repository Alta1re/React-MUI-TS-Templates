import React from "react";

// material-ui components
import IconButton from "@mui/material/IconButton";

// import flags
import gerFlag from "assets/icons/germany.png";
import ukFlag from "assets/icons/united-kingdom.png";

// import i18n
import { useTranslation } from "utils/i18n";

interface lang {
  icon: string;
  alt: string;
}

const lngs: { [key: string]: lang } = {
  en: { icon: ukFlag, alt: "ukFlag" },
  de: { icon: gerFlag, alt: "germanFlag" },
};

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {Object.keys(lngs).map((lng: string) => (
        <IconButton key={lng} onClick={() => i18n.changeLanguage(lng)}>
          <img src={lngs[lng].icon} width={28} alt={lngs[lng].alt} />
        </IconButton>
      ))}
    </div>
  );
};

export default LanguageSwitch;

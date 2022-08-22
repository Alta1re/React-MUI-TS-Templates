import React, { useState } from "react";
import Layout from "./Layout/Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { ThemeContext } from "./context/themeContext";
import { LanguageContext } from "./context/languageContext";

// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import main css
import "./App.css";

// hoc
import withGlobalAlert from "hoc/withGlobalAlert";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [langu, setLangu] = useState<"de" | "en">("de");

  const themeMode = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const languageMode = {
    setLanguage: function (lang: "de" | "en") {
      setLangu(lang);
    },
    language: langu,
  };

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      mode: mode,
      primary: {
        main: "#255e66",
      },
      secondary: {
        main: "#d4d46a",
      },
    },
  });

  return (
    <div className="App">
      <ThemeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <LanguageContext.Provider value={languageMode}>
            <Layout />
          </LanguageContext.Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default withGlobalAlert(App);

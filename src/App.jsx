import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { getDesignTokens } from "./pages/theme";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("theme")
  );
  // @ts-ignore
  const theme = createTheme(getDesignTokens(selectedTheme));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setSelectedTheme={setSelectedTheme} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "130px" }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

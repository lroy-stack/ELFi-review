import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import HeroSection from "./components/HeroSection/HeroSection";
import AirdropFarming from "./components/AirdropFarming/AirdropFarming";
import FeaturesTop from "./components/Features/FeaturesTop"; // Importa FeaturesTop desde la carpeta Features
import FeaturesBlocks from "./components/Features/FeaturesBlocks"; // Importa FeaturesBlocks desde la carpeta Features
import Faq from "./components/Faq/Faq";
import MiniPage from "./components/MiniPage/MiniPage";
import ProjectRoadmap from "./components/ProjectRoadmap"; // Importa el componente ProjectRoadmap correctamente

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeroSection />
    <AirdropFarming />
    <FeaturesTop /> {/* Sección de las dos primeras filas */}
    <MiniPage /> {/* Mini página */}
    <FeaturesBlocks /> {/* Sección de los bloques restantes */}
    <ProjectRoadmap /> {/* Agrega el Roadmap del Proyecto */}
    <Faq />
  </ThemeProvider>
);

export default App;
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Mantener contenido en la parte superior
      alignItems: "center",
      textAlign: "center",
      py: 2, // Padding ajustado
      px: 3,
      background: "linear-gradient(180deg, #FF9900 0%, #FF6600 100%)", // Degradado en naranja
      backgroundImage: "url('/images/liquid-provider.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
    }}
  >
    {/* Título principal */}
    <Container
      maxWidth="md"
      sx={{
        mt: 0, // Sin margen superior
        zIndex: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 1, // Reducimos el margen inferior del título
          color: "#2F1C6A", // Púrpura oscuro para destacar
        }}
      >
        Bienvenido a ELFi
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold", // Negrita para mejorar legibilidad
          color: "#2F1C6A",
          lineHeight: 1.6,
          mt: -1, // Subimos solo la descripción
        }}
      >
        ELFi es una plataforma descentralizada de trading perpetuo que ofrece
        flexibilidad, seguridad y control total.
      </Typography>
    </Container>
  </Box>
);

export default HeroSection;
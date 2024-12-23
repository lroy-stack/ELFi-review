import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildIcon from "@mui/icons-material/Build";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const roadmapSteps = [
  {
    phase: "Fase 1: Lanzamiento Demo y Financiación Inicial",
    description:
      "Se presentó la demo de la plataforma y se completó la ronda de financiación inicial para sentar las bases del desarrollo del protocolo.",
    icon: <CheckCircleIcon sx={{ fontSize: 50, color: "#2E7D32" }} />,
    date: "2023",
  },
  {
    phase: "Fase 2: Testnet y Mainnet",
    description:
      "Lanzamiento del Testnet en el primer trimestre del 2024 seguido del despliegue del Mainnet en el segundo trimestre, estableciendo la plataforma completamente funcional.",
    icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#0288D1" }} />,
    date: "Q1~Q2 2024",
  },
  {
    phase: "Fase 3: Ampliación de Funcionalidades",
    description:
      "Soporte para Polymarket y diversos derivados populares. Lanzamiento del programa de afiliados para incrementar la adopción global.",
    icon: <BuildIcon sx={{ fontSize: 50, color: "#F9A825" }} />,
    date: "Q3~Q4 2024",
  },
  {
    phase: "Fase 4: Protocolo de Derivados Descentralizados",
    description:
      "Lanzamiento de un protocolo de derivados que admite trading sin permisos y la creación de plataformas de trading personalizadas.",
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: "#D84315" }} />,
    date: "2025",
  },
];

const ProjectRoadmap = () => (
  <Box sx={{ py: 5, px: 3, backgroundColor: "#FAFAFA" }}>
    {/* Título de la sección */}
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontWeight: "bold",
        color: "primary.main",
        textAlign: "center",
        mb: 3,
      }}
    >
      Roadmap del Proyecto
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: "text.secondary", mb: 4 }}
    >
      Este roadmap proporciona una visión clara de las etapas estratégicas para el desarrollo de **ELFi.xyz**, destacando sus objetivos clave hacia la innovación en trading descentralizado.
    </Typography>

    {/* Roadmap */}
    <Grid container spacing={4}>
      {roadmapSteps.map((step, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            sx={{
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              p: 2,
              background:
                index % 2 === 0
                  ? "linear-gradient(145deg, #ffffff, #e8f5e9)"
                  : "linear-gradient(145deg, #ffffff, #e3f2fd)",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
              }}
            >
              <Box sx={{ mb: 2 }}>{step.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: index % 2 === 0 ? "#2E7D32" : "#0288D1",
                }}
              >
                {step.phase}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                {step.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "primary.contrastText",
                  fontWeight: "bold",
                  backgroundColor:
                    index % 2 === 0 ? "#C8E6C9" : "#BBDEFB",
                  px: 2,
                  py: 0.5,
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                {step.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    {/* Nota final */}
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", mb: 2 }}
      >
        Este roadmap es una representación oficial de las metas de **ELFi.xyz** y puede estar sujeto a modificaciones para reflejar las necesidades del mercado y la comunidad.
      </Typography>
    </Box>
  </Box>
);

export default ProjectRoadmap;
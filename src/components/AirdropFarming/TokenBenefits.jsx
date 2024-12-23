import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TaskIcon from "@mui/icons-material/Task";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const TokenBenefits = () => (
  <Box sx={{ py: 5, px: 3, backgroundColor: "#f9f9f9" }}>
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
      Ventajas del Token ELFi
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: "text.secondary", mb: 4 }}
    >
      El token ELFi ofrece múltiples beneficios para maximizar tu experiencia en
      el ecosistema descentralizado.
    </Typography>

    {/* Beneficios */}
    <Grid container spacing={4} justifyContent="center">
      {[
        {
          title: "Staking y Gobernanza",
          description:
            "Participa en decisiones clave del protocolo y gana recompensas pasivas mientras contribuyes al desarrollo del ecosistema.",
          icon: <WalletIcon />,
        },
        {
          title: "Tarifas Reducidas",
          description:
            "Disfruta de descuentos significativos en tarifas de trading perpetuo, haciéndolo más rentable y competitivo.",
          icon: <SwapHorizIcon />,
        },
        {
          title: "Recompensas Exclusivas",
          description:
            "Accede a desafíos únicos, eventos comunitarios y recompensas reservadas para los usuarios más activos.",
          icon: <TaskIcon />,
        },
        {
          title: "Seguridad Mejorada",
          description:
            "Tus activos están protegidos por contratos inteligentes auditados, garantizando un entorno seguro y confiable.",
          icon: <SecurityIcon />,
        },
        {
          title: "Aumento del Valor del Token",
          description:
            "Con un modelo de suministro controlado, el valor del token ELFi aumenta conforme crece la adopción del protocolo.",
          icon: <TrendingUpIcon />,
        },
      ].map((benefit, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: "center",
              background:
                "linear-gradient(145deg, #ffffff, #f3f3f3)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
              "&:hover": {
                transform: "translateY(-5px)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 2,
                backgroundColor: "primary.main",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: 40,
              }}
            >
              {benefit.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {benefit.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {benefit.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default TokenBenefits;
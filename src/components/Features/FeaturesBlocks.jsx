import React from "react";
import { Grid, Card, CardContent, Typography, Box, Container, Divider } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsightsIcon from "@mui/icons-material/Insights";

const features = [
  {
    title: "Gestión de Riesgos",
    description:
      "ELFi protege tus activos con un sistema avanzado basado en contratos inteligentes auditados. Estos contratos aseguran la estabilidad y confianza del entorno de trading, incluso en condiciones de alta volatilidad, manteniendo tus operaciones seguras y transparentes en todo momento.",
    icon: <SecurityIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Flexibilidad Multi-Activo",
    description:
      "Diversifica tus estrategias al operar con una amplia gama de activos, incluyendo criptomonedas, stablecoins y más. Esta flexibilidad te permite adaptar tu portafolio a cualquier condición de mercado, maximizando tus opciones de inversión y mitigando riesgos.",
    icon: <SwapHorizIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Descentralización Total",
    description:
      "Con ELFi, tienes el control absoluto de tus fondos sin la necesidad de intermediarios. Al operar directamente en la blockchain, puedes disfrutar de una autonomía total, junto con transparencia y seguridad en cada transacción que realices.",
    icon: <AccountBalanceIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
  {
    title: "Análisis y Estadísticas",
    description:
      "Accede a un conjunto completo de herramientas analíticas avanzadas que te permiten visualizar métricas clave de tus operaciones y detectar tendencias del mercado. Estas estadísticas te ayudarán a optimizar tus estrategias y tomar decisiones informadas en tiempo real.",
    icon: <InsightsIcon sx={{ fontSize: 50, color: "primary.main" }} />,
  },
];

const FeaturesBlocks = () => (
  <Container sx={{ py: 5 }}>
    {/* Título */}
    <Box textAlign="center" mb={5}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Ventajas Clave de ELFi
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
        Descubre cómo ELFi transforma el trading con herramientas avanzadas y una experiencia de usuario inigualable.
      </Typography>
      <Divider sx={{ width: "50%", mx: "auto", my: 3, borderColor: "primary.main" }} />
    </Box>

    {/* Características en una sola fila */}
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} md={3} key={index}> {/* Divide en 4 columnas iguales */}
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              boxShadow: 3,
              background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
              borderRadius: "16px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "primary.light",
                mx: "auto",
              }}
            >
              {feature.icon}
            </Box>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "primary.main" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FeaturesBlocks;
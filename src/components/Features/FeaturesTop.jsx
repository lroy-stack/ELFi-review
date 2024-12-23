import React from "react";
import { Grid, Card, CardContent, Typography, Box, Container } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const FeaturesTop = () => (
  <Container sx={{ py: 5 }}>
    {/* Título e Introducción */}
    <Box textAlign="center" mb={5}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Características Principales de ELFi
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
        Explora cómo ELFi lleva el trading de derivados al siguiente nivel con funcionalidades avanzadas y seguras.
      </Typography>
    </Box>

    {/* Primera Fila: Trading Perpetuo */}
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <img
          src="/images/cross.png"
          alt="Trading Perpetuo"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            textAlign: "center",
            p: 3,
            boxShadow: 3,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <TrendingUpIcon sx={{ fontSize: 50, color: "primary.main" }} />
          </Box>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Trading Perpetuo
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Los contratos perpetuos en ELFi te permiten mantener posiciones abiertas sin límite de tiempo, eliminando las restricciones de vencimiento habituales. Diseñados para adaptarse a cualquier estrategia, te ofrecen flexibilidad total para maximizar tus ganancias en mercados dinámicos y volátiles.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    {/* Segunda Fila: Margin Mode */}
    <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            textAlign: "center",
            p: 3,
            boxShadow: 3,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <AllInclusiveIcon sx={{ fontSize: 50, color: "primary.main" }} />
          </Box>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Margin Cross e Isolated
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              En ELFi, el Margin Cross comparte tu saldo disponible como margen entre todas las posiciones, optimizando el uso del capital. El Margin Isolated, en cambio, te permite asignar un margen específico para cada posición, proporcionando un control más detallado y una gestión de riesgo personalizada.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="/images/margin.png"
          alt="Margin Mode"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            margin: "0 auto",
          }}
        />
      </Grid>
    </Grid>
  </Container>
);

export default FeaturesTop;
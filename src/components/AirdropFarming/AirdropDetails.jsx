import React from "react";
import { Grid, Typography, Paper, Box, Divider, Link } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ListIcon from "@mui/icons-material/List";

const AirdropDetails = () => (
  <Box sx={{ py: 5, px: 3, backgroundColor: "#f9f9f9" }}>
    {/* Título de la Sección */}
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
      Meme Pool Launch Event
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: "text.secondary", mb: 4 }}
    >
      Participa en el evento oficial de lanzamiento de <b>Meme Pool</b> para ganar
      una parte del premio total de <b>5,000 USDC</b>. ¡Depósita y opera para ganar!
    </Typography>
    <Divider sx={{ width: "50%", mx: "auto", my: 3, borderColor: "primary.main" }} />

    {/* Actividad 1: Bono de Depósito */}
    <Typography
      variant="h5"
      gutterBottom
      sx={{
        fontWeight: "bold",
        color: "primary.main",
        textAlign: "center",
        mt: 4,
      }}
    >
      Actividad 1: Bono de Depósito
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
          }}
        >
          <AttachMoneyIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Detalles del Bono</Typography>
          <Typography sx={{ color: "text.secondary", mt: 1 }}>
            Deposita al menos <b>50 USDT/USDC</b> para recibir un bono de <b>20 USDC</b>, o más de <b>200 USDT/USDC</b> para obtener un bono de <b>50 USDC</b>.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Reglas</Typography>
          <Typography sx={{ color: "text.secondary", mt: 1 }}>
            Los bonos se emiten dentro de <b>48 horas</b> después del depósito. Cada usuario solo puede recibir el bono una vez.
            <br />
            <b>Premios totales: 4,000 USDC (por orden de llegada).</b>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/bonus.svg"
            alt="Bono de Depósito"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
    </Grid>

    {/* Actividad 2: Competencia de Volumen de Trading */}
    <Typography
      variant="h5"
      gutterBottom
      sx={{
        fontWeight: "bold",
        color: "primary.main",
        textAlign: "center",
        mt: 5,
      }}
    >
      Actividad 2: Competencia de Volumen de Trading
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2, justifyContent: "center" }}>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
          }}
        >
          <ListIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Requisitos</Typography>
          <Typography sx={{ color: "text.secondary", mt: 1 }}>
            Los usuarios deben alcanzar un volumen de trading mínimo de <b>100,000 USD</b> en contratos de Meme Pool para calificar en la tabla de clasificación.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Recompensas</Typography>
          <Typography sx={{ color: "text.secondary", mt: 1 }}>
            <b>1er Lugar:</b> 500 USDC<br />
            <b>2do Lugar:</b> 300 USDC<br />
            <b>3er Lugar:</b> 200 USDC<br />
            Total: <b>1,000 USDC</b>
          </Typography>
        </Paper>
      </Grid>
    </Grid>

    {/* Información adicional */}
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", mb: 2 }}
      >
        <b>Pares de trading elegibles:</b> 1000FLOKI-USD, NEIRO-USD, NOT-USD, BOME-USD, ACT-USD, DOGE-USD, y más. Consulta la lista completa en la{" "}
        <Link
          href="https://app.elfi.xyz/bonus-airdrop"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", textDecoration: "none", fontWeight: "bold" }}
        >
          página oficial del evento.
        </Link>
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        Los premios se distribuyen dentro de los <b>7 días hábiles</b> posteriores al final del evento.
      </Typography>
    </Box>
  </Box>
);

export default AirdropDetails;
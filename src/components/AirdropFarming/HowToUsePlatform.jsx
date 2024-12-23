import React from "react";
import { Grid, Typography, Paper, Box, Button } from "@mui/material";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import TaskIcon from "@mui/icons-material/Task";

const HowToUsePlatform = () => (
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
      ¿Cómo Usar la Plataforma ELFi.xyz?
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: "text.secondary", mb: 4 }}
    >
      Sigue esta guía detallada para aprovechar al máximo todas las funcionalidades de ELFi.xyz y convertirte en un experto en trading descentralizado.
    </Typography>

    {/* Pasos para usar la plataforma */}
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {[
        {
          title: "Paso 1: Conecta tu Wallet",
          description: (
            <>
              Accede a <a href="https://elfi.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>ELFi.xyz</a> y conecta tu wallet compatible (<a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>MetaMask</a>, <a href="https://walletconnect.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>WalletConnect</a>, u otras) a la red Arbitrum. Este paso es esencial para interactuar con la plataforma.
            </>
          ),
          icon: <WalletIcon />,
        },
        {
          title: "Paso 2: Depósito de Fondos",
          description: (
            <>
              Transfiere <a href="https://www.circle.com/en/usdc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>stablecoins (USDC, USDT)</a> o criptomonedas compatibles desde tu wallet hacia la plataforma para comenzar a operar. Verifica las tasas de red en el panel de depósitos.
            </>
          ),
          icon: <SecurityIcon />,
        },
        {
          title: "Paso 3: Realiza Trading",
          description: (
            <>
              Explora los <a href="https://app.elfi.xyz/trade/ETHUSD" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>pares disponibles</a> y abre posiciones de trading (long o short) según tu estrategia y análisis del mercado. Aprende más sobre estrategias en la sección de <a href="https://docs.elfi.xyz/trade/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>documentación de trading</a>.
            </>
          ),
          icon: <SwapHorizIcon />,
        },
        {
          title: "Paso 4: Administra tus Posiciones",
          description: (
            <>
              Monitorea tus posiciones en tiempo real desde el <a href="https://app.elfi.xyz/dashboard" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>panel de usuario</a> y ajusta tus estrategias con herramientas avanzadas como <a href="https://docs.elfi.xyz/trade/margin-mode" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>Margin Cross</a> o <a href="https://docs.elfi.xyz/trade/collateral-backed-by-cross-margin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>Margin Isolated</a>.
            </>
          ),
          icon: <InsightsIcon />,
        },
        {
          title: "Paso 5: Participa en Earn y Genera Recompensas",
          description: (
            <>
              Explora la sección de <a href="https://app.elfi.xyz/earn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>Earn</a> para generar ingresos pasivos mediante staking y otras opciones que maximizan tu participación en el ecosistema.
            </>
          ),
          icon: <TaskIcon />,
        },
        {
          title: "Paso 6: Usa el ELFiBot",
          description: (
            <>
              Accede al <a href="https://t.me/ELFi_official_bot/ELFi_Town" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1976d2" }}>ELFiBot</a> en Telegram para recibir actualizaciones, asistencia y participar en la comunidad ELFi. Este bot te guía a través de las funcionalidades clave de la plataforma.
            </>
          ),
          icon: <TaskIcon />,
        },
      ].map((step, index) => (
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
            elevation={6}
            sx={{
              p: 4,
              maxWidth: 300,
              textAlign: "center",
              borderRadius: "16px",
              background: "#ffffff",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
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
              {step.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {step.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>

    {/* Botón final */}
    <Box textAlign="center" sx={{ mt: 5 }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://elfi.xyz"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "16px",
          px: 4,
          py: 1.5,
          borderRadius: "12px",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        Empieza Ahora
      </Button>
    </Box>
  </Box>
);

export default HowToUsePlatform;
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ElfiLiquidityPool = () => (
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
      Diseño del ELP (Elfi Liquidity Pool)
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: "text.secondary", mb: 4 }}
    >
      Descubre cómo el ELP está diseñado para ofrecer oportunidades seguras y rentables para inversores y traders. 
      Aprende sobre los diferentes tipos de pools, cómo generar ingresos y el mecanismo de mint y burn.
    </Typography>

    {/* Imagen destacada */}
    <Box
      component="img"
      src="/images/newpools.png"
      alt="Elfi Liquidity Pool"
      sx={{
        width: "100%",
        maxWidth: "900px",
        mx: "auto",
        mb: 4,
        borderRadius: "12px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
      }}
    />

    {/* Sección 1: Tipos de Pools */}
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
      Tipos de Pools en ELFi
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {[
        {
          title: "ElfiToken Pool",
          description:
            "Acumula PNL (ganancias y pérdidas) largas y cortas en una baseToken Pool, calculando ingresos globales para los LPers.",
          icon: <MonetizationOnIcon sx={{ fontSize: 50, color: "primary.main" }} />,
        },
        {
          title: "ElfiUSD Pool",
          description:
            "Una pool de stablecoins diseñada para inversores conservadores. Ofrece liquidez cero-riesgo para posiciones cortas.",
          icon: <SecurityIcon sx={{ fontSize: 50, color: "primary.main" }} />,
        },
      ].map((pool, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "12px",
              background: "#ffffff",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                p: 4,
              }}
            >
              {pool.icon}
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                {pool.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                {pool.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    {/* Sección 2: Proceso de Mint y Burn */}
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
      Proceso de Mint y Burn
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {[
        {
          title: "Mint ElfiToken",
          description:
            "Pledges tokens en una pool para recibir ElfiToken basado en el precio neto, ofreciendo liquidez al pool.",
          icon: <AccountBalanceWalletIcon sx={{ fontSize: 50, color: "primary.main" }} />,
        },
        {
          title: "Burn ElfiToken",
          description:
            "Redime ElfiTokens y quema la cantidad correspondiente según el precio neto, retirando tus activos colaterales.",
          icon: <TrendingUpIcon sx={{ fontSize: 50, color: "primary.main" }} />,
        },
      ].map((action, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "12px",
              background: "#ffffff",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                p: 4,
              }}
            >
              {action.icon}
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                {action.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                {action.description}
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
        LPers pueden reclamar recompensas durante el periodo de staking o finalizar el staking para retirar activos y recompensas acumuladas.
      </Typography>
    </Box>
  </Box>
);

export default ElfiLiquidityPool;
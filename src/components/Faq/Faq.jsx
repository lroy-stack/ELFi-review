import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  useTheme,
  Grid,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShieldIcon from "@mui/icons-material/Shield";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const faqData = [
  {
    question: "¿Qué es ELFi?",
    answer:
      "ELFi es una plataforma descentralizada de trading perpetuo que permite a los usuarios operar de manera segura con apalancamiento alto sin intermediarios.",
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
  },
  {
    question: "¿Cómo puedo farmear el airdrop?",
    answer:
      "Conecta tu wallet a la plataforma, realiza transacciones como trading o depósitos, y completa desafíos semanales para acumular recompensas.",
    icon: <AddShoppingCartIcon sx={{ fontSize: 40, color: "#2e7d32" }} />,
  },
  {
    question: "¿Qué puedo hacer con los tokens de ELFi?",
    answer:
      "Los tokens de ELFi pueden ser utilizados en la plataforma para trading, staking o canjeados en el mercado.",
    icon: <CurrencyExchangeIcon sx={{ fontSize: 40, color: "#d84315" }} />,
  },
  {
    question: "¿Es seguro usar ELFi?",
    answer:
      "Sí, ELFi utiliza contratos inteligentes auditados y un sistema de oráculos para evitar manipulaciones de precios y garantizar la seguridad de tus fondos.",
    icon: <ShieldIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
  },
  {
    question: "¿Qué tipos de órdenes puedo usar en ELFi?",
    answer:
      "Puedes usar órdenes de mercado y órdenes limitadas para abrir posiciones largas o cortas según tus necesidades de trading.",
    icon: <AssignmentIcon sx={{ fontSize: 40, color: "#f9a825" }} />,
  },
  {
    question: "¿Qué sucede si mi posición es liquidada?",
    answer:
      "Si tu posición es liquidada debido a un ratio de margen bajo, tus activos se utilizarán para cubrir las pérdidas y cualquier excedente se devolverá al pool de liquidez.",
    icon: <WarningAmberIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
  },
];

const Faq = () => {
  const theme = useTheme();

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={6}>
        <HelpOutlineIcon
          sx={{
            fontSize: 60,
            color: theme.palette.primary.main,
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
          Preguntas Frecuentes
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: theme.palette.text.secondary }}>
          Resuelve tus dudas sobre ELFi de manera rápida y sencilla.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {faqData.map((faq, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: "12px",
                textAlign: "center",
                background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              {faq.icon}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                }}
              >
                {faq.question}
              </Typography>
              <Accordion
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Ver respuesta
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Faq;
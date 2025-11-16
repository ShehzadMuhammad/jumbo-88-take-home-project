"use client";

import AboutFreeSpinsDialog from "@/components/AboutFreeSpinsDialog";
import DailyPackages from "@/components/DailyPackages";
import PromotionPackages from "@/components/PromotionPackages";
import TopNav from "@/components/TopNav";
import WhatAreSCDialog from "@/components/WhatAreSCDialog";
import { colors, theme } from "@/constants";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

const PROMOTIONS_TAB = 0;
const DAILY_TAB = 1;

const Page = () => {
  const [tab, setTab] = useState(PROMOTIONS_TAB);
  const [scDialogOpen, setScDialogOpen] = useState(false);
  const [freeSpinsDialogOpen, setFreeSpinsDialogOpen] = useState(false);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const openSCDialog = () => setScDialogOpen(true);
  const closeSCDialog = () => setScDialogOpen(false);
  const openFreeSpinsDialog = () => setFreeSpinsDialogOpen(true);
  const closeFreeSpinsDialog = () => setFreeSpinsDialogOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNav />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: colors.darkBg,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,255,170,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,109,58,0.15), transparent 35%)",
          color: colors.white,
          pt: "104px",
          pb: 10,
        }}
      >
        <Container maxWidth="sm" sx={{ pt: 2, pb: 12 }}>
          <Stack spacing={3}>
            <Box textAlign="center">
              <Typography
                variant="h5"
                fontWeight={700}
                color="secondary.main"
                gutterBottom
              >
                Gold Coin Packages
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1.5}>
                Unlock neon-powered fun with curated packages designed to get
                you spinning faster.
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={3}
              mt={2}
            >
              <Box
                onClick={openSCDialog}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                }}
              >
                <Typography variant="body2" mr={0.5}>
                  What are SCs?
                </Typography>
                <InfoOutlinedIcon fontSize="small" />
              </Box>

              <Box
                onClick={openFreeSpinsDialog}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                }}
              >
                <Typography variant="body2" mr={0.5}>
                  About Free Spins
                </Typography>
                <InfoOutlinedIcon fontSize="small" />
              </Box>
            </Box>

            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                },
                "& .Mui-selected": {
                  color: `${colors.neonGreen} !important`,
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: colors.neonGreen,
                },
              }}
            >
              <Tab label="Promotions" value={PROMOTIONS_TAB} />
              <Tab label="Daily Deals" value={DAILY_TAB} />
            </Tabs>

            {tab === PROMOTIONS_TAB && <PromotionPackages />}

            {tab === DAILY_TAB && <DailyPackages />}
          </Stack>
        </Container>
      </Box>

      <WhatAreSCDialog open={scDialogOpen} onClose={closeSCDialog} />
      <AboutFreeSpinsDialog
        open={freeSpinsDialogOpen}
        onClose={closeFreeSpinsDialog}
      />
    </ThemeProvider>
  );
};

export default Page;

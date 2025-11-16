"use client";

import DailyPackages from "@/components/DailyPackages";
import PackageCard from "@/components/PackageCard";
import TopNav from "@/components/TopNav";
import { promotionPackages, theme } from "@/constants";
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
import Grid from "@mui/material/GridLegacy";
import { SyntheticEvent, useState } from "react";

const mostPopularPackage = promotionPackages.find(
  (pkg) => pkg.tag === "Most Popular"
);
const starterPackage = promotionPackages.find(
  (pkg) => pkg.tag === "Best For New Players"
);
const gridPackages = promotionPackages.filter(
  (pkg) => pkg.tag !== "Most Popular" && pkg.tag !== "Best For New Players"
);

const PROMOTIONS_TAB = 0;
const DAILY_TAB = 1;

const Page = () => {
  const [tab, setTab] = useState(PROMOTIONS_TAB);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNav />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#0f1115",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,255,170,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,109,58,0.15), transparent 35%)",
          color: "#fff",
          pt: "104px",
          pb: 10,
        }}
      >
        <Container maxWidth="sm" sx={{ pt: 4, pb: 12 }}>
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
                  color: "#00ffaa !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00ffaa",
                },
              }}
            >
              <Tab label="Promotions" value={PROMOTIONS_TAB} />
              <Tab label="Daily Deals" value={DAILY_TAB} />
            </Tabs>

            {tab === PROMOTIONS_TAB && (
              <Stack spacing={2.5}>
                {mostPopularPackage && (
                  <PackageCard
                    {...mostPopularPackage}
                    highlightColor="#a855f7"
                  />
                )}
                {starterPackage && (
                  <PackageCard {...starterPackage} highlightColor="#22c55e" />
                )}

                <Grid
                  container
                  spacing={2}
                  sx={{
                    marginLeft: "-8px !important",
                    width: "calc(100% + 16px)",
                  }}
                >
                  {gridPackages.map((bundle) => (
                    <Grid
                      item
                      xs={6}
                      key={bundle.title}
                      sx={{ pl: "8px !important" }}
                    >
                      <PackageCard {...bundle} />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            )}

            {tab === DAILY_TAB && <DailyPackages />}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Page;

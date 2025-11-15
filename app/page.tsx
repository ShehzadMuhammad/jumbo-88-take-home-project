"use client";

import PackageCard from "@/components/PackageCard";
import SectionHeader from "@/components/SectionHeader";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import TopNav from "@/components/TopNav";
import { theme } from "@/constants";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

const packages = [
  {
    title: "Starter",
    coins: 20000,
    freeSC: 20,
    oldPrice: 20,
    price: 9.99,
    savingsPct: 50,
    tag: "Best For New Players",
  },
  {
    title: "Elite",
    coins: 60000,
    freeSC: 60,
    oldPrice: 60,
    price: 39.99,
    savingsPct: 50,
    tag: "Most Popular",
  },
  {
    title: "Jumbo88 Reload",
    coins: 200000,
    freeSC: 200,
    oldPrice: 200,
    price: 188.88,
    savingsPct: 6,
    tag: "Save 6%",
  },
  {
    title: "Super Reload",
    coins: 105000,
    freeSC: 105,
    oldPrice: 105,
    price: 99.99,
    savingsPct: 5,
    tag: "Save 5%",
  },
  {
    title: "Quick Reload",
    coins: 52000,
    freeSC: 52,
    oldPrice: 52,
    price: 49.99,
    savingsPct: 4,
    tag: "Save 4%",
  },
  {
    title: "Mini Reload",
    coins: 31000,
    freeSC: 31,
    oldPrice: 31,
    price: 29.99,
    savingsPct: 3,
    tag: "Save 3%",
  },
];

const mostPopularPackage = packages.find((pkg) => pkg.tag === "Most Popular");
const starterPackage = packages.find(
  (pkg) => pkg.tag === "Best For New Players"
);
const gridPackages = packages.filter(
  (pkg) => pkg.tag !== "Most Popular" && pkg.tag !== "Best For New Players"
);

const Page = () => (
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
              Jumbo88 Coin Shop
            </Typography>
            <Typography variant="h3" fontWeight={800}>
              Claim Your First Coin Bundle
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1.5}>
              Unlock neon-powered fun with curated packages designed to get you
              spinning faster.
            </Typography>
          </Box>

          <SectionHeader
            eyebrow="Launch Bonus"
            title="Starter Pack hits the sweet spot"
            description="3 turbo-charged bundles, optimized for your first deposit. We highlight the Starter Pack so you know where to begin."
          />

          <Stack spacing={2.5}>
            {mostPopularPackage && (
              <PackageCard {...mostPopularPackage} highlighted />
            )}
            {starterPackage && <PackageCard {...starterPackage} />}

            <Grid container spacing={2}>
              {gridPackages.map((bundle) => (
                <Grid item xs={6} key={bundle.title}>
                  <PackageCard {...bundle} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>

      <StickyBottomCTA
        title="Starter Pack · 20,000 Coins + 20 Free SC"
        subtitle="One-time welcome offer · Save 50% today"
        actionLabel="Claim Starter Pack for $9.99"
      />
    </Box>
  </ThemeProvider>
);

export default Page;

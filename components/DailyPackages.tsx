import PackageCard from "@/components/PackageCard";
import { dailyPackages } from "@/constants";
import Box from "@mui/material/Box";
import Grid from "@mui/material/GridLegacy";

const DailyPackages = () => (
  <Grid
    container
    spacing={2}
    sx={{ marginLeft: "-8px !important", width: "calc(100% + 16px)" }}
  >
    {dailyPackages.map((pkg) => (
      <Grid item xs={6} key={pkg.title} sx={{ pl: "8px !important" }}>
        <Box>
          <PackageCard {...pkg} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default DailyPackages;

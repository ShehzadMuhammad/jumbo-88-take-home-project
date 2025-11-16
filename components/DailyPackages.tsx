import PackageCard from "@/components/PackageCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/GridLegacy";

const dailyPackages = [
  { title: "Quick 10", coins: 10000, freeSC: 10, price: 9.99, oldPrice: 11.99 },
  {
    title: "Quick 20",
    coins: 20000,
    freeSC: 20,
    price: 19.99,
    oldPrice: 24.99,
  },
  {
    title: "Quick 40",
    coins: 40000,
    freeSC: 40,
    price: 39.99,
    oldPrice: 47.99,
  },
  {
    title: "Quick 75",
    coins: 75000,
    freeSC: 75,
    price: 74.99,
    oldPrice: 89.99,
  },
  {
    title: "Quick 100",
    coins: 100000,
    freeSC: 100,
    price: 99.99,
    oldPrice: 119.99,
  },
  {
    title: "Quick 150",
    coins: 150000,
    freeSC: 150,
    price: 149.99,
    oldPrice: 179.99,
  },
];

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

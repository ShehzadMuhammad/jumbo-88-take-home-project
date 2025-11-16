import PackageCard from "@/components/PackageCard";
import { colors, promotionPackages } from "@/constants";
import { Stack } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";

const PromotionPackages = () => {
  const mostPopularPackage = promotionPackages.find(
    (pkg) => pkg.tag === "Most Popular"
  );
  const starterPackage = promotionPackages.find(
    (pkg) => pkg.tag === "Best For New Players"
  );
  const gridPackages = promotionPackages.filter(
    (pkg) => pkg.tag !== "Most Popular" && pkg.tag !== "Best For New Players"
  );

  return (
    <Stack spacing={2.5}>
      {mostPopularPackage && (
        <PackageCard
          {...mostPopularPackage}
          highlightColor={colors.highlightPurple}
        />
      )}
      {starterPackage && (
        <PackageCard {...starterPackage} highlightColor={colors.highlightGreen} />
      )}

      <GridLegacy
        container
        spacing={2}
        sx={{
          marginLeft: "-8px !important",
          width: "calc(100% + 16px)",
        }}
      >
        {gridPackages.map((bundle) => (
          <GridLegacy
            item
            xs={6}
            key={bundle.title}
            sx={{ pl: "8px !important" }}
          >
            <PackageCard {...bundle} />
          </GridLegacy>
        ))}
      </GridLegacy>
    </Stack>
  );
};

export default PromotionPackages;


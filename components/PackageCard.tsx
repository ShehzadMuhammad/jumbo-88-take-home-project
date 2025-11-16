import { colors } from "@/constants";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type PackageCardProps = {
  title: string;
  coins: number;
  freeSC: number;
  price: number;
  oldPrice: number;
  tag?: string;
  savingsPct?: number;
  highlightColor?: string;
};

const formatNumber = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const PackageCard = ({
  title,
  coins,
  freeSC,
  price,
  oldPrice,
  tag,
  savingsPct,
  highlightColor,
}: PackageCardProps) => {
  const hasHighlight = !!highlightColor;
  const borderColor = highlightColor
    ? `1px solid ${highlightColor}`
    : "1px solid rgba(255,255,255,0.08)";

  // Convert hex color to rgba for background gradient
  const getBackgroundGradient = () => {
    if (!highlightColor) {
      return "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(15,17,21,0.8))";
    }
    // If it's a hex color, convert to rgba with opacity
    if (highlightColor.startsWith("#")) {
      const hex = highlightColor.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `linear-gradient(135deg, rgba(${r},${g},${b},0.15), rgba(15,17,21,0.9))`;
    }
    // If it's already rgba, use it directly with opacity
    return `linear-gradient(135deg, ${highlightColor.replace(
      /[\d.]+\)$/,
      "0.15)"
    )}, rgba(15,17,21,0.9))`;
  };

  const backgroundGradient = getBackgroundGradient();

  return (
    <Paper
      elevation={hasHighlight ? 12 : 6}
      sx={{
        position: "relative",
        overflow: "hidden",
        border: borderColor,
        background: backgroundGradient,
        // Keep the card static; no lift or movement on click/hover
        transform: "translateY(0)",
        transition: "box-shadow 200ms ease",
        "&:hover": {
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        },
      }}
    >
      <Box px={{ xs: 1.5, sm: 2.5 }} py={{ xs: 1.5, sm: 2.5 }}>
        {tag && (
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 1.25, sm: 1.5 },
              py: { xs: 0.4, sm: 0.6 },
              borderRadius: "999px",
              fontSize: { xs: 10, sm: 11 },
              fontWeight: 600,
              background: highlightColor || colors.neonGold,
              color: colors.darkText,
              boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
              mb: { xs: 0.75, sm: 1.25 },
            }}
          >
            {tag}
          </Box>
        )}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={{ xs: 0.5, sm: 1 }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
          >
            {title}
          </Typography>
          {savingsPct && (
            <Chip
              label={`Save ${savingsPct}%`}
              size="small"
              icon={
                <LocalOfferOutlinedIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
              }
              sx={{
                background: colors.goldRgba,
                color: colors.neonGold,
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
              }}
            />
          )}
        </Stack>

        <Box display="flex" alignItems="baseline" gap={1}>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              color: colors.neonGold,
              fontSize: { xs: "1.6rem", sm: "2rem" },
            }}
          >
            {formatNumber(coins)}
          </Typography>
          <Typography
            component="span"
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.95rem" } }}
          >
            Coins
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: colors.neonGold,
            fontWeight: 600,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            mb: { xs: 1, sm: 1.5 },
          }}
        >
          + {freeSC} Free SC
        </Typography>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.08)",
            my: { xs: 1, sm: 1.5 },
          }}
        />

        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ fontSize: { xs: "1.15rem", sm: "1.5rem" } }}
          >
            ${price.toFixed(2)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              textDecoration: "line-through",
              fontSize: { xs: "0.8rem", sm: "0.95rem" },
            }}
          >
            ${oldPrice.toFixed(2)}
          </Typography>
        </Stack>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: { xs: 1.5, sm: 2 },
            height: { xs: 36, sm: 44 },
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            py: { xs: 0, sm: 1.2 },
            boxShadow: "0 12px 24px rgba(0,255,170,0.35)",
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Paper>
  );
};

export default PackageCard;

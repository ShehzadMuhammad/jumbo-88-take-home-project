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
  tag: string;
  savingsPct: number;
  highlighted?: boolean;
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
  highlighted = false,
}: PackageCardProps) => (
  <Paper
    elevation={highlighted ? 12 : 6}
    sx={{
      position: "relative",
      overflow: "hidden",
      border: highlighted
        ? "1px solid rgba(0,255,170,0.6)"
        : "1px solid rgba(255,255,255,0.08)",
      background: highlighted
        ? "linear-gradient(135deg, rgba(0,255,170,0.15), rgba(15,17,21,0.9))"
        : "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(15,17,21,0.8))",
      transition: "transform 200ms ease, box-shadow 200ms ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      },
    }}
  >
    <Box px={3} py={3}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 0.75,
          borderRadius: "999px",
          fontSize: 12,
          fontWeight: 600,
          background: highlighted ? "#00ffaa" : "#ffc400",
          color: "#0f1115",
          boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          mb: 1.5,
        }}
      >
        {tag}
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Chip
          label={`Save ${savingsPct}%`}
          size="small"
          icon={<LocalOfferOutlinedIcon sx={{ fontSize: 16 }} />}
          sx={{
            background: "rgba(255,196,0,0.15)",
            color: "#ffc400",
            borderRadius: "999px",
            fontWeight: 600,
          }}
        />
      </Stack>

      <Box display="flex" alignItems="baseline" gap={1}>
        <Typography variant="h3" fontWeight={800} color="#00ffaa">
          {formatNumber(coins)}
        </Typography>
        <Typography component="span" variant="subtitle1" color="text.secondary">
          Coins
        </Typography>
      </Box>
      <Typography variant="body2" color="success.main" fontWeight={600} mb={2}>
        + {freeSC} Free SC
      </Typography>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 2 }} />

      <Stack direction="row" alignItems="baseline" spacing={1}>
        <Typography variant="h4" fontWeight={800}>
          ${price.toFixed(2)}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ textDecoration: "line-through" }}
        >
          ${oldPrice.toFixed(2)}
        </Typography>
      </Stack>
      <Typography variant="caption" color="text.secondary">
        Limited-time introductory price
      </Typography>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        sx={{
          mt: 3,
          py: 1.4,
          boxShadow: "0 12px 24px rgba(0,255,170,0.35)",
          fontSize: 16,
        }}
      >
        Buy Now
      </Button>
    </Box>
  </Paper>
);

export default PackageCard;

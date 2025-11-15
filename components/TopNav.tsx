import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography } from "@mui/material";

const TopNav = () => (
  <Box
    component="header"
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      px: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(90deg, rgba(15,17,21,0.8), rgba(0,0,0,0.2))",
      backdropFilter: "blur(14px)",
      zIndex: 20,
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <Box flex={1} display="flex" justifyContent="flex-start">
      <IconButton
        edge="start"
        aria-label="home"
        sx={{ color: "rgba(255,255,255,0.85)" }}
      >
        <HomeIcon fontSize="large" />
      </IconButton>
    </Box>

    <Box flex={1} display="flex" justifyContent="center">
      <Typography variant="h6" fontWeight={700} textAlign="center">
        Jumbo88
      </Typography>
    </Box>

    <Box flex={1} display="flex" justifyContent="flex-end">
      <IconButton
        edge="end"
        aria-label="menu"
        sx={{ color: "rgba(255,255,255,0.85)" }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </Box>
  </Box>
);

export default TopNav;

import { createTheme } from "@mui/material/styles";

// Color constants - export for use across components
export const colors = {
  darkBg: "#0f1115",
  neonGreen: "#00ffaa",
  neonGold: "#ffc400",
  neonOrange: "#ff6d3a",
  paperBg: "#171a21",
  textPrimary: "#f5f7fa",
  textSecondary: "#9aa0b5",
  white: "#fff",
  // Highlight colors for package cards
  highlightPurple: "#a855f7",
  highlightGreen: "#22c55e",
  // Additional colors
  darkText: "#0f1115",
  goldRgba: "rgba(255,196,0,0.15)",
} as const;

const darkBg = colors.darkBg;
const neonGreen = colors.neonGreen;
const neonGold = colors.neonGold;
const neonOrange = colors.neonOrange;

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: darkBg,
      paper: colors.paperBg,
    },
    primary: {
      main: neonGreen,
      contrastText: colors.darkText,
    },
    secondary: {
      main: neonGold,
    },
    success: {
      main: neonGreen,
    },
    info: {
      main: neonOrange,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(145deg, #13151b, #0c0d11)",
          borderRadius: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;

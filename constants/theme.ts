import { createTheme } from '@mui/material/styles';

const darkBg = '#0f1115';
const neonGreen = '#00ffaa';
const neonGold = '#ffc400';
const neonOrange = '#ff6d3a';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: darkBg,
      paper: '#171a21',
    },
    primary: {
      main: neonGreen,
      contrastText: '#0f1115',
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
      primary: '#f5f7fa',
      secondary: '#9aa0b5',
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
      textTransform: 'none',
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
          backgroundImage: 'linear-gradient(145deg, #13151b, #0c0d11)',
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


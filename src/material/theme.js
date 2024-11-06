import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#121212',
    },
    text: {
      primary: '#FFF',
      secondary: 'rgba(255, 255, 255, 0.75)',
    },
    primary: {
      main: '#608dfd',
    },
    secondary: {
      main: red[500],
    },
    action: {
      active: '#fff',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '82px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: '#FFF',
    },
    h2: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '36px',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#FFF',
    },
    h3: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      color: '#FFF',
    },
    h4: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '18px',
      fontWeight: 600,
      color: '#FFF',
    },
    h5: {
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: '#FFF',
      lineHeight: '20px',
    },
    body1: {
      fontSize: '15px',
      color: '#FFF',
      lineHeight: '24px',
    },
    button: {
      fontFamily: '"Raleway", sans-serif',
      textTransform: 'uppercase',
      fontSize: '15px',
      fontWeight: 500,
      color: '#FFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to right, #db0d0d, #ff0000)',
          color: '#fff',
          padding: '14px 34px',
          transition: 'all 0.5s linear',
          '&:hover': {
            backgroundColor: '#d82323',
            color: "#d4d4d4"
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#608dfd',
          fontWeight: 400,
          '&:hover': {
            textDecoration: 'none',
            color: '#608dfd',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e7a46',
          height: '2px',
          width: '70px',
          margin: '20px 0',
        },
      },
    },
  },
});

export default theme;

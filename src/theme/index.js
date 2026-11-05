import { createTheme } from '@mui/material/styles';

const turquoise = '#5CF2E6';
const black = '#0A0A0A';
const display = '"Chakra Petch", "Arial Narrow", sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: turquoise, contrastText: black },
    background: { default: black, paper: '#141414' },
    text: { primary: '#FFFFFF', secondary: '#C4C4C4' },
    divider: '#2A2A2A',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Barlow", "Segoe UI", sans-serif',
    h1: { fontFamily: display, fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 0.95, fontSize: 'clamp(2.5rem, 4.2vw, 4rem)' },
    h2: { fontFamily: display, fontWeight: 700, fontStyle: 'italic', textTransform: 'uppercase', lineHeight: 1, fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)' },
    h3: { fontFamily: display, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, fontSize: '1.375rem' },
    h4: { fontFamily: display, fontWeight: 700, lineHeight: 1, fontSize: '3.5rem' },
    overline: { fontFamily: display, fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.14em', lineHeight: 1.4 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.55 },
    button: { fontFamily: display, fontWeight: 700, letterSpacing: '0.04em', fontSize: '1rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' } },
        '*:focus-visible': { outline: `3px solid ${turquoise}`, outlineOffset: 3 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, minHeight: 52, paddingInline: 28 } },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#FFFFFF',
          borderColor: '#333333',
          backgroundColor: black,
          '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: turquoise, color: black, borderColor: turquoise },
        },
      },
    },
  },
});

export default theme;
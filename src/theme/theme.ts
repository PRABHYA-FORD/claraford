'use client';

import { alpha, createTheme } from '@mui/material/styles';

const brand = {
  primary: '#3355FF',
  primaryDark: '#1F3BD6',
  secondary: '#12B5A6',
  ink: '#0A1024',
};

const fontFamily = 'var(--font-sans), "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: brand.primary, dark: brand.primaryDark, contrastText: '#fff' },
        secondary: { main: brand.secondary, contrastText: '#fff' },
        background: { default: '#F7F8FC', paper: '#FFFFFF' },
        text: { primary: brand.ink, secondary: '#4A5372' },
        divider: alpha(brand.ink, 0.08),
      },
    },
    dark: {
      palette: {
        primary: { main: '#6B85FF', dark: brand.primary, contrastText: '#fff' },
        secondary: { main: '#2DD4BF', contrastText: brand.ink },
        background: { default: '#070B1A', paper: '#0E1430' },
        text: { primary: '#EEF1FB', secondary: '#A3ABC8' },
        divider: alpha('#FFFFFF', 0.08),
      },
    },
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily,
    h1: { fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    overline: { fontWeight: 700, letterSpacing: '0.14em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: 18 },
        sizeLarge: { paddingBlock: 12, paddingInline: 26, fontSize: '1rem' },
      },
    },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          borderColor: theme.vars.palette.divider,
          backgroundImage: 'none',
        }),
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
    MuiTextField: { defaultProps: { fullWidth: true } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.vars.palette.divider}`,
          borderRadius: 12,
          '&:before': { display: 'none' },
          '&:not(:last-of-type)': { marginBottom: 12 },
        }),
      },
    },
  },
});

export default theme;

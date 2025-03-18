import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primaryCustom: Palette['primary'];
  }
  interface PaletteOptions {
    primaryCustom: PaletteOptions['primary'];
  }
}

const colorTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    primaryCustom: {
      light: '#c4c6f8',
      main: '#789012',
      dark: '#456789',
      contrastText: '#fff',
    },
  },
});

export { colorTheme };

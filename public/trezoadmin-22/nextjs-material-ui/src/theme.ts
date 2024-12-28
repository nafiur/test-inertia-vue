'use client';

import { Inter } from 'next/font/google';
import { createTheme, PaletteOptions } from '@mui/material/styles';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900',],
  subsets: ['latin'],
  display: 'swap',
});

interface CustomPaletteOptions extends PaletteOptions {
  orange: {
    main: string;
    50: string;
    100: string;
    500: string;
    600: string;
    700: string;
  };
  purple: {
    main: string;
    50: string;
    100: string;
    500: string;
    600: string;
    700: string;
  };
}

const theme = createTheme({
  palette: {
    background: {
      default: "#F6F7F9"
    },
    text:{
      primary: "#64748B"
    },
    primary: {
      main: "#605DFF",
      50: "#ECF0FF",
      100: "#DDE4FF",
      400: "#757dff",
      500: "#605DFF",
      600: "#1f64f1",
      700: "#3e2ad8",
      800: "#3325ae",
    },
    secondary: {
      main: "#3584FC",
      100: "#DAEBFF",
      400: "#3584fc",
      500: "#3584fc",
    },
    success: {
      main: "#25B003",
      50: "#EEFFE5",
      100: "#D8FFC8",
      300: "#82fc5a",
      400: "#37d80a",
      500: "#37d80a",
      600: "#25b003",
      700: "#1e8308",
    },
    info: {
      main: "#0dcaf0",
      100: "#daebff",
      400: "#5da8ff",
    },
    warning: {
      main: "#ffc107",
      50: "#fff8e1",
      600: "#ffb300",
    },
    error: {
      main: "#FF4023",
      50: "#ffe1dd",
      100: "#ffe8d4",
      150: "#ffa294",
      200: "#FFC8C0",
      300: "#ffaa72",
      600: "#ec1f00",
      700: "#c52b09",
    },
    grey: {
      50: '#f6f7f9',
      100: '#eceef2',
      300: '#b1bbc8',
      400: '#9497aa',
    },
    orange: {
      main: '#fe7a36', 
      50: '#fff2f0',
      100: '#ffe8d4',
      500: '#fd5812',
      600: '#ec1f00',
      700: '#c52b09',
    },
    purple: {
      main: '#ad63f6',  
      50: '#faf5ff',  
      100: '#f3e8ff',  
      500: '#ad63f6',  
      600: '#9135e8',  
      700: '#7c24cc',  
    }
  } as CustomPaletteOptions,
  typography: {
    fontFamily: inter.style.fontFamily, 
    fontSize: 12.3,
  },
});

export default theme;
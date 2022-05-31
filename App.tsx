import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor={theme.COLORS.BACKGROUND} />
      <Routes />
    </ThemeProvider>
  );
}

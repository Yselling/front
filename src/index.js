import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const providedTheme = {
  color: {
    primary: 'red',
  }
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={providedTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

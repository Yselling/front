import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const providedTheme = {
  color: {
    primary: 'red',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={providedTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

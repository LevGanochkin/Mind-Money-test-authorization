import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppThemeProvider } from './app/providers';
import { App } from './app';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);

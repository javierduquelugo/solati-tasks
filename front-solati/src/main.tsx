import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import App from './App.tsx';
import './main.css';

// Se agregan los providers

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>,
)

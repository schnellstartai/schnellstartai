import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Use hydration for SSR in production
const wrappedApp = React.createElement(
  BrowserRouter,
  null,
  React.createElement(LanguageProvider, null, React.createElement(App, null))
);

if (import.meta.env.PROD) {
  hydrateRoot(root, wrappedApp);
} else {
  createRoot(root).render(wrappedApp);
}
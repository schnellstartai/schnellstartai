import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, React.createElement(BrowserRouter, null, React.createElement(App, null)));
} else {
  createRoot(root).render(React.createElement(BrowserRouter, null, React.createElement(App, null)));
}
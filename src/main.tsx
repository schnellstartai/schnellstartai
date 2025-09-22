import React from 'react';
import { createRoot } from 'react-dom/client';

// Completely bare minimum React app with cache buster
const CacheBustApp = () => React.createElement('div', {
  style: {
    minHeight: '100vh',
    background: '#0f172a',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui, sans-serif'
  }
}, React.createElement('h1', null, `Clean App - ${Date.now()}`));

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(React.createElement(CacheBustApp));
}
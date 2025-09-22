import React from 'react'
import { createRoot } from 'react-dom/client'

// Completely minimal React app to break cache
const App = () => {
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b, #0f172a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui'
    }
  }, React.createElement('h1', null, 'Clean React App - No Context Issues'))
}

const root = document.getElementById("root")
if (root) {
  createRoot(root).render(React.createElement(App))
}
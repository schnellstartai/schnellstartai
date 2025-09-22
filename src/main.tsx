import React from 'react'
import { createRoot } from 'react-dom/client'

function MinimalApp() {
  return <div>Hello World - React Test</div>
}

const root = document.getElementById("root")!;
createRoot(root).render(<MinimalApp />);

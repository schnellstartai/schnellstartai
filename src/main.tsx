import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'

function SimpleApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">App Loading...</h1>
        <p className="text-white/80">React is working properly</p>
      </div>
    </div>
  )
}

const root = document.getElementById("root")!;
createRoot(root).render(<SimpleApp />);
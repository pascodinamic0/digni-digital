import React from 'react'
import ReactDOM from 'react-dom/client'

// This is a Next.js project - routing is handled by the app directory
// This file exists for Vite compatibility during development
const App = () => {
  // Redirect to Next.js app
  if (typeof window !== 'undefined') {
    window.location.href = '/'
  }
  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

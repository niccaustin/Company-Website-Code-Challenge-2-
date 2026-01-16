import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Backendless from 'backendless'
import { AuthProvider } from './context/AuthContext.tsx'

const APP_ID = 'C13D6E70-90DB-4DE5-A1E9-2D0B27C50EF5';
const API_KEY = 'E7C22C5E-2539-464C-BEE6-B53E9E126AEF';
Backendless.initApp(APP_ID, API_KEY); //

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
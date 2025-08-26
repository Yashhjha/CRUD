import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './pages/About/Landing/Landing.jsx'
import About from './pages/About/About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)

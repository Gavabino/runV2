import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CalendarProvider} from "./contexts/CalendarContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CalendarProvider>
    <App />
      </CalendarProvider>
  </StrictMode>,
)

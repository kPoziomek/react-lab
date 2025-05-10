import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
// @ts-ignore
import "milligram";
import {EmailProvider} from "./emailContext.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EmailProvider>
         <App />
      </EmailProvider>
    </BrowserRouter>
  </StrictMode>,
)

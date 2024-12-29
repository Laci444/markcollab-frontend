import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Collaborator from './Collaborator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Collaborator className="w-screen h-screen" />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuizProvider } from './context/QuizContext.jsx'

createRoot(document.getElementById('root')).render(
  <QuizProvider>

    <App />

  </QuizProvider>
)

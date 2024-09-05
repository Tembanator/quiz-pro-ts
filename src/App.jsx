import { useState } from "react"
import StartPage from "./components/StartPage"
import GamePage from "./components/GamePage"
import Results from "./components/Results"
import { QuizProvider, useQuiz } from "./context/QuizContext"
import Categories from "./components/Categories"

function App() {
  const { status } = useQuiz()
  return (
    <>
      {status === 'inactive' && <StartPage />}
      {status === 'almostActive' && <Categories />}
      {status === 'active' && <GamePage />}
      {status === 'finish' && <Results />}
      <div className="fixed bottom-0 w-full text-center p-2 text-xs text-slate-400 bg-sky-800"><span>Developed by TS Dlamini</span></div>
    </>

  )
}

export default App

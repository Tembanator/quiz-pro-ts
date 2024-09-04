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
    </>

  )
}

export default App

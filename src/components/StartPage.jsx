import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function StartPage() {
    const { dispatch } = useQuiz()
    return (
        <div className="container mx-auto text-slate-400">
            <div className="flex flex-col items-center justify-center space-y-12 max-w-[400px] m-auto ">

                <h4 className="text-center text-md">Boost your brainpower with our quiz app! Explore trivia, test your skills, and discover new facts every day. It's learning and fun—all in one place!</h4>
                <img className="w-[250px]" src="quiz.svg" alt="quiz" />
                <button
                    onClick={() => dispatch({ type: 'gameStarted' })}
                    className="border-[1px] border-slate-300 px-3 pb-1 rounded-lg  border-opacity-25 hover:bg-slate-700 font-normal duration-300">Start Playing</button>
            </div>
        </div>
    )
}

import React from 'react'
import { HiOutlineRefresh } from 'react-icons/hi'
import { useQuiz } from '../context/QuizContext'

export default function Results() {
    const { dispatch, score, questions } = useQuiz()
    return (
        <div className='container mx-auto text-slate-400'>
            <div className="max-w-[600px] m-auto p-4 flex flex-col space-y-8 items-center">
                <h2 className='text-3xl font-bold text-blue-500'>Results</h2>
                <div>

                    <p>Total correct answers:</p>
                    <p>{score / 10} out of {questions.length} questions</p>
                </div>
                <div className='p-4 bg-gradient-to-b from-blue-700 to-blue-500 rounded-lg text-slate-200 font-semibold flex flex-col items-center pb-8 space-y-6'>
                    <h3 className='text-md'>Your final score is</h3>
                    <img className='w-[100px]' src="congrats.svg" alt="" />
                    <span className='bg-yellow-400 rounded-full w-[80px] aspect-square flex items-center justify-center font-bold text-3xl text-white'><p>{score}</p></span>
                </div>
                <button
                    onClick={() => dispatch({ type: 'exitedQuiz' })}
                    className="border-[2px] border-slate-300 px-4 pb-1 border-opacity-25 hover:bg-blue-500 hover:text-slate-200 duration-300 flex items-center justify-center space-x-2 w-fit font-semibold rounded-xl"><span className='pt-1'><HiOutlineRefresh size={14} /></span><span>Try again</span></button>
            </div>
        </div>
    )
}

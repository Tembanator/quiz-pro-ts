import { LiaHourglassStartSolid } from 'react-icons/lia'
import Question from './Question'
import { useQuiz } from '../context/QuizContext'
import { useEffect } from 'react'
import OptionsList from './OptionsList'
import Loader from './Loader'

export default function GamePage() {
    const { loadingStatus, category, currentQuestion, questions, answer, score, dispatch } = useQuiz()
    const { catNum, title } = category


    useEffect(() => {
        // dispatch({ type: 'loading' })
        fetch(`https://opentdb.com/api.php?amount=10&category=${catNum}&difficulty=easy&type=multiple`)
            .then(res => res.json())
            .then(data => dispatch({ type: 'dataReceived', payload: data.results }))
    }, [catNum, dispatch])

    return (
        <>
            {loadingStatus && <Loader />}
            <div className='container mx-auto text-slate-400'>
                <div className="h-screen max-w-[400px] m-auto p-4 flex flex-col space-y-8 justify-center">
                    <div className='flex items-center justify-between'>
                        {/* TIMER */}
                        {/* <div className='flex space-x-1 items-center'>
                            <LiaHourglassStartSolid size={15} />
                            <p className='text-sm'>4:03</p>
                        </div> */}
                        <p className='font-semibold border-l-2 pl-2'>{title}</p>
                        {/* SCORE AND SCORE*/}
                        <div className='w-24 border-[2px] rounded-md border-slate-500 border-opacity-25 flex justify-between text-sm text-slate-300 font-semibold'>
                            <span className='bg-slate-500 rounded-md px-2'>Score</span>
                            <span className='text-center w-full'>{score}</span>
                        </div>
                    </div>
                    <p className='text-center text-sm'>Question {currentQuestion + 1} out of {questions?.length}</p>
                    <Question />
                    {/* OPTION LIST */}
                    <OptionsList />
                    <div className='flex justify-between'>
                        <>
                            <button
                                onClick={() => dispatch({ type: 'exitedQuiz' })}
                                className="border-[1px] border-red-300 px-3 pb-1 border-opacity-25 hover:bg-red-700 font-normal duration-300">Quit quiz</button>
                            {(answer !== null & currentQuestion < (questions.length - 1)) ?
                                <button
                                    onClick={() => dispatch({ type: 'nextQuestion' })}
                                    className="border-[2px] border-slate-300 px-3 pb-1 border-opacity-25 hover:bg-green-700 font-normal duration-300">Next</button> : ''
                            }
                            {answer !== null & currentQuestion === (questions.length - 1) ? <button
                                onClick={() => dispatch({ type: 'finish' })}
                                className="border-[2px] border-slate-300 px-3 pb-1 border-opacity-25 hover:bg-green-700 font-normal duration-300">Finish</button> : ''}
                        </>
                    </div>
                </div>

            </div>
        </>
    )
}

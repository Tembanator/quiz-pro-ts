import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function Question() {
    const { currentQuestion, questions } = useQuiz()
    return (
        <h3 className='text-center font-semibold'>{questions[currentQuestion]?.question}</h3>
    )
}

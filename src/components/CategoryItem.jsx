import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function CategoryItem({ title, catNum }) {
    const { dispatch } = useQuiz()
    return (
        <div
            onClick={() => dispatch({ type: 'selectedCategory', payload: { title, catNum } })}
            className='border-[1px] w-full flex items-center justify-center h-20 text-lg font-semibold hover:bg-gray-700 cursor-pointer'>
            {title}
        </div>
    )
}

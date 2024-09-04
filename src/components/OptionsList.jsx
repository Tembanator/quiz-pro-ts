import { useEffect, useState } from 'react'
import { useQuiz } from '../context/QuizContext'
import Option from './Option'

export default function OptionsList() {
    const { currentQuestion, questions } = useQuiz()

    const [optionsShuffled, setOptionsShuffled] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(null)

    useEffect(() => {
        const optionsUnshuffled = []
        optionsUnshuffled.push({
            choice: 'correct', option: questions[currentQuestion]?.correct_answer
        })
        questions[currentQuestion]?.incorrect_answers.map(answer => optionsUnshuffled.push({ choice: 'wrong', option: answer }))

        let shuffledOptions = optionsUnshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        setOptionsShuffled([...shuffledOptions])
        setCorrectAnswer(() => shuffledOptions.findIndex(option => option.choice === 'correct'))
    }, [currentQuestion, questions])

    return (
        <div className='flex flex-col space-y-2'>
            {/* {questions[currentQuestion]?.options} */}
            {optionsShuffled?.map((option, index) => <Option option={option.option} key={index} index={index} correctAnswer={correctAnswer} />)}
        </div>
    )
}

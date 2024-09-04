import { useQuiz } from "../context/QuizContext"

export default function Option({ option, index, correctAnswer }) {

    const { dispatch, answer } = useQuiz()

    const hasAnswered = answer !== null
    const correct = index === correctAnswer & hasAnswered
    const wrong = index !== correctAnswer & hasAnswered
    // let points = hasAnswered && (correctAnswer === answer) ? 1 : 0

    return (
        <button
            onClick={() => dispatch({ type: 'newAnswer', payload: { index, correctAnswer } })}
            disabled={hasAnswered}
            className={`border-[1px] px-3 text-slate-300 rounded border-slate-600 border-opacity-35 py-3 text-sm text-center font-semibold duration-300 ${!hasAnswered && 'hover:bg-slate-200 cursor-pointer hover:text-slate-700 bg-gray-800'} ${index === answer && 'translate-x-4'} ${correct ? 'bg-green-700 hover:bg-green-700 hover:text-slate-300' : wrong ? 'bg-red-600 hover:bg-red-600 hover:text-slate-300' : ''} ${hasAnswered && 'cursor-not-allowed'}`}>
            {decodeURIComponent(option)}
        </button>
    )
}

import { createContext, useContext, useReducer } from "react"

const QuizContext = createContext()

const initialState = {
    // loading, error, almostActive, active, finished, inactive
    status: 'inactive',
    loadingStatus: false,
    questions: [],
    category: { title: null, catNum: null },
    currentQuestion: 0,
    score: 0,
    answer: null
}
function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            console.log(action.payload)
            return {
                ...state,
                currentQuestion: 0,
                loadingStatus: false,
                questions: action.payload
            }
        case 'gameStarted':
            return {
                ...state,
                status: 'almostActive'
            }
        case 'selectedCategory':
            return {
                ...state,
                status: 'active',
                loadingStatus: true,
                category: action.payload
            }
        case 'newAnswer':
            console.log(action.payload)
            return {
                ...state,
                answer: action.payload.index,
                score: action.payload.correctAnswer === action.payload.index ? state.score + 10 : state.score
            }
        case 'exitedQuiz':
            return {
                ...initialState
            }
        case 'nextQuestion':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                answer: null
            }
        case 'finish':
            return {
                ...state,
                status: 'finish'
            }
        default:
            throw Error('Unknown action')
    }
}

function QuizProvider({ children }) {

    const [{ loadingStatus, status, category, currentQuestion, questions, answer, score }, dispatch] = useReducer(reducer, initialState)

    return (
        <QuizContext.Provider
            value={{ loadingStatus, status, category, currentQuestion, questions, answer, score, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

function useQuiz() {
    const context = useContext(QuizContext)
    if (context === undefined) throw Error('Context used outside the provider')
    return context
}

export { QuizProvider, useQuiz }

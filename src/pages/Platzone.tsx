import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context";
import { Option, Question } from "../type/Quiz.type";

export default function Playzone() {
    const { quizID } = useParams();
    const navigate = useNavigate();
    const { state: {currentQuiz, questionNo, score}, dispatch } = useData();

    const currentQuestion = currentQuiz?.questions[questionNo];

    const scoreAndQuestionHandler = (option : Option) => {
        option.isAnswer ? 
        (
            dispatch({
                type: "INCREMENT_SCORE", 
                payload: {score: currentQuestion?.points}
            })
        ) :
        (
            dispatch({
                type: "DECREMENT_SCORE",
                payload: {score: currentQuestion?.negativePoints}
            })
        )  
        questionNo + 1 === currentQuiz?.questions.length
        ? navigate("/result", { replace: true })
        : dispatch({type: "NEXT_QUESTION"})
    }

    const optionHandler = (option: Option) => {
        dispatch({
            type: "SET_SELECTED_ANSWER", 
            payload: {optionID: option.id, questionID: currentQuestion?.id}
        })
        scoreAndQuestionHandler(option)
    }

    useEffect(() => {
        dispatch({type:"SET_CURRENT_QUIZ", payload: {quizID}})
    }, [])
    console.table({
        quesno: questionNo,
        length: currentQuiz?.questions.length
    })

    return (
        <div className="m-auto min-h-screen w-full max-w-2xl">
            <h1 className="text-2xl font-medium">{score}</h1>
            <h1 className="text-2xl">{currentQuiz?.name}</h1>
            <div>
                <h1 className="text-xl font-medium">{currentQuestion?.question}</h1>
                <div>
                    {
                        currentQuestion?.options.map((option) => (
                            <button 
                                key={option.id}
                                onClick={() => optionHandler(option)}
                                className="block text-lg bg-gray-500 w-80 p-4 m-4 rounded-md shadow-md">
                                {option.content}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
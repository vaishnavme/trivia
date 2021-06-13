import { useState } from "react";
import { useData } from "../context";

export default function Result() {
    const [isVisible, setVisible] = useState(false);
    const {state: {currentQuiz, score}} = useData();

    const showResponse = () => setVisible(prevState => !prevState)

    return (
        <div className="m-auto w-full max-w-2xl">
            <h1 className="text-3xl font-medium">Your Score</h1>
            <h1 className="text-5xl font-medium">{score}</h1>

            <div>
                <img src={currentQuiz?.coverImageUrl} alt={currentQuiz?.name}/>
                <h1 className="text-2xl font-medium">{currentQuiz?.name}</h1>
                <button 
                    onClick={() => showResponse()}
                    className="flex align-center justify-center bg-white shadow p-1 block text-lg w-full">View Result 
                    <i className={`bx ${isVisible ? "bxs-chevron-up" : "bxs-chevron-down" }  text-2xl`}></i>
                </button>
            </div>
            {
                isVisible &&
                <div>
                {
                    currentQuiz?.questions.map((question) => (
                        <div className="my-8" key={question.id}>
                            <h1 className="text-lg font-semibold">{question.question}</h1>
                            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-x-1 gap-y-0.5">
                                {question.options.map((option) => (
                                    <div 
                                        className={`block text-lg bg-gray-50 w-80 p-4 mx-1 my-2 rounded-md shadow 
                                            ${option.isAnswer && "bg-green-500"} ${option.id === question.selectedOption && "bg-red-500"}`
                                        }
                                        key={option.id}
                                        >{option.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
            }
        </div>
    )
}
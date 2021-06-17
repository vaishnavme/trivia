import { useState } from "react";
import { useData } from "../context";

export default function Result() {
    const [isVisible, setVisible] = useState(false);
    const {state: {currentQuiz, score}} = useData();

    const showResponse = () => setVisible(prevState => !prevState)

    return (
        <div>
            <img className="object-fill h-96" src={currentQuiz?.coverImageUrl} alt={currentQuiz?.name}/>
            <div className="m-auto w-full max-w-2xl">
                <h1 className="text-2xl font-medium">{currentQuiz?.name}</h1>
                <button 
                    onClick={() => showResponse()}
                    className="flex align-center justify-center bg-white shadow p-1 block text-lg w-full">View Result 
                    <i className={`bx ${isVisible ? "bxs-chevron-up" : "bxs-chevron-down" }  text-2xl`}></i>
                </button>
            
            {
                isVisible &&
                <div>
                {
                    currentQuiz?.questions.map((question) => (
                        <div className="my-8" key={question._id}>
                            <h1 className="text-lg font-semibold">{question.question}</h1>
                            <div className="md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-1 md:gap-y-0.5 flex flex-wrap flex-col">
                                {question.options.map((option) => (
                                    <div 
                                        className={`block text-lg bg-white w-80 p-4 mx-1 my-2 rounded-md shadow 
                                            ${option.isAnswer && "bg-green-600 text-white"} ${option._id === question.selectedOption && "bg-red-600 text-white"}`
                                        }
                                        key={option._id}
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
        </div>
    )
}
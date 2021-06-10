import { useData } from "../context";

export default function Result() {
    const {state: {currentQuiz, score}} = useData();
    return (
        <div className="m-auto w-full max-w-2xl">
            <h1 className="text-3xl font-medium">Your Score</h1>
            <h1 className="text-5xl font-medium">{score}</h1>

            <div>
                <img src={currentQuiz?.coverImageUrl} alt={currentQuiz?.name}/>
                <h1 className="text-2xl font-medium">{currentQuiz?.name}</h1>
            </div>
            <div>
                {
                    currentQuiz?.questions.map((question) => (
                        <div key={question.id}>
                            <h1>{question.question}</h1>
                            <div>
                                {question.options.map((option) => (
                                    <div 
                                        className={`block text-lg bg-gray-50 w-80 p-4 m-4 rounded-md shadow 
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
        </div>
    )
}
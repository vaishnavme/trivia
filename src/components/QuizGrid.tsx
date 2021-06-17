import { Link } from "react-router-dom";
import { useData } from "../context";

export const QuizGrid = () => {
    const {state: {allQuiz}} = useData();
    return (
        <div className="grid grid-flow-col gap-4">
            {
                allQuiz?.map((quiz) => (
                    <Link 
                        key={quiz._id} to={`playzone/${quiz._id}`}>
                        <div className="w-96 bg-white shadow-md rounded-xl overflow-hidden">
                            <img src={quiz.coverImageUrl} alt={quiz.name}/>
                            <div className="p-4">
                                <h1 className="text-lg">{quiz.name}</h1>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
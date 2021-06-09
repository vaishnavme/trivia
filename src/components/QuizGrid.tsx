import { Link } from "react-router-dom";
import { useData } from "../context";

export const QuizGrid = () => {
    const {state: {allQuiz}} = useData();
    return (
        <div>
            {
                allQuiz?.map((quiz) => (
                    <Link key={quiz.id} to={`playzone/${quiz.id}`}>
                        <div className="w-80">
                            <img src={quiz.coverImageUrl} alt={quiz.name}/>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
import { useData } from "../context";

export const QuizGrid = () => {
    const {state: {allQuiz}} = useData();
    return (
        <div>
            {
                allQuiz?.map((quiz) => (
                    <div key={quiz.id} className="w-80">
                        <img src={quiz.coverImageUrl} alt={quiz.name}/>
                    </div>
                ))
            }
        </div>
    )
}
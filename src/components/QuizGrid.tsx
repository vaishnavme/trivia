import { Link } from 'react-router-dom';
import { useData } from '../context';

export const QuizGrid = () => {
    const {
        state: { allQuiz }
    } = useData();
    return (
        <div className="md:grid md:grid-flow-col md:gap-4 flex flex-wrap flex-col">
            {allQuiz?.map((quiz) => (
                <Link key={quiz._id} to={`playzone/${quiz._id}`}>
                    <div className="w-full h-72 bg-white shadow-md rounded overflow-hidden my-4 md:w-96 md:m-2">
                        <img src={quiz.coverImageUrl} alt={quiz.name} />
                        <div className="p-4">
                            <h1 className="text-xl font-semibold">
                                {quiz.name}
                            </h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

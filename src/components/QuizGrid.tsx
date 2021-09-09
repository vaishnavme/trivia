import { Link } from 'react-router-dom';
import { useData } from '../context';

export const QuizGrid = () => {
    const {
        state: { allQuiz }
    } = useData();

    const colorArray = [
        'bg-gradient-to-r from-yellow-200 via-green-300 to-green-400',
        'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
        'bg-gradient-to-r from-green-400 to-blue-500'
    ];

    return (
        <div>
            {allQuiz?.map((quiz, index) => (
                <Link key={quiz._id} to={`playzone/${quiz._id}`}>
                    <div
                        className={`${colorArray[index]} text-white rounded-md h-44 max-w-md p-6 mb-10 shadow-xl`}
                    >
                        <span className="border-2 py-1 px-2 rounded-xl w-max flex items-center justify-center">
                            <i className="bx bxl-play-store text-lg"></i>
                        </span>
                        <h1 className="text-xl font-medium my-2">
                            {quiz.name}
                        </h1>
                    </div>
                </Link>
            ))}
        </div>
    );
};

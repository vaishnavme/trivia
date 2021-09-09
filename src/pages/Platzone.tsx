import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context';
import { Option } from '../type/Quiz.type';

export default function Playzone() {
    const { quizID } = useParams();
    const navigate = useNavigate();
    const {
        state: { currentQuiz, questionNo },
        dispatch
    } = useData();
    const currentQuestion = currentQuiz?.questions[questionNo];

    const scoreAndQuestionHandler = (option: Option) => {
        option.isAnswer
            ? dispatch({
                  type: 'INCREMENT_SCORE',
                  payload: { score: currentQuestion?.points }
              })
            : dispatch({
                  type: 'DECREMENT_SCORE',
                  payload: { score: currentQuestion?.negativePoints }
              });
        questionNo + 1 === currentQuiz?.questions.length
            ? navigate('/result', { replace: true })
            : dispatch({ type: 'NEXT_QUESTION' });
    };

    const optionHandler = (option: Option) => {
        dispatch({
            type: 'SET_SELECTED_ANSWER',
            payload: { optionID: option._id, questionID: currentQuestion?._id }
        });
        scoreAndQuestionHandler(option);
    };

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_QUIZ', payload: { quizID } });
    }, [dispatch, quizID]);

    return (
        <div className="m-auto w-full max-w-2xl p-2">
            <h1 className="text-2xl text-center">{currentQuiz?.name}</h1>
            <div className="font-medium text-gray-600">
                <span className="text-2xl text-black">{questionNo + 1}</span>/
                {currentQuiz?.questions.length}
            </div>
            <div>
                <h1 className="text-xl font-medium p-2 mt-4">
                    {currentQuestion?.question}
                </h1>
                <div className="md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-1 md:gap-y-0.5 flex flex-wrap flex-col">
                    {currentQuestion?.options.map((option) => (
                        <button
                            key={option._id}
                            onClick={() => optionHandler(option)}
                            className="block text-lg bg-white w-80 p-4 mx-1 my-2 rounded-md shadow hover:bg-blue-500 hover:text-white"
                        >
                            {option.content}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

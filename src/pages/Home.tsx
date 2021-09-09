import { useEffect } from 'react';
import { getQuizData } from '../service/getData';
import { Dashboard, QuizGrid } from '../components';
import { useData } from '../context';

export default function Home() {
    const { dispatch } = useData();

    const get = async () => {
        const quizData = await getQuizData();
        dispatch({ type: 'SET_ALL_QUIZ', payload: quizData });
    };
    useEffect(() => {
        get();
        dispatch({ type: 'RESET' });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="flex">
            <Dashboard />
            <QuizGrid />
        </div>
    );
}

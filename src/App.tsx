import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './api';
import { useData } from './context';
import { Home, Playzone, Result } from './pages';
import { Navbar } from './components';
import { ResponseData } from './type/Quiz.type';

function App() {
    const { dispatch } = useData();
    const [isLoading, setLoading] = useState(false);

    async function getQuizData(): Promise<ResponseData | any> {
        try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/quizdata`);
            if (response.data.success) {
                dispatch({
                    type: 'SET_ALL_QUIZ',
                    payload: response.data.quizdata
                });
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getQuizData();
        dispatch({ type: 'RESET' });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Navbar />
            <div className="p-4">
                <div className="flex justify-center ">
                    {isLoading && (
                        <i className="bx bx-loader-alt animate-spin text-6xl text-center"></i>
                    )}
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playzone/:quizID" element={<Playzone />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

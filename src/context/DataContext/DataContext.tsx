import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { BASE_URL } from '../../api';
import { InitialState, DataContextType } from '../../type/Context.type';
import { ResponseData } from '../../type/Quiz.type';
import { dataReducer } from './dataReducer';

export const initialState: InitialState = {
    allQuiz: [],
    currentQuiz: null,
    questionNo: 0,
    score: 0
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    async function getQuizData(): Promise<ResponseData | any> {
        try {
            const response = await axios.get(`${BASE_URL}/quizdata`);
            if (response.data.success) {
                dispatch({
                    type: 'SET_ALL_QUIZ',
                    payload: response.data.quizdata
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuizData();
        dispatch({ type: 'RESET' });
        // eslint-disable-next-line
    }, []);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);

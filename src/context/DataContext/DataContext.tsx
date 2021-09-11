import { createContext, useContext, useReducer } from 'react';
import { InitialState, DataContextType } from '../../type/Context.type';
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

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);

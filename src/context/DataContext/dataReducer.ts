import { stat } from "fs";
import { Action, InitialState } from "../../type/Context.type";
import { Quiz } from "../../type/Quiz.type";

export const dataReducer = (state: InitialState, action: Action) => {
    console.log("State: ", state);
    console.log("Action: ", action);
    switch(action.type) {
        case "SET_ALL_QUIZ":
            return {...state, allQuiz: action.payload}

        case "SET_CURRENT_QUIZ":
            const {quizID}  = action.payload;
            const selectedQuiz = state.allQuiz.find((quiz) => quiz._id === quizID) as Quiz;
            return {
                ...state,
                currentQuiz: selectedQuiz
            }

        case "SET_SELECTED_ANSWER": 
            const { optionID, questionID } = action.payload;
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    questions: state.currentQuiz?.questions.map((question) => {
                        return question._id === questionID ? {
                            ...question,
                            selectedOption: optionID
                        } : question
                    })
                } as Quiz
            }
        
        case "NEXT_QUESTION": 
            return {
                ...state,
                questionNo: state.questionNo + 1
            }

        case "INCREMENT_SCORE":
            console.log("state score: ", state.score)
            return {
                ...state,
                score: state.score + action.payload.score
            }
        
        case "DECREMENT_SCORE":
            console.log("state score: ", state.score)
            return {
                ...state,
                score: state.score - action.payload.score
            }

        case "RESET":
            return {
                ...state, 
                allQuiz: state.allQuiz,
                score: 0
            }

        default: 
            return state
    }
}
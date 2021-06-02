import { Action, InitialState } from "../../type/Context.type";

export const dataReducer = (state: InitialState, action: Action) => {
    console.log("State: ", state);
    console.log("Action: ", action);
    switch(action.type) {
        case "SET_ALL_QUIZ":
            return {...state, allQuiz: action.payload}

        default: 
            return state
    }
}
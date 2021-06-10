import React from "react";
import { Option, Quiz } from "./Quiz.type";

export type InitialState = {
    allQuiz: Quiz[];
    currentQuiz: Quiz | null;
    questionNo: number;
    score: number;
}

export type DataContextType = {
    state: InitialState;
    dispatch: React.Dispatch<any>;
}

export type Action = 
    | { type: "SET_ALL_QUIZ", payload: Quiz[] }
    | { type: "SET_CURRENT_QUIZ", payload: {quizID: string}}
    | { type: "SET_SELECTED_ANSWER", payload: {optionID: string, questionID: string}}
    | { type: "NEXT_QUESTION" }
    | { type: "INCREMENT_SCORE", payload: {score: number}}
    | { type: "DECREMENT_SCORE", payload: {score: number}}
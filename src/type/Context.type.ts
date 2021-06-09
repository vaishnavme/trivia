import React from "react";
import { Quiz } from "./Quiz.type";

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
    | { type: "NEXT_QUESTION" }
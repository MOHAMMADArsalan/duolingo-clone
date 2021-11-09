import { useContext } from "react";
import {  QuizContext } from "./QuizContext";


export const useQuiz = () => {
    const context = useContext(QuizContext);
    if(!context) {
        throw new Error("Quiz Context can only be used inside QuizContextProvider");
    }

    return context;
}
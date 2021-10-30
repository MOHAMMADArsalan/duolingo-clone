import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { TOTAL_LIVES } from "../../constants";
import { checkIndexOutOfBound } from "../../utils/helpers";
import questions from "../../data/allQuestions";
export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [ lives, setLives ] = useState(TOTAL_LIVES);

    const onCorrect = () => {
        const nextIndex = checkIndexOutOfBound(questions, currentQuestionIndex + 1) ? 0 : currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
    }
    
    const onReset = ( ) => {
        setLives(TOTAL_LIVES);
        setCurrentQuestionIndex(0)
    }
    const onWrong = () => {
        if(lives <= 1) {
            Alert.alert("Game Over", "Try Again", [
                {
                    text: 'Try Again',
                    onPress:  onReset
                }
            ])
        } else {
            setLives(lives - 1)
        }
    }
    return (
        <QuizContext.Provider
            value={{
                currentQuestionIndex,
                lives,
                onReset,
                onWrong,
                onCorrect,
                questions
            }}
        >
            {children}
        </QuizContext.Provider>
    )
} 
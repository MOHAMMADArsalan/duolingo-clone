import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { TOTAL_LIVES, LIVES_STORAGE_KEY, QUESTION_STORAGE_KEY } from "../../constants";
import { checkIndexOutOfBound, saveAsyncStorage, getAsyncStorage } from "../../utils";

import questions from "../../data/allQuestions";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [lives, setLives] = useState(TOTAL_LIVES);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if(hasLoaded) {
            saveData()
        }
    }, [lives, currentQuestionIndex]);

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

    const saveData = async () => {
        await saveAsyncStorage(LIVES_STORAGE_KEY, lives.toString());
        await saveAsyncStorage(QUESTION_STORAGE_KEY, currentQuestionIndex.toString());
    }
    const loadData = async () => {
        const lives = await getAsyncStorage(LIVES_STORAGE_KEY);
        if(lives) {
            setLives(parseInt(lives));
        }

        const questionIndex = await getAsyncStorage(QUESTION_STORAGE_KEY);
        if(questionIndex != null) {
            setCurrentQuestionIndex(parseInt(questionIndex))
        }

        setHasLoaded(true)

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
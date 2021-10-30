import React, { useState } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import { ImageMultiChoiceQuestion, OpenEndedQuestion, Header } from "..";
import { checkIndexOutOfBound } from "../../utils/helpers";
import { TOTAL_LIVES } from "../../constants";
const Questions = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)
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

    const question = questions[currentQuestionIndex];

    return (
        <>
            <Header progress={currentQuestionIndex / questions.length} lives={lives}/>
            {question.type === 'OPEN_ENDED' && (
                <OpenEndedQuestion
                    question={question}
                    onCorrect={onCorrect}
                    onWrong={onWrong}
                />
            )}
            {question.type === 'IMAGE_MULTIPLE_CHOICE' && (<ImageMultiChoiceQuestion
                question={question}
                onCorrect={onCorrect}
                onWrong={onWrong}
            />)}
        </>
    )
}

export default Questions;

Questions.propTypes = {
    questions: PropTypes.array.isRequired
}
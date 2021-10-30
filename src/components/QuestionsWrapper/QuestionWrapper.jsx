import React from "react";
import PropTypes from "prop-types";
import { ImageMultiChoiceQuestion, OpenEndedQuestion, Header } from "..";
import { useQuiz } from "../../contexts/QuizContext";;

const Questions = ({ }) => {
    const { 
        questions,
        currentQuestionIndex, 
        onWrong, 
        onCorrect, 
        lives 
    } = useQuiz();

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
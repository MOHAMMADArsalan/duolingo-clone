import React from "react";
import { ImageMultiChoiceQuestion, OpenEndedQuestion, Header, FillInTheBlank } from "..";
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
            <FillInTheBlank />
            {/* {question.type === 'OPEN_ENDED' && (
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
            />)} */}
        </>
    )
}

export default Questions;
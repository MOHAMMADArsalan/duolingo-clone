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
            <Header progress={currentQuestionIndex / questions.length} lives={lives} />
            {question.type === 'FILL_IN_THE_BLANK' && (<FillInTheBlank
                question={question}
                onCorrect={onCorrect}
                onWrong={onWrong}
            />)}
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
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageMultiChoiceQuestion, OpenEndedQuestion } from "..";
import { checkIndexOutOfBound } from "../../utils/helpers";
const Questions = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const onCorrect = () => {
        const nextIndex = checkIndexOutOfBound(questions, currentQuestionIndex + 1) ? 0 : currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
    }
    const onWrong = () => {
        alert("Wrong. try other options")
    }

    const question = questions[currentQuestionIndex];

    return (
        <>
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
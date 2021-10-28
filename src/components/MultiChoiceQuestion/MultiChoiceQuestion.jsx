import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageMultiChoiceQuestion } from "../";
import { checkIndexOutOfBound } from "../../utils/helpers";
const MultiChoiceQuestion = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selected, setSelected] = useState(false);

    const onSelect = (option) => {
        setSelected(option)
    }

    const checkCorrectOption = () => {
        if(selected.correct) {
            const nextIndex = checkIndexOutOfBound(questions, currentQuestionIndex + 1) ? 0 : currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIndex)
            setSelected(null)
        } else {
            alert("Wrong. try other options")
        }
    }
    return (
        <ImageMultiChoiceQuestion 
            question={questions[currentQuestionIndex]}
            selected={selected}
            onSelect={onSelect}
            onPress={checkCorrectOption}
        />
    )
}

export default MultiChoiceQuestion;

MultiChoiceQuestion.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    text: PropTypes.string,
                    image: PropTypes.string,
                    correct: PropTypes.bool
                })
            ).isRequired
        })
    ).isRequired
}
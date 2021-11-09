import React, { useState } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { ImageOption, Button } from "..";
import styles from "./styles";

const ImageMultiChoiceQuestion = ({ 
    question, 
    onCorrect,
    onWrong
 }) => {
    const [selected, setSelected] = useState(false);

    const onSelect = (option) => {
        setSelected(option)
    }

    const handleAnswer = () => {
        if(selected?.correct) {
            onCorrect();
            setSelected(false)
        } else {
            onWrong();
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{question.question}</Text>
            <View style={styles.optionsContainer}>
                {question.options.map((option) => (
                    <ImageOption
                        key={option.id}
                        image={option.image}
                        text={option.text}
                        isSelected={selected?.id === option.id}
                        onPress={() => onSelect(option)}
                    />
                ))}
            </View>
            <Button 
                text="Check" 
                onPress={handleAnswer}
                disabled={!selected}
                />
        </View>
    )
}
export default ImageMultiChoiceQuestion;

ImageMultiChoiceQuestion.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                image: PropTypes.string,
                correct: PropTypes.bool
            })
        ).isRequired
    }),
    onCorrect: PropTypes.func.isRequired,
    onWrong: PropTypes.func.isRequired
}
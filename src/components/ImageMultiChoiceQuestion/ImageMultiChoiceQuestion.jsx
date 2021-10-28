import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { ImageOption, Button } from "..";
import styles from "./styles";

const ImageMultiChoiceQuestion = ({ question, selected, onSelect, onPress }) => {
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
                onPress={onPress}
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
    })
}
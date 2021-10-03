import React from "react";
import { View, Text } from "react-native";
import { ImageOption } from "..";
import styles from "./styles";

const MultiChoiceQuestion = ({ question }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{question.question}</Text>
            <View style={styles.optionsContainer}>
                {question.options.map((option) => <ImageOption key={option.id} option={option}/>)}
            </View>
        </View>
    )
}
export default MultiChoiceQuestion;
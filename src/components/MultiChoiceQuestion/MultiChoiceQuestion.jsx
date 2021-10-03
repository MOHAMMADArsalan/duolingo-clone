import React from "react";
import { View, Text } from "react-native";
import { ImageOption, Button } from "..";
import styles from "./styles";

const MultiChoiceQuestion = ({ question, selected, onSelect }) => {
    const onButtonPress = () => {
        console.warn("Pressed")
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
                onPress={onButtonPress}
                disabled={!selected}
                />
        </View>
    )
}
export default MultiChoiceQuestion;
import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Button, QuestionTitle, WordOption } from "../";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
    const [parts, setParts] = useState(question.parts);

    const handleCheck = () => {
        if (checkIfCorrect()) {
            onCorrect();
            setParts(question.parts);
        } else {
            onWrong();
        }
    }

    const checkIfCorrect = () => {
        return parts.filter((part) => part.isBlank && part.selected !== part.text).length === 0;

    }
    const onSelection = (option) => {
        if(isSelected(option)) return;
        const newParts = [...parts];
        for(let i = 0; i < newParts.length; i++) {
            if(newParts[i].isBlank && !newParts[i].selected) {
                newParts[i].selected = option;
                break;
            }
        }   
        setParts(newParts);
    }

    const onRemoveSelectionAt = (index) => {
        const newParts = [...parts];
        newParts[index].selected = null;
        setParts(newParts);
    }


    const isSelected = (option) => {
        return parts.filter((part) => part.isBlank && part.selected === option).length > 0
    }

    const checkForDisabled = () => {
        return parts.filter((part) => part.isBlank && !part.selected).length > 0
    }
    return (
        <View style={styles.container}>
            <QuestionTitle title={question.title} />
            <View style={styles.row}>
                {
                    parts.map((part, i) => {
                        if (part.isBlank) {
                            return (
                                <View style={styles.blank}>
                                    {part.selected ? <WordOption
                                        text={part.selected}
                                        onPress={() => onRemoveSelectionAt(i)}
                                    /> : null}
                                </View>
                            )
                        }
                        return <Text style={styles.text} key={i}>{part.text}</Text>
                    })
                }
            </View>
            <View style={styles.optionsContainer}>
                {question.options.map((option) => <WordOption
                    text={option}
                    isSelected={isSelected(option)}
                    onPress={() => onSelection(option)}
                />)}
            </View>
            <Button text="Check" onPress={handleCheck} disabled={checkForDisabled()}/>
        </View>
    )
}

export default FillInTheBlank;
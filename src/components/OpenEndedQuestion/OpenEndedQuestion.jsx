import React, { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import { Button } from "../";
import { checkIsEqual } from "../../utils/helpers";
import styles from "./styles";
import mascot from "../../../assets/mascot.png";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
    const [ answer, setAnswer ] = useState("");

    const handleCheck = () => {
        if(checkIsEqual(answer, question.answer)) {
            onCorrect();
        } else {
            onWrong();
        }
        setAnswer('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Open Ended Qustions</Text>
            <View style={styles.row}>
                {/* Image  */}
                <Image style={styles.mascot} source={mascot} />
                {/* Sentence Container */}
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>
            <TextInput
                placeholder="Type in English"
                style={styles.textInput}
                value={answer}
                onChangeText={setAnswer}
                textAlignVertical="top"
                multiline
            />
            <Button text="Check" onPress={handleCheck} disabled={!answer.length}/>
        </View>
    )
}

export default OpenEndedQuestion;
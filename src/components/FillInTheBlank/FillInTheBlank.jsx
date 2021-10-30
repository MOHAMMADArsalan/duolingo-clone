import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Button, QuestionTitle, WordOption } from "../";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
    const handleCheck = () => { }

    return (
        <View style={styles.container}>
            <QuestionTitle>Open Ended Qustions</QuestionTitle>
            <View style={styles.row}>
                <Text>ahs sha js aks </Text>
                <View style={styles.blank}></View>
            </View>
            <View style={styles.optionsContainer}>
                <WordOption text="1"/>
                <WordOption text="2"/>
                <WordOption text="3"/>
            </View>
            <Button text="Check" onPress={handleCheck} disabled={false} />
        </View>
    )
}

export default FillInTheBlank;
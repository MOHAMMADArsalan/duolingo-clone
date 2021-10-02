import React from "react";
import { View, Text } from "react-native";
import { ImageOption } from "..";
import styles from "./styles";

const MultiChoiceQuestion = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Which of these is the "glass?"</Text>
            <View style={styles.optionsContainer}>
                <ImageOption />
            </View>
        </View>
    )
}
export default MultiChoiceQuestion;
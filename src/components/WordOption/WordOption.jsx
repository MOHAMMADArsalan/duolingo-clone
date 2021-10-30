import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";
const WordOption = ({ text, onPress }) => {
    return (
        <Pressable style={styles.root} onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    )
}

export default WordOption;
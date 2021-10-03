import React from 'react';
import { View, Text, Image } from "react-native";
import styles from "./styles";
const Option = ({ option }) => {
    const { image, text }  = option;
    return (
        <View style={styles.optionContainer}>
            <Image
                source={{uri: image}}
                style={styles.optionImage}
                resizeMode="contain"
            />
            <Text style={styles.optionText}>{text}</Text>
        </View>
    )
}

export default Option;
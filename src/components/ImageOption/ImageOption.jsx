import React from 'react';
import { View, Text, Image } from "react-native";
import styles from "./styles";
import cup from "../../../assets/cup.png"
const Option = () => {
    return (
        <View style={styles.optionContainer}>
            <Image 
                source={cup} 
                style={styles.optionImage}
                resizeMode="contain" 
                />
            <Text style={styles.optionText}>Glass</Text>
        </View>
    )
}

export default Option;
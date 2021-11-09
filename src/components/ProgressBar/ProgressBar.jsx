import React from "react";
import { View, Text }  from "react-native";
import styles from "./styles";

const ProgressBar = ({ progress = 0 }) => {
    const progressPerc = `${progress * 100}%`;
    return (
        <View style={styles.bg}>
            <View style={{...styles.fg, width: progressPerc}}>
                <View style={styles.highlight}></View>
            </View>
        </View>
    )
}

export default ProgressBar;
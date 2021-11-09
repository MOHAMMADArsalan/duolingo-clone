import React from "react";
import { View , Image, Text } from "react-native";
import { ProgressBar } from "../"
import heart from "../../../assets/heart.png";
import styles from "./styles";

const Header = ({progress, lives = 0}) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
            <Image source={heart} style={styles.icon} resizeMode="contain" />
            <Text style={styles.lives}>{lives}</Text>
        </View>
    )
}

export default Header;
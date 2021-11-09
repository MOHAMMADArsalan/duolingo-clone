import React from "react";
import { Pressable, Text } from "react-native";
import PropType from "prop-types";
import styles from "./styles"

const Button = ({ text, onPress, disabled }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, disabled ? styles.disbaledContainer : {}]}
            disabled={disabled}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

Button.propTypes = {
    text: PropType.string.isRequired,
    onPress: PropType.func,
    disabled: PropType.bool
}

Button.defaultProps = {
    onPress: () => { },
    disabled: false
}
export default Button;
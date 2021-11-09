import React from 'react';
import { Pressable, Text, Image } from "react-native";
import PropTypes from 'prop-types';

import styles from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => {
    const textStyle = isSelected ? styles.selectedText : styles.optionText;
    const containerStyle = isSelected ? styles.selectedContainer : {}
    return (
        <Pressable 
            onPress={onPress}
            style={[styles.optionContainer, containerStyle]}
            >
            <Image
                source={{ uri: image }}
                style={styles.optionImage}
                resizeMode="contain"
            />
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    )
}

ImageOption.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func,
}

ImageOption.defaultProps = {
    text: "Default",
    isSelected: false,
    onPress: () => { }
}
export default ImageOption;
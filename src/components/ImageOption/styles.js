import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        width: "48%",
        height: "48%",
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgray",
        borderRadius: 10,
        alignItems: "center",
        padding: 10
    },
    selectedContainer: {
        backgroundColor: "#DDFAFE",
        borderColor: "#81D5FE"
    },
    optionImage: {
        width: "100%",
        flex: 1
    },
    optionText: {
        fontWeight: "bold",
        color: "black"
    },
    selectedText: {
        color: "#40BEF7",
        fontWeight: "bold"
    }
})

export default styles;
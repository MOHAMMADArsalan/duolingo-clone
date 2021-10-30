import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    row: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",

    },
    mascot: {
        width: '30%',
        aspectRatio: 3 / 4,
        marginRight: 10
    },
    sentenceContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,

        padding: 10,
    },
    sentence: {
        fontSize: 16
    },
    textInput: {
        backgroundColor: '#ebebeb',
        flex: 1,
        alignSelf: "stretch",

        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 10,

        fontSize: 16,
        padding: 16
    }
})

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    row: {
        flexDirection: "row",
        alignSelf: "stretch",
        marginVertical: 10
    },
    blank: {
        borderBottomWidth: 2,
        borderColor: "lightgray",
        width: 100
    },
    optionsContainer: {
        flex: 1,
        alignItems: "center",
        alignContent:"center",
        flexDirection: "row",
        flexWrap: "wrap",
    }
});

export default styles;
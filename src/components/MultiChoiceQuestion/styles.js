import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems:"center"
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    },
    lives: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
    }
});

export default styles;
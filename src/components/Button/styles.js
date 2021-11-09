import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#58CC02',
        height: 50,
        marginVertical: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        // borders
        borderRadius: 5,
        borderBottomWidth: 5,
        borderColor: "#57A600"
    },
    disbaledContainer: {
        backgroundColor: "lightgrey",
        borderColor: "grey"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",

        //borders 
        borderColor: "#FFFFFF",
        borderBottomWidth: 1.5
    }
});

export default styles;
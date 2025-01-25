import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
    },
    textColor: {
        color: "white",
    },
    h1: {
        fontSize: 32,
        fontWeight: "bold"
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold"
    },
    listSkills: {
        display: "flex",
        borderColor: "white",
        width: 200,
        marginHorizontal: "auto",
        alignItems: "baseline",
        
        
    },
    textSkills: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        marginRight: 5

    },
    mapList:{
        display: "flex",
        flexDirection: "row"
    },
    button: {
        marginTop: 20,
        width: 250
    }
});
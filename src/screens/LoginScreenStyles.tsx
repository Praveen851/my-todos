import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
    },
    topImage: {
        width: "100%",
        height: 140,
    },
    helloText: {
        textAlign: "center",
        fontSize: 70,
        fontWeight: "500",
        color: "#262626",
    },
    signInText: {
        textAlign: "center",
        fontSize: 18,
        color: "#262626",
        marginBottom: 30,
    },
    inputContainer: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: "10%",
        marginVertical: 10,
        elevation: 10,
        alignItems: "center",
        height: 50,
        padding: 10,
    },
    textInput: {
        marginLeft: 15,
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 30,
        marginHorizontal: "25%",
        borderRadius: 24,
        elevation: 3,
        backgroundColor: "black",
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        fontSize: 16,
        marginTop: 30,
    },
    footerActionText: {
        textDecorationLine: "underline",
    },
});

export default styles;

import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import ButtonStyles from "./LoginScreenStyles";
import { AuthContext } from "../utils/context/AuthContext";

const DrawerScreen = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <>
            <Text style={styles.user}>{`Hello, ${user}`}</Text>
            <View style={styles.container}>
                <Pressable style={styles.buttonContainer} onPress={logout}>
                    <Text style={ButtonStyles.buttonText}>Log out</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 12,
        marginHorizontal: 15,
        borderRadius: 24,
        backgroundColor: "black",
        marginBottom: 24,
    },
    user: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: "20%",
        marginHorizontal: "10%",
    },
});

export default DrawerScreen;

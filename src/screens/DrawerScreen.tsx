import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ButtonStyles from "./LoginScreenStyles";

const DrawerScreen = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonContainer}>
                <Text style={ButtonStyles.buttonText}>Log out</Text>
            </Pressable>
        </View>
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
});

export default DrawerScreen;

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import ScreenNames from "../utils/constants/ScreenNames";

type Props = NativeStackScreenProps<RootStackParamList, ScreenNames>;

const LoginScreen = ({ route }: Props) => {
    return (
        <View>
            <Image
                source={require("../../assets/topVector.png")}
                style={styles.topImage}
            />
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.signInText}>Sign in to your account</Text>
        </View>
    );
};

export default LoginScreen;

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
});

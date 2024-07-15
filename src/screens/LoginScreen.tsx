import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import ScreenNames from "../utils/constants/ScreenNames";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, ScreenNames>;

const LoginScreen = ({ navigation }: Props) => {
    const handleRegister = () =>
        navigation.navigate(ScreenNames.Register, {
            title: ScreenNames.Register,
        });
    return (
        <View>
            <Image
                source={require("../../assets/topVector.png")}
                style={styles.topImage}
            />
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.signInText}>Sign in to your account</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="mail" size={28} color={"#9a9a9a"} />
                <TextInput placeholder="Email" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry
                />
            </View>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
            <Pressable onPress={handleRegister}>
                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text style={styles.registerText}> Register</Text>
                </Text>
            </Pressable>
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
    inputContainer: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
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
        marginHorizontal: 140,
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
    registerText: {
        textDecorationLine: "underline",
    },
});

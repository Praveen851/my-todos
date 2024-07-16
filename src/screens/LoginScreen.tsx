import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import ScreenNames from "../utils/constants/ScreenNames";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreenStyles from "./LoginScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, ScreenNames>;

const LoginScreen = ({ navigation }: Props) => {
    const handleRegister = () =>
        navigation.replace(ScreenNames.Register, {
            title: ScreenNames.Register,
        });
    return (
        <View>
            <Image
                source={require("../../assets/topVector.png")}
                style={LoginScreenStyles.topImage}
            />
            <Text style={LoginScreenStyles.helloText}>Hello</Text>
            <Text style={LoginScreenStyles.signInText}>
                Sign in to your account
            </Text>
            <View style={LoginScreenStyles.inputContainer}>
                <Ionicons name="mail" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Email"
                    style={LoginScreenStyles.textInput}
                />
            </View>
            <View style={LoginScreenStyles.inputContainer}>
                <Ionicons name="lock-closed" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Password"
                    style={LoginScreenStyles.textInput}
                    secureTextEntry
                />
            </View>
            <Pressable style={LoginScreenStyles.buttonContainer}>
                <Text style={LoginScreenStyles.buttonText}>Sign in</Text>
            </Pressable>
            <Pressable onPress={handleRegister}>
                <Text style={LoginScreenStyles.footerText}>
                    Don't have an account?
                    <Text style={LoginScreenStyles.registerText}>
                        {" Register"}
                    </Text>
                </Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;

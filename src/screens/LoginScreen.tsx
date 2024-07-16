import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/StackParamList.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreenStyles from "./LoginScreenStyles";
import { AuthScreenNames } from "../utils/constants/ScreenNames";

type Props = NativeStackScreenProps<AuthStackParamList, AuthScreenNames>;

const LoginScreen = ({ navigation }: Props) => {
    const handleRegister = () => navigation.push(AuthScreenNames.Register);
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
                    <Text style={LoginScreenStyles.footerActionText}>
                        {" Register"}
                    </Text>
                </Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;

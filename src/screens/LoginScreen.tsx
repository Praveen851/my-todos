import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/StackParamList.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreenStyles from "./LoginScreenStyles";
import { AuthScreenNames } from "../utils/ScreenNames";
import { AuthContext } from "../utils/context/AuthContext";
import { useFormik } from "formik";
import { showToast } from "../utils/helpers";

type Props = NativeStackScreenProps<AuthStackParamList, AuthScreenNames>;

const LoginScreen = ({ navigation }: Props) => {
    const { login } = useContext(AuthContext);

    const handleOnSubmit = async (values: any) => {
        const { email, password } = values;
        if (email === "" || password === "") {
            return showToast("Please fill all the fields", "error");
        }
        const loggedIn = await login(email, password);
        if (loggedIn) return showToast("Login Successful", "success");
    };
    const SignInFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: handleOnSubmit,
    });

    const { values, handleChange, handleSubmit } = SignInFormik;

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
                    value={values.email}
                    onChange={(val) =>
                        handleChange("email")(val.nativeEvent.text)
                    }
                />
            </View>
            <View style={LoginScreenStyles.inputContainer}>
                <Ionicons name="lock-closed" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Password"
                    style={LoginScreenStyles.textInput}
                    secureTextEntry
                    value={values.password}
                    onChange={(val) =>
                        handleChange("password")(val.nativeEvent.text)
                    }
                />
            </View>
            <Pressable
                style={LoginScreenStyles.buttonContainer}
                onPress={() => handleSubmit()}
            >
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

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
} from "react-native";
import React from "react";
import RegisterScreenStyles from "./LoginScreenStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFormik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/StackParamList.types";
import { AuthScreenNames } from "../utils/constants/ScreenNames";
import { showToast, getData, storeData } from "../utils/helpers";

type RegisterFormType = {
    name: string;
    email: string;
    password: string;
};

type Props = NativeStackScreenProps<AuthStackParamList, AuthScreenNames>;

const RegisterScreen = ({ navigation }: Props) => {
    const handleLogin = () => navigation.pop();
    const handleOnSubmit = async (values: RegisterFormType) => {
        const { email, password } = values;
        if (
            values.name === "" ||
            values.email === "" ||
            values.password === ""
        ) {
            return showToast("Please fill all the fields", "error");
        }
        const isExistingUser = await getData(email) !== null;
        if (isExistingUser) {
            showToast("User already exists. Please login", "error");
            handleLogin();
            return;
        }

        await storeData(email, password);

        showToast("Account created successfully. Login now!", "success");
        handleLogin();
    };
    const createNewUserForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: handleOnSubmit,
    });

    const { values, handleSubmit, handleChange } = createNewUserForm;
    return (
        <View>
            <Image
                source={require("../../assets/topVector.png")}
                style={RegisterScreenStyles.topImage}
            />
            <Text style={styles.createText}>Create account</Text>
            <View style={RegisterScreenStyles.inputContainer}>
                <Ionicons name="person" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Name"
                    style={RegisterScreenStyles.textInput}
                    value={values.name}
                    onChange={(val) =>
                        handleChange("name")(val.nativeEvent.text)
                    }
                />
            </View>
            <View style={RegisterScreenStyles.inputContainer}>
                <Ionicons name="mail" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Email"
                    style={RegisterScreenStyles.textInput}
                    value={values.email}
                    onChange={(val) =>
                        handleChange("email")(val.nativeEvent.text)
                    }
                />
            </View>
            <View style={RegisterScreenStyles.inputContainer}>
                <Ionicons name="lock-closed" size={28} color={"#9a9a9a"} />
                <TextInput
                    placeholder="Password"
                    style={RegisterScreenStyles.textInput}
                    secureTextEntry
                    value={values.password}
                    onChange={(val) =>
                        handleChange("password")(val.nativeEvent.text)
                    }
                />
            </View>
            <Pressable
                style={RegisterScreenStyles.buttonContainer}
                onPress={() => handleSubmit()}
            >
                <Text style={RegisterScreenStyles.buttonText}>Sign up</Text>
            </Pressable>
            <Pressable onPress={handleLogin}>
                <Text style={RegisterScreenStyles.footerText}>
                    Already have an account?
                    <Text style={RegisterScreenStyles.footerActionText}>
                        {" Login"}
                    </Text>
                </Text>
            </Pressable>
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    createText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#262626",
    },
});

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { AuthStackParamList } from "./StackParamList.types";
import { AuthScreenNames } from "../utils/constants/ScreenNames";
import RegisterScreen from "../screens/RegisterScreen";

const AuthStack = () => {
    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={AuthScreenNames.Login}
                component={LoginScreen}
            />
            <Stack.Screen
                name={AuthScreenNames.Register}
                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;

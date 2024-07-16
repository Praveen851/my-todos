import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AuthStack from "./AuthStack";
import { AuthContext } from "../utils/context/AuthContext";
import MainStack from "./MainStack";

const AppNav = () => {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {user === "" ? <AuthStack /> : <MainStack />}
            <Toast />
        </NavigationContainer>
    );
};

export default AppNav;

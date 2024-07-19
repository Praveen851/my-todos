import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AuthStack from "./AuthStack";
import { AuthContext } from "../utils/context/AuthContext";
import MainStack from "./MainStack";
import * as Notifications from "expo-notifications";

const AppNav = () => {
    const { user } = useContext(AuthContext);
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        }),
    });

    useEffect(() => {
        const scheduleNotification = async () => {
            await Notifications.requestPermissionsAsync();

            await Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleNotificationAsync({
                content: {
                    title: "Good morning!",
                    body: "Check your dues today and keep track of your tasks!",
                },
                trigger: {
                    hour: 7,
                    minute: 0,
                    repeats: true,
                },
            });
        };
        scheduleNotification();
    }, []);

    return (
        <NavigationContainer>
            {user === "" ? <AuthStack /> : <MainStack />}
            <Toast />
        </NavigationContainer>
    );
};

export default AppNav;

import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AuthStack from "./AuthStack";
import { AuthContext } from "../utils/context/AuthContext";
import MainStack from "./MainStack";
import * as Notifications from "expo-notifications";
import { StateContext } from "../utils/context/StateContext";

const AppNav = () => {
    const { user } = useContext(AuthContext);
    const { todoList } = useContext(StateContext);

    const dueToday = todoList.filter(
        (item) => item.dueDate === new Date().toDateString()
    ).length;

    const notificationMessage = () => {
        return dueToday
            ? `You have ${dueToday} task due today!`
            : "You have no task due today! Add to track";
    };
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
                    title: "Hello",
                    body: `You have ${dueToday} task due today!`,
                },
                trigger: {
                    hour: 8,
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

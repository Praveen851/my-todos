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

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        }),
    });

    const { todoList } = useContext(StateContext);
    const dueToday = todoList.filter(
        (item) => item.dueDate === new Date().toDateString()
    ).length;
    const notificationMessage = dueToday
        ? `You have ${dueToday} task due today!`
        : "You have no task due today! Add to track";
    useEffect(() => {
        const scheduleNotification = async () => {
            await Notifications.requestPermissionsAsync();

            await Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleNotificationAsync({
                content: {
                    title: "Good morning!",
                    body: notificationMessage,
                },
                trigger: {
                    hour: 7,
                    minute: 0,
                    repeats: true,
                },
            });
        };
        scheduleNotification();
    }, [todoList]);

    return (
        <NavigationContainer>
            {user === "" ? <AuthStack /> : <MainStack />}
            <Toast />
        </NavigationContainer>
    );
};

export default AppNav;

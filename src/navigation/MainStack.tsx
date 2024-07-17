import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodayScreen from "../screens/TodayScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList, TabStackParamList } from "./StackParamList.types";
import EditScreen from "../screens/EditScreen";
import { MainScreenNames, TabScreenNames } from "../utils/ScreenNames";

const MainStack = () => {
    const Tab = createBottomTabNavigator<TabStackParamList>();
    const Stack = createNativeStackNavigator<MainStackParamList>();

    const DashBoard = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name={TabScreenNames.OverAllScreen}
                    component={TodayScreen}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="notifications-circle-sharp"
                                size={32}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={TabScreenNames.TodayScreen}
                    component={TodayScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name="today" size={24} />,
                    }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={MainScreenNames.DashBoard}
                component={DashBoard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={MainScreenNames.EditScreen}
                component={EditScreen}
            />
        </Stack.Navigator>
    );
};

export default MainStack;

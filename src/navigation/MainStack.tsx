import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTodoScreen from "../screens/ListTodoScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList, TabStackParamList } from "./StackParamList.types";
import ViewToDoScreen from "../screens/ViewTodo";
import { MainScreenNames, TabScreenNames } from "../utils/ScreenNames";

const MainStack = () => {
    const Tab = createBottomTabNavigator<TabStackParamList>();
    const Stack = createNativeStackNavigator<MainStackParamList>();

    const DashBoard = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name={TabScreenNames.OverAllScreen}
                    component={ListTodoScreen}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons
                                name="notifications-circle-sharp"
                                size={32}
                            />
                        ),
                        title: "All Todos",
                    }}
                />
                <Tab.Screen
                    name={TabScreenNames.ListTodoScreen}
                    component={ListTodoScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name="today" size={24} />,
                        title: "Due today",
                    }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={MainScreenNames.DashBoard}
                component={DashBoard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={MainScreenNames.ViewToDoScreen}
                component={ViewToDoScreen}
                options={{ title: "View Task" }}
            />
        </Stack.Navigator>
    );
};

export default MainStack;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTodoScreen from "../screens/ListTodoScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    DrawerStackParamList,
    MainStackParamList,
    TabStackParamList,
} from "./StackParamList.types";
import EditToDoScreen from "../screens/EditTodoScreen";
import { MainScreenNames, TabScreenNames } from "../utils/ScreenNames";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../screens/DrawerScreen";

const Drawer = createDrawerNavigator<DrawerStackParamList>();
const Stack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();


const DashBoard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={TabScreenNames.AllTodoScreen}
                component={ListTodoScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="notifications-circle-sharp" size={32} />
                    ),
                    title: "All Todos",
                }}
            />
            <Tab.Screen
                name={TabScreenNames.DueTodayScreen}
                component={ListTodoScreen}
                options={{
                    tabBarIcon: () => <Ionicons name="today" size={24} />,
                    title: "Due today",
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={MainScreenNames.DashBoard}
                component={DashBoard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={MainScreenNames.EditToDoScreen}
                component={EditToDoScreen}
                options={{ title: "Edit Task" }}
            />
            <Stack.Screen
                name={MainScreenNames.CreateToDoScreen}
                component={CreateTodoScreen}
                options={{ title: "Create Task" }}
            />
        </Stack.Navigator>
    );
};

const MainStack = () => {
    return (

        <Drawer.Navigator drawerContent={DrawerScreen}>
            <Drawer.Screen component={HomeStack} name="HomeScreen" />
        </Drawer.Navigator>
    );
};

export default MainStack;

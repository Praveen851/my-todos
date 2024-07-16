import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "../screens/DashBoardScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const MainStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Today"
                component={DashBoard}
                options={{
                    tabBarIcon: () => <Ionicons name="today" size={24} />,
                }}
            />
            <Tab.Screen
                name="Overall"
                component={DashBoard}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="notifications-circle-sharp" size={32} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainStack;

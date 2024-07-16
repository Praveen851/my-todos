import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "../screens/DashBoardScreen";

const MainStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashBoard} />
            <Tab.Screen name="Today" component={DashBoard} />
            <Tab.Screen name="Overall" component={DashBoard} />
        </Tab.Navigator>
    );
};

export default MainStack;

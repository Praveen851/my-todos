import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreenNames } from "../utils/ScreenNames";
import { MainStackParamList } from "./StackParamList.types";
import DashBoard from "../screens/DashBoardScreen";

const MainStack = () => {
    const Stack = createNativeStackNavigator<MainStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={MainScreenNames.DashBoard}
                component={DashBoard}
            />
        </Stack.Navigator>
    );
};

export default MainStack;

import { ToDoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    EditScreen: ToDoType;
};

export type TabStackParamList = {
    TodayScreen: undefined;
    OverAllScreen: undefined;
};

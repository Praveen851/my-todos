import { ToDoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    ViewToDoScreen: ToDoType;
};

export type TabStackParamList = {
    ListTodoScreen: undefined;
    OverAllScreen: undefined;
};

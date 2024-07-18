import { ToDoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    EditToDoScreen: ToDoType;
    CreateToDoScreen: ToDoType;
};

export type TabStackParamList = {
    DueTodayScreen: undefined;
    AllTodoScreen: undefined;
};

export type DrawerStackParamList = {
    HomeScreen: undefined;
};

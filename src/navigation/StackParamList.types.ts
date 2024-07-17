import { CreateTodoType, ToDoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    EditToDoScreen: ToDoType;
    CreateToDoScreen: CreateTodoType;
};

export type TabStackParamList = {
    ListTodoScreen: undefined;
    OverAllScreen: undefined;
};

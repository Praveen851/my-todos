import { CreateTodoType, EditTodoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    EditToDoScreen: EditTodoType;
    CreateToDoScreen: CreateTodoType;
};

export type TabStackParamList = {
    ListTodoScreen: undefined;
    OverAllScreen: undefined;
};

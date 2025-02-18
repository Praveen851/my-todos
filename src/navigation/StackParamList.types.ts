import { CreateToDoType, ToDoType } from "../screens/TodoTypes.types";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type MainStackParamList = {
    DashBoard: undefined;
    EditToDoScreen: ToDoType;
    CreateToDoScreen: CreateToDoType | undefined;
};

export type TabStackParamList = {
    DueTodayScreen: {
        isTodayScreen?: boolean;
    };
    AllTodoScreen: undefined;
};

export type DrawerStackParamList = {
    HomeScreen: undefined;
};

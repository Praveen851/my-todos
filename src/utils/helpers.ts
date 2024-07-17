import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { ToastType } from "react-native-toast-message";
import { TODO_LIST_KEY } from "./constants";
import { ToDoType } from "../screens/TodoTypes.types";

export const showToast = (message: string, type: ToastType) => {
    Toast.show({
        type: type,
        text1: message,
        visibilityTime: 3000,
        position: "bottom",
    });
};

export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        return showToast("Something went wrong. Please try again", "error");
    }
};
export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        return showToast("Something went wrong. Please try again", "error");
    }
};

export const authenticate = async (email: string, password: string) => {
    try {
        const value = await getData(email);
        if (value === null)
            showToast("User doesn't exist, Create a new account", "error");
        else if (value !== password) showToast("Invalid Password", "error");
        return value === password;
    } catch (e) {
        return showToast("Something went wrong. Please try again", "error");
    }
};

export const getFormattedDate = (date: string) => {
    return date.split(" ").slice(1, 3).join(" ");
};

export const getTodoList: () => Promise<ToDoType[]> = async () => {
    const todoList = await getData(TODO_LIST_KEY);
    if (!todoList) return [];
    return JSON.parse(todoList);
};

export const getDateString = (date: string) =>
    date === new Date().toDateString() ? "today" : getFormattedDate(date);

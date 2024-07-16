import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { ToastType } from "react-native-toast-message";

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
        return value !== null;
    } catch (e) {
        return showToast("Something went wrong. Please try again", "error");
    }
};

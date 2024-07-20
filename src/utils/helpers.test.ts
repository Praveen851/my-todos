import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import {
    showToast,
    storeData,
    getData,
    authenticate,
    getFormattedDate,
    getTodoList,
    getDateString,
} from "./helpers";

jest.mock("react-native-toast-message", () => ({
    show: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
}));

describe("Utils", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("showToast shows a toast message", () => {
        const message = "Test Message";
        const type = "success";

        showToast(message, type);

        expect(Toast.show).toHaveBeenCalledWith({
            type: type,
            text1: message,
            visibilityTime: 3000,
            position: "bottom",
        });
    });

    test("storeData stores data using AsyncStorage", async () => {
        const key = "testKey";
        const value = "testValue";

        await storeData(key, value);

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, value);
    });

    test("storeData shows toast on error", async () => {
        const key = "testKey";
        const value = "testValue";
        (AsyncStorage.setItem as jest.Mock).mockRejectedValue(
            new Error("Failed")
        );

        await storeData(key, value);

        expect(Toast.show).toHaveBeenCalledWith({
            type: "error",
            text1: "Something went wrong. Please try again",
            visibilityTime: 3000,
            position: "bottom",
        });
    });

    test("getData retrieves data from AsyncStorage", async () => {
        const key = "testKey";
        const mockValue = "testValue";
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(mockValue);

        const result = await getData(key);

        expect(result).toBe(mockValue);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
    });

    test("getData shows toast on error", async () => {
        const key = "testKey";
        (AsyncStorage.getItem as jest.Mock).mockRejectedValue(
            new Error("Failed")
        );

        await getData(key);

        expect(Toast.show).toHaveBeenCalledWith({
            type: "error",
            text1: "Something went wrong. Please try again",
            visibilityTime: 3000,
            position: "bottom",
        });
    });

    test("authenticate checks user credentials", async () => {
        const email = "test@example.com";
        const password = "password123";
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(password);

        const result = await authenticate(email, password);

        expect(result).toBe(true);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(email);
    });

    test("authenticate shows error if user does not exist", async () => {
        const email = "test@example.com";
        const password = "password123";
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

        const result = await authenticate(email, password);

        expect(result).toBe(false);
        expect(Toast.show).toHaveBeenCalledWith({
            type: "error",
            text1: "User doesn't exist, Create a new account",
            visibilityTime: 3000,
            position: "bottom",
        });
    });

    test("getFormattedDate formats the date correctly", () => {
        const date = "Mon Jul 15 2024";
        const formattedDate = getFormattedDate(date);

        expect(formattedDate).toBe("Jul 15");
    });

    test("getTodoList retrieves and parses todo list", async () => {
        const key = "todoList";
        const mockTodoList = JSON.stringify([{ id: "1", title: "Test Todo" }]);
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(mockTodoList);

        const result = await getTodoList(key);

        expect(result).toEqual([{ id: "1", title: "Test Todo" }]);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
    });

    test("getTodoList returns empty array if no data", async () => {
        const key = "todoList";
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

        const result = await getTodoList(key);

        expect(result).toEqual([]);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
    });

    test('getDateString returns "today" if date matches today', () => {
        const today = new Date().toDateString();
        const result = getDateString(today);

        expect(result).toBe("today");
    });

    test("getDateString formats non-today date correctly", () => {
        const date = "Mon Jul 15 2024";
        const result = getDateString(date);

        expect(result).toBe("Jul 15");
    });
});

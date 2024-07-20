import React, { createContext, ReactNode, useEffect, useState } from "react";
import { authenticate, getData, showToast, storeData } from "../helpers";
import { LOGIN_KEY, TODO_LIST_KEY } from "../constants";
import { ActivityIndicator, View } from "react-native";

type AuthContextType = {
    user: string | null;
    login: (email: string, password: string) => Promise<boolean | void>;
    logout: () => Promise<void>;
    authTodoListKey: string;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: async () => {},
    authTodoListKey: "",
});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        isLoggedIn();
    }, []);

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await getData(LOGIN_KEY);
            if (userToken) setUser(userToken);
        } catch (err) {
            showToast("Something went wrong. Please try again", "error");
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        const isValidUser = await authenticate(email, password);

        if (isValidUser) {
            setUser(email);
            await storeData(LOGIN_KEY, email);
        }
        return isValidUser;
    };

    const logout = async () => {
        await storeData(LOGIN_KEY, "");
        setUser("");
    };
    if (isLoading) {
        return (
            <View
                style={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                authTodoListKey: TODO_LIST_KEY + user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

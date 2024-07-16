import React, { createContext, ReactNode, useEffect, useState } from "react";
import { authenticate, getData, showToast, storeData } from "../helpers";
import { LOGIN_KEY } from "../constants";

type AuthContextType = {
    user: string | null;
    login: (email: string, password: string) => Promise<boolean | void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: async () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    useEffect(() => {
        isLoggedIn();
    }, []);

    const isLoggedIn = async () => {
        try {
            let userToken = await getData(LOGIN_KEY);
            if (userToken) setUser(userToken);
        } catch (err) {
            showToast("Something went wrong. Please try again", "error");
        }
    };
    const [user, setUser] = useState<string>("");

    const login = async (email: string, password: string) => {
        const isValidUser = await authenticate(email, password);
        console.log(isValidUser, email, password, "checkAuth");

        if (isValidUser) {
            setUser(email);
            await storeData(LOGIN_KEY, email);
        }
        return isValidUser;
    };

    const logout = async () => {
        setUser("");
        await storeData(LOGIN_KEY, "");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import React, { createContext, ReactNode, useState } from "react";
import { authenticate } from "../helpers";

type AuthContextType = {
    user: string | null;
    login: (email: string, password: string) => Promise<boolean | void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string>("");

    const login = async (email: string, password: string) => {
        const isValidUser = await authenticate(email, password);
        if (isValidUser) setUser(email);
        return isValidUser;
    };

    const logout = () => {
        setUser("");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

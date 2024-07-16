import React, { createContext, ReactNode, useState } from "react";
import { authenticate } from "../helpers";

type AuthContextType = {
    user: string | null;
    login: (email: string, password: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string>("");

    const login = (email: string, password: string) => {
        authenticate(email, password);
        setUser(email);
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

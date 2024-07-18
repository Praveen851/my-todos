import AppNav from "./src/navigation/AppNav";
import AuthProvider from "./src/utils/context/AuthContext";
import StateContext from "./src/utils/context/StateContext";

export default function App() {
    return (
        <AuthProvider>
            <StateContext>
                <AppNav />
            </StateContext>
        </AuthProvider>
    );
}

import AppNav from "./src/navigation/AppNav";
import AuthProvider from "./src/utils/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}

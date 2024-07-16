import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import Toast from "react-native-toast-message";
import AuthProvider from "./src/utils/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthStack />
                <Toast />
            </NavigationContainer>
        </AuthProvider>
    );
}

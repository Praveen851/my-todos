import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import Toast from "react-native-toast-message";

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack />
            <Toast />
        </NavigationContainer>
    );
}

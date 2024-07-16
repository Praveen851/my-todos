import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}

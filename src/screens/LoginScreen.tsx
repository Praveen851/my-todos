import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import ScreenNames from "../utils/constants/ScreenNames";

type Props = NativeStackScreenProps<RootStackParamList, ScreenNames>;

const LoginScreen = ({ route }: Props) => {
    return (
        <View>
            <View style={styles.topImageContainer}>
                <Image
                    source={require("../../assets/topVector.png")}
                    style={styles.topImage}
                />
            </View>
            <Text>{route.params?.title}</Text>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
    },
    topImageContainer: {
        height: 50,
    },
    topImage: {
        width: "100%",
        height: 140,
    },
});

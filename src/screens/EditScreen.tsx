import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/StackParamList.types";

type EditScreenRouteProp = RouteProp<MainStackParamList, "EditScreen">;
const EditScreen = () => {
    const route = useRoute<EditScreenRouteProp>();
    const { description, dueDate, status, title } = route.params;
    return (
        <View>
            <Text>{description}</Text>
            <Text>{dueDate}</Text>
            <Text>{status}</Text>
            <Text>{title}</Text>
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({});

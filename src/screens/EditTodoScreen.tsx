import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/StackParamList.types";

type ViewToDoRouteProp = RouteProp<MainStackParamList, "EditToDoScreen">;
const EditToDoScreen = () => {
    const route = useRoute<ViewToDoRouteProp>();
    const { description, dueDate, status, title } = route.params;
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Title" value={title} maxLength={50} />
            </View>
            <View style={styles.description}>
                <TextInput
                    placeholder="Description"
                    multiline
                    numberOfLines={5}
                    value={description}
                    maxLength={200}
                />
            </View>
            <Text
                style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}
            >
                {`Status: ${status}`}
            </Text>
            <Text
                style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}
            >
                {`Due date: ${dueDate}`}
            </Text>
        </View>
    );
};

export default EditToDoScreen;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#ffffff",
        marginVertical: 10,
        padding: 10,
    },
    description: {
        minHeight: 100,
        backgroundColor: "#ffffff",
        padding: 10,
    },
});

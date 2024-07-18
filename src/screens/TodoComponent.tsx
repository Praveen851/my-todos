import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { MainScreenNames } from "../utils/ScreenNames";
import { MainStackParamList } from "../navigation/StackParamList.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getDateString } from "../utils/helpers";
import { StateContext } from "../utils/context/StateContext";

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;

const TodoComponent = ({
    title,
    status,
    description,
    dueDate,
    id,
}: ToDoType) => {
    const navigation: NavigationProps["navigation"] = useNavigation();

    const { toggleStatus } = useContext(StateContext);

    const handleEdit = () => {
        navigation.navigate(MainScreenNames.EditToDoScreen, {
            description: description,
            dueDate: dueDate,
            status: status,
            title: title,
            id: id,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Pressable onPress={() => toggleStatus(id)}>
                    {status === "pending" && (
                        <Ionicons
                            name="square-outline"
                            size={24}
                            color={"black"}
                        />
                    )}
                    {status === "completed" && (
                        <Ionicons name="checkbox" size={24} color={"green"} />
                    )}
                </Pressable>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.date}>
                    <Text>{getDateString(dueDate)}</Text>
                </View>
                <Pressable style={styles.view} onPress={handleEdit}>
                    <Text style={{ color: "blue" }}>Edit</Text>
                </Pressable>
            </View>
            {description && (
                <View style={{ ...styles.card, marginTop: 10 }}>
                    <Text>{description}</Text>
                </View>
            )}
        </View>
    );
};

export default TodoComponent;

const styles = StyleSheet.create({
    container: { margin: 10, borderWidth: 1, padding: 15 },
    card: { flexDirection: "row", alignItems: "center" },
    title: { marginLeft: 10 },
    date: { position: "absolute", right: 40 },
    view: { position: "absolute", right: 0 },
});

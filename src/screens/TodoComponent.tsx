import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListTodoComponent = ({ title, status }: ToDoType) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {status === "pending" && (
                    <Ionicons name="square-outline" size={24} color={"black"} />
                )}
                {status === "completed" && (
                    <Ionicons name="checkbox" size={24} color={"green"} />
                )}
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

export default ListTodoComponent;

const styles = StyleSheet.create({
    container: { margin: 10, borderWidth: 1, padding: 15 },
    card: { flexDirection: "row", alignItems: "center" },
    title: { marginLeft: 10 },
});

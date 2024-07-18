import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import TodoComponent from "./TodoComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../navigation/StackParamList.types";
import { MainScreenNames } from "../utils/ScreenNames";
import { StateContext } from "../utils/context/StateContext";

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;

const ListTodoScreen = () => {
    const navigation: NavigationProps["navigation"] = useNavigation();
    const { toggleStatus, editTodo, deleteTodo, todoList } =
        useContext(StateContext);

    const handleCreateTodo = () => {
        navigation.navigate(MainScreenNames.CreateToDoScreen, {
            description: "",
            dueDate: "today",
            status: "pending",
            id: (+new Date()).toString(),
            title: "",
        });
    };
    return (
        <>
            {todoList.length === 0 && (
                <View style={styles.textContainer}>
                    <Text style={styles.text}>No todos, add new task</Text>
                </View>
            )}
            <FlatList
                data={todoList}
                renderItem={({ item, index }) => (
                    <TodoComponent
                        {...item}
                        toggleStatus={toggleStatus}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                )}
            />
            <View style={styles.addIcon}>
                <Ionicons
                    name="add-circle"
                    color={"#000000"}
                    size={48}
                    onPress={handleCreateTodo}
                />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    addIcon: { position: "absolute", bottom: 20, right: 20 },
});

export default ListTodoScreen;

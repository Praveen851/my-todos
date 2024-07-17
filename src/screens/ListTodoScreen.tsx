import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TodoComponent from "./TodoComponent";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../navigation/StackParamList.types";
import { MainScreenNames } from "../utils/ScreenNames";
import { getTodoList, storeData } from "../utils/helpers";
import { TODO_LIST_KEY } from "../utils/constants";

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;
const ListTodoScreen = () => {
    const navigation: NavigationProps["navigation"] = useNavigation();

    const [todoList, setTodoList] = useState<ToDoType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodoList();
            setTodoList(todos);
        };

        fetchData();
    }, []);

    const updateTodoState = () => {
        setTodoList([...todoList]);
        storeData(TODO_LIST_KEY, JSON.stringify(todoList));
    };

    const addTodo = (todo: ToDoType) => {
        todoList.unshift(todo);
        updateTodoState();
    };

    const editTodo = (todo: ToDoType, index: number) => {
        todoList[index] = todo;
        updateTodoState();
    };

    const deleteTodo = (index: number) => {
        todoList.splice(index, 1);
        updateTodoState();
    };

    const toggleStatus = (index: number) => {
        todoList[index].status =
            todoList[index].status === "completed" ? "pending" : "completed";
        updateTodoState();
    };
    const handleCreateTodo = () => {
        navigation.navigate(MainScreenNames.CreateToDoScreen, {
            description: "",
            dueDate: "today",
            status: "pending",
            title: "",
            addTodo: addTodo,
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
                        index={index}
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

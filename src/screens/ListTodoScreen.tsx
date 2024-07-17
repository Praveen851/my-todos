import { View, Text, FlatList } from "react-native";
import React from "react";
import TodoComponent from "./TodoComponent";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListTodoScreen = () => {
    const TodoList: ToDoType[] = [];

    const addTodo = (todo: ToDoType) => {
        TodoList.push(todo);
    };
    return (
        <>
            {TodoList.length === 0 && <Text>no todos, Add new</Text>}
            <FlatList
                data={TodoList}
                renderItem={({ item }) => (
                    <TodoComponent {...item} addTodo={addTodo} />
                )}
            ></FlatList>
            <View>
                <Ionicons name="add-circle" color={"green"} size={48} />
            </View>
        </>
    );
};

export default ListTodoScreen;

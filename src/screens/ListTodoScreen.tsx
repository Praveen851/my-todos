import { FlatList } from "react-native";
import React from "react";
import TodoComponent from "./TodoComponent";
import { todoList } from "./TodoTypes.types";

const ListTodoScreen = () => {
    return (
        <FlatList
            data={todoList}
            renderItem={({ item }) => <TodoComponent {...item} />}
        ></FlatList>
    );
};

export default ListTodoScreen;

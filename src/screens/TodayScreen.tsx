import { FlatList } from "react-native";
import React from "react";
import ListTodoComponent from "./TodoComponent";
import { todoList } from "./TodoTypes.types";

const TodayScreen = () => {
    return (
        <FlatList
            data={todoList}
            renderItem={({ item }) => <ListTodoComponent {...item} />}
        ></FlatList>
    );
};

export default TodayScreen;

import { View, Text, FlatList } from "react-native";
import React from "react";
import TodoComponent from "./TodoComponent";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../navigation/StackParamList.types";
import { MainScreenNames } from "../utils/ScreenNames";

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;
const ListTodoScreen = () => {
    const navigation: NavigationProps["navigation"] = useNavigation();
    const TodoList: ToDoType[] = [];

    const addTodo = (todo: ToDoType) => {
        TodoList.push(todo);
    };

    const handleCreateTodo = () => {
        navigation.navigate(MainScreenNames.CreateToDoScreen, {
            description: "",
            dueDate: "today",
            status: "pending",
            title: "",
        });
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
                <Ionicons
                    name="add-circle"
                    color={"green"}
                    size={48}
                    onPress={handleCreateTodo}
                />
            </View>
        </>
    );
};

export default ListTodoScreen;

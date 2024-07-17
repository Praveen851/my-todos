import { View, Text, FlatList } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
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

    const addTodo = (todo: ToDoType) => {
        todoList.push(todo);
        storeData(TODO_LIST_KEY, JSON.stringify(todoList));
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
            {todoList.length === 0 && <Text>no todos, Add new</Text>}
            <FlatList
                data={todoList}
                renderItem={({ item }) => <TodoComponent {...item} />}
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

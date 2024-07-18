import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext, useMemo } from "react";
import TodoComponent from "./TodoComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    MainStackParamList,
    TabStackParamList,
} from "../navigation/StackParamList.types";
import { MainScreenNames, TabScreenNames } from "../utils/ScreenNames";
import { StateContext } from "../utils/context/StateContext";

type TabNavigationProps = NativeStackScreenProps<
    TabStackParamList,
    TabScreenNames
>;

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;

const ListTodoScreen = ({ route }: TabNavigationProps) => {
    const navigation: NavigationProps["navigation"] = useNavigation();
    const { todoList } = useContext(StateContext);

    const todoListData = useMemo(
        () =>
            route.params?.isTodayScreen
                ? todoList.filter(
                      (item) => item.dueDate === new Date().toDateString()
                  )
                : todoList,
        [route.params?.isTodayScreen, todoList]
    );

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
            {todoListData.length === 0 && route.params?.isTodayScreen && (
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        No todos today, add new task
                    </Text>
                </View>
            )}
            <FlatList
                data={todoListData}
                renderItem={({ item }) => <TodoComponent {...item} />}
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

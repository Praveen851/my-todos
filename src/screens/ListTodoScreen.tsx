import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useContext, useMemo, useState } from "react";
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
import { capitalize } from "../utils/helpers";

type TabNavigationProps = NativeStackScreenProps<
    TabStackParamList,
    TabScreenNames
>;

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;

const ListTodoScreen = ({ route }: TabNavigationProps) => {
    const [filterByStatus, setFilterByStatus] = useState<
        "pending" | "completed" | "all"
    >("all");
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
    const toggleFilterByStatus = () => {
        if (filterByStatus === "completed") setFilterByStatus("pending");
        else setFilterByStatus("completed");
    };

    const getFilteredData = useMemo(() => {
        if (filterByStatus === "all") return todoListData;
        return todoListData.filter((item) => item.status === filterByStatus);
    }, [filterByStatus, todoListData]);
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
                data={getFilteredData}
                renderItem={({ item }) => <TodoComponent {...item} />}
            />
            <View style={styles.filterSection}>
                <Pressable
                    onPress={toggleFilterByStatus}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.filterText}>
                        Status: {capitalize(filterByStatus)}
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setFilterByStatus("all")}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.filterText}>Clear filter</Text>
                </Pressable>
                <View style={styles.addIcon}>
                    <Ionicons
                        name="add-circle"
                        color={"#000000"}
                        size={48}
                        onPress={handleCreateTodo}
                    />
                </View>
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
    addIcon: {
        marginTop: 20,
    },
    filterSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginVertical: 24,
        borderRadius: 24,
        elevation: 3,
        backgroundColor: "black",
    },
    filterText: {
        fontWeight: "bold",
        color: "white",
    },
});

export default ListTodoScreen;

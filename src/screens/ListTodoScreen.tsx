import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Pressable,
    Platform,
} from "react-native";
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
import { capitalize, getDateString } from "../utils/helpers";
import DateTimePicker from "@react-native-community/datetimepicker";

type TabNavigationProps = NativeStackScreenProps<
    TabStackParamList,
    TabScreenNames
>;

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    MainScreenNames
>;

const ListTodoScreen = ({ route }: TabNavigationProps) => {
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const toggleDatePicker = () => setShowPicker(!showPicker);
    const [filterByStatus, setFilterByStatus] = useState<
        "pending" | "completed" | "all"
    >("all");
    const [filterByDueDate, setFilterByDueDate] = useState("");
    const navigation: NavigationProps["navigation"] = useNavigation();
    const { todoList } = useContext(StateContext);
    const isTodayScreen = route.params?.isTodayScreen;
    const todoListData = useMemo(
        () =>
            isTodayScreen
                ? todoList.filter(
                      (item) => item.dueDate === new Date().toDateString()
                  )
                : todoList,
        [isTodayScreen, todoList]
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
        return todoListData.filter((item) => {
            const statusMatch =
                filterByStatus === "all" || item.status === filterByStatus;
            const dueDateMatch =
                !filterByDueDate || item.dueDate === filterByDueDate;
            return statusMatch && dueDateMatch;
        });
    }, [filterByStatus, todoListData, filterByDueDate]);

    const onChange: (
        {
            type,
        }: {
            type: string;
        },
        selectedDate: any
    ) => void = ({ type }, selectedDate) => {
        if (type == "set") {
            if (Platform.OS === "android") {
                toggleDatePicker();
                setFilterByDueDate(selectedDate.toDateString());
            }
        } else {
            toggleDatePicker();
        }
    };

    const clearFilter = () => {
        setFilterByStatus("all");
        setFilterByDueDate("");
    };

    const noTodosMessage =
        filterByDueDate || filterByStatus
            ? "No todos, with the selected filter"
            : "No todos, add new task";

    const showNoTodosMessage = getFilteredData.length === 0;

    return (
        <>
            {showPicker && (
                <DateTimePicker
                    mode="date"
                    value={
                        filterByDueDate ? new Date(filterByDueDate) : new Date()
                    }
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}

            {showNoTodosMessage && (
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{noTodosMessage}</Text>
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
                {!isTodayScreen && (
                    <Pressable
                        onPress={toggleDatePicker}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.filterText}>
                            {filterByDueDate
                                ? getDateString(filterByDueDate)
                                : "Due date"}
                        </Text>
                    </Pressable>
                )}
                <Pressable onPress={clearFilter} style={styles.buttonContainer}>
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
        backgroundColor: "#cfcfcf",
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

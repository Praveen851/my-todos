import {
    Pressable,
    StyleSheet,
    TextInput,
    View,
    Text,
    Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import ButtonStyle from "./LoginScreenStyles";
import { ToDoType } from "./TodoTypes.types";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getDateString, showToast } from "../utils/helpers";
import { MainStackParamList } from "../navigation/StackParamList.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StateContext } from "../utils/context/StateContext";

type NavigationProps = NativeStackScreenProps<
    MainStackParamList,
    "CreateToDoScreen"
>;

type CreateTodoScreenProps = {
    isEdit?: boolean;
    description?: string;
    title?: string;
    status?: "completed" | "pending";
    id?: number;
    dueDate?: string;
};

const CreateTodoScreen = ({
    isEdit,
    description = "",
    title = "",
    status = "pending",
    id = Date.now(),
    dueDate = new Date().toDateString(),
}: CreateTodoScreenProps) => {
    const navigation: NavigationProps["navigation"] = useNavigation();
    const { addTodo, editTodo, deleteTodo } = useContext(StateContext);
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const toggleDatePicker = () => setShowPicker(!showPicker);
    const [todo, setTodo] = useState<ToDoType>({
        title: title,
        description: description,
        dueDate: dueDate,
        status: status,
        id: id,
    });

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
                setTodo({
                    ...todo,
                    dueDate: selectedDate.toDateString(),
                });
            }
        } else {
            toggleDatePicker();
        }
    };
    const handleGoBack = () => {
        navigation.pop();
    };
    const handleSave = () => {
        if (!todo.title) {
            return showToast("Title cannot be empty", "error");
        }
        if (isEdit && typeof editTodo === "function") {
            editTodo(todo, id);
        } else addTodo(todo);
        handleGoBack();
    };

    const handleDelete = () => {
        if (isEdit && typeof deleteTodo === "function") {
            deleteTodo(id);
        }
        handleGoBack();
    };

    return (
        <View>
            {showPicker && (
                <DateTimePicker
                    mode="date"
                    value={new Date(dueDate)}
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Title"
                    value={todo.title}
                    maxLength={50}
                    onChange={(e) =>
                        setTodo({ ...todo, title: e.nativeEvent.text })
                    }
                />
            </View>
            <View style={styles.description}>
                <TextInput
                    placeholder="Description"
                    multiline
                    numberOfLines={5}
                    value={todo.description}
                    maxLength={200}
                    onChange={(e) =>
                        setTodo({ ...todo, description: e.nativeEvent.text })
                    }
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginVertical: 10,
                    }}
                >
                    {`Due date: `}
                </Text>
                <Pressable onPress={toggleDatePicker}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginVertical: 10,
                            color: "blue",
                        }}
                    >
                        {getDateString(todo.dueDate)}
                    </Text>
                </Pressable>
            </View>

            <Pressable style={ButtonStyle.buttonContainer} onPress={handleSave}>
                <Text style={ButtonStyle.buttonText}>Save</Text>
            </Pressable>
            {isEdit && (
                <Pressable
                    style={ButtonStyle.buttonContainer}
                    onPress={handleDelete}
                >
                    <Text style={ButtonStyle.buttonText}>Delete</Text>
                </Pressable>
            )}
        </View>
    );
};

export default CreateTodoScreen;
const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#ffffff",
        marginVertical: 10,
        padding: 10,
    },
    description: {
        minHeight: 100,
        backgroundColor: "#ffffff",
        padding: 10,
    },
});

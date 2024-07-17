import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import ButtonStyle from "./LoginScreenStyles";
import { ToDoType } from "./TodoTypes.types";

const CreateTodoScreen = ({ isEdit }: { isEdit?: boolean }) => {
    const [todo, setTodo] = useState<Omit<ToDoType, "status">>({
        title: "",
        description: "",
        dueDate: new Date().toDateString(),
    });
    const { description, dueDate, title } = todo;
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Title"
                    value={title}
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
                    value={description}
                    maxLength={200}
                />
            </View>
            {isEdit && (
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginVertical: 10,
                    }}
                >
                    {`Status: ${status}`}
                </Text>
            )}
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
                <Pressable>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginVertical: 10,
                            color: "blue",
                        }}
                    >
                        {dueDate === new Date().toDateString()
                            ? "today"
                            : dueDate}
                    </Text>
                </Pressable>
            </View>
            <Pressable style={ButtonStyle.buttonContainer}>
                <Text style={ButtonStyle.buttonText}>Save</Text>
            </Pressable>
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

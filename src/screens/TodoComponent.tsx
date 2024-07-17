import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ToDoType } from "./TodoTypes.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const ListTodoComponent = ({ title, status }: ToDoType) => {
    const [currDate, setCurrDate] = useState<string>("today");
    const [date, setDate] = useState<Date>(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const toggleDatePicker = () => setShowPicker(!showPicker);
    const onChange: (
        {
            type,
        }: {
            type: any;
        },
        selectedDate: any
    ) => void = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === "android") {
                toggleDatePicker();
                setCurrDate(currentDate.toDateString());
            }
        } else {
            toggleDatePicker();
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {status === "pending" && (
                    <Ionicons name="square-outline" size={24} color={"black"} />
                )}
                {status === "completed" && (
                    <Ionicons name="checkbox" size={24} color={"green"} />
                )}
                <Text style={styles.title}>{title}</Text>
                <Pressable style={styles.date} onPress={toggleDatePicker}>
                    <Text>{currDate}</Text>
                </Pressable>

                <Pressable style={styles.view} onPress={() => {}}>
                    <Text style={{ color: "blue" }}>View</Text>
                </Pressable>
            </View>
            {showPicker && (
                <DateTimePicker mode="date" value={date} onChange={onChange} />
            )}
        </View>
    );
};

export default ListTodoComponent;

const styles = StyleSheet.create({
    container: { margin: 10, borderWidth: 1, padding: 15 },
    card: { flexDirection: "row", alignItems: "center" },
    title: { marginLeft: 10 },
    date: { position: "absolute", right: 40 },
    view: { position: "absolute", right: 0 },
});

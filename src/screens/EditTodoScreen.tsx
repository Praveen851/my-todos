import React from "react";

import { MainStackParamList } from "../navigation/StackParamList.types";
import CreateTodoScreen from "./CreateTodoScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<MainStackParamList, "EditToDoScreen">;

const EditToDoScreen = ({ route }: Props) => {
    const { description, dueDate, status, title, id } = route.params;
    return (
        <CreateTodoScreen
            description={description}
            dueDate={dueDate}
            status={status}
            title={title}
            isEdit
            id={id}
        />
    );
};

export default EditToDoScreen;

import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/StackParamList.types";
import CreateTodoScreen from "./CreateTodoScreen";

type ViewToDoRouteProp = RouteProp<MainStackParamList, "EditToDoScreen">;
const EditToDoScreen = () => {
    const route = useRoute<ViewToDoRouteProp>();
    const { description, dueDate, status, title, index, editTodo } =
        route.params;
    return (
        <CreateTodoScreen
            description={description}
            dueDate={dueDate}
            status={status}
            title={title}
            index={index}
            editTodo={editTodo}
            isEdit
        />
    );
};

export default EditToDoScreen;

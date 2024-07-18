import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../navigation/StackParamList.types";
import CreateTodoScreen from "./CreateTodoScreen";

type ViewToDoRouteProp = RouteProp<MainStackParamList, "EditToDoScreen">;
const EditToDoScreen = () => {
    const route = useRoute<ViewToDoRouteProp>();
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

export type ToDoType = {
    title: string;
    description: string;
    dueDate: string;
    status: "completed" | "pending";
    id: number;
};

export type CreateToDoType = ToDoType & {
    isEdit?: boolean;
};

export type TodoListType = ToDoType[];

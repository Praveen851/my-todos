export type ToDoType = {
    title: string;
    description: string;
    dueDate: string;
    status: "completed" | "pending";
    id: string;
};

export type TodoListType = ToDoType[];

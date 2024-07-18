export type ToDoType = {
    title: string;
    description: string;
    dueDate: string;
    status: "completed" | "pending";
    id: string;
};

export type CreateTodoType = ToDoType & {
    addTodo: (todo: ToDoType) => void;
};

export type EditTodoType = ToDoType & {
    editTodo: (todo: ToDoType, id: string) => void;
    index: number;
    deleteTodo: (id: string) => void;
};

export type TodoListType = ToDoType[];

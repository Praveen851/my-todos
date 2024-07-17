export type ToDoType = {
    title: string;
    description: string;
    dueDate: string;
    status: "completed" | "pending";
};

export type TodoListType = ToDoType[];

export const todoList: TodoListType = [
    {
        title: "Task 1",
        description: "Task 1 description",
        dueDate: "Wed Jul 17 2024",
        status: "completed",
    },
    {
        title: "Task 2",
        description: "Task 2 description",
        dueDate: "Thu Jul 18 2024",
        status: "pending",
    },
    {
        title: "Task 3",
        description: "Task 3 description",
        dueDate: "Fri Jul 19 2024",
        status: "pending",
    },
    {
        title: "Task 4",
        description: "Task 4 description",
        dueDate: "Sat Jul 20 2024",
        status: "pending",
    },
    {
        title: "Task 5",
        description: "Task 5 description",
        dueDate: "Sun Jul 21 2024",
        status: "pending",
    },
    {
        title: "Task 6",
        description: "Task 6 description",
        dueDate: "Mon Jul 22 2024",
        status: "pending",
    },
    {
        title: "Task 7",
        description: "Task 7 description",
        dueDate: "Tue Jul 23 2024",
        status: "pending",
    },
    {
        title: "Task 8",
        description: "Task 8 description",
        dueDate: "Wed Jul 24 2024",
        status: "pending",
    },
];

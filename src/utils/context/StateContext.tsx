import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { getTodoList, storeData } from "../helpers";
import { ToDoType } from "../../screens/TodoTypes.types";
import { AuthContext } from "./AuthContext";

type StateContextType = {
    addTodo: (todo: ToDoType) => void;
    deleteTodo: (id: number) => void;
    editTodo: (todo: ToDoType, id: number) => void;
    toggleStatus: (id: number) => void;
    todoList: ToDoType[];
};

export const StateContext = createContext<StateContextType>({
    addTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {},
    toggleStatus: () => {},
    todoList: [],
});

interface StateProviderProps {
    children: ReactNode;
}

const StateProvider = ({ children }: StateProviderProps) => {
    const [todoList, setTodoList] = useState<ToDoType[]>([]);
    const { authTodoListKey } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodoList(authTodoListKey);
            setTodoList(todos);
        };

        fetchData();
    }, [authTodoListKey]);

    const updateTodoState = (updateTodoList: ToDoType[]) => {
        setTodoList(updateTodoList);
        storeData(authTodoListKey, JSON.stringify(updateTodoList));
    };

    const addTodo = (todo: ToDoType) => {
        const updatedTodoList = [todo, ...todoList];
        updateTodoState(updatedTodoList);
    };

    const editTodo = (todo: ToDoType, id: number) => {
        const index = todoList.findIndex((item) => item.id === id);
        const updatedTodoList = [
            ...todoList.slice(0, index),
            todo,
            ...todoList.slice(index + 1),
        ];
        updateTodoState(updatedTodoList);
    };

    const deleteTodo = (id: number) => {
        const updatedTodoList = todoList.filter((item) => item.id !== id);
        updateTodoState(updatedTodoList);
    };

    const toggleStatus = (id: number) => {
        const index = todoList.findIndex((item) => item.id === id);
        const todo: ToDoType = {
            ...todoList[index],
            status:
                todoList[index].status === "completed"
                    ? "pending"
                    : "completed",
        };
        const updatedTodoList = [
            ...todoList.slice(0, index),
            todo,
            ...todoList.slice(index + 1),
        ];

        updateTodoState(updatedTodoList);
    };

    return (
        <StateContext.Provider
            value={{
                addTodo,
                deleteTodo,
                editTodo,
                toggleStatus,
                todoList,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;

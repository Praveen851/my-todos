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
    deleteTodo: (id: string) => void;
    editTodo: (todo: ToDoType, id: string) => void;
    toggleStatus: (id: string) => void;
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

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<ToDoType[]>([]);
    const { authTodoListKey } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodoList(authTodoListKey);
            setTodoList(todos);
        };

        fetchData();
    }, [authTodoListKey]);

    const updateTodoState = () => {
        setTodoList([...todoList]);
        storeData(authTodoListKey, JSON.stringify(todoList));
    };

    const addTodo = (todo: ToDoType) => {
        todoList.unshift(todo);
        updateTodoState();
    };

    const editTodo = (todo: ToDoType, id: string) => {
        const index = todoList.findIndex((item) => item.id === id);
        todoList[index] = todo;
        updateTodoState();
    };

    const deleteTodo = (id: string) => {
        const index = todoList.findIndex((item) => item.id === id);
        todoList.splice(index, 1);
        updateTodoState();
    };

    const toggleStatus = (id: string) => {
        const index = todoList.findIndex((item) => item.id === id);
        todoList[index].status =
            todoList[index].status === "completed" ? "pending" : "completed";
        updateTodoState();
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

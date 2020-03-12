import { createContext } from 'react';

const TodoContext = createContext({
    todos: [],
    isEditState: false,
    toBeEditedTodo: null,
    getTodos: () => {},
    addTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {},
});

export default TodoContext;
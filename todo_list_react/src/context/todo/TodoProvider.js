import React, { useReducer, useContext } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import {
  loadFromLS,
  saveToLS,
  editInLS,
  deleteFromLS
} from "../../utility/LocalStorage";
import AlertContext from "../alert/AlertContext";

const TodoProvider = props => {
  const initialState = {
    todos: [],
    isEditState: false,
    toBeEditedTodo: null
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const { setAlert } = useContext(AlertContext);

  const getTodos = () => {
    dispatch({
      type: "GET_TODOS",
      payload: loadFromLS()
    });
  };

  const addTodo = todo => {
    todo.id = Date.now();
    saveToLS(todo);

    dispatch({
      type: "ADD_TODO",
      payload: todo
    });

    setAlert(`${todo.title} added to the list`, "success");
  };

  const editTodo = editedTodo => {
    editInLS(editedTodo);

    dispatch({
      type: "EDIT_TODO",
      payload: editedTodo
    });

    setAlert(`Todo updated to ${editedTodo.title}`, "success");
  };

  const deleteTodo = deletedTodo => {
    deleteFromLS(deletedTodo);
    dispatch({
      type: "DELETE_TODO",
      payload: deletedTodo
    });

    setAlert(`${deletedTodo.title} deleted`, "danger");
  };

  const setEditState = toBeEditedTodo => {
    dispatch({
      type: "SET_EDIT_STATE",
      payload: toBeEditedTodo
    });
  };

  const cancelEditState = () => {
    dispatch({
      type: "CANCEL_EDIT_STATE"
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        isEditState: state.isEditState,
        toBeEditedTodo: state.toBeEditedTodo,
        getTodos,
        addTodo,
        editTodo,
        deleteTodo,
        setEditState,
        cancelEditState
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

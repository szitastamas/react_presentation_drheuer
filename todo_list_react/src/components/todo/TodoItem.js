import React, { memo, useContext } from "react";
import TodoContext from "../../context/todo/TodoContext";

const TodoItem = ({ todo }) => {

  const { editTodo, deleteTodo, setEditState } = useContext(TodoContext)

  const setCompleted = () => {
    const currentCompletionState = todo.isCompleted;
    const newTodo = {
      ...todo,
      isCompleted: !currentCompletionState
    }
    editTodo(newTodo);
  }

  return (
    <li className="collection-item">
      <span className="left completed-icon" onClick={setCompleted}>
        <i className={`material-icons ${todo.isCompleted ? "green-text" : "teal-text"}`}>
          {todo.isCompleted ? "checked" : "assignment"}
        </i>
      </span>
      {todo.title}
      <a className="secondary-content delete-btn red-text" onClick={() => deleteTodo(todo)}>
        <i className="material-icons">delete</i>
      </a>
      <a className="secondary-content edit-btn" onClick={() => setEditState(todo)}>
        <i className="material-icons">edit</i>
      </a>
    </li>
  );
};

export default memo(TodoItem);

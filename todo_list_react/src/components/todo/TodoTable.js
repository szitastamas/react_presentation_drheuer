import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../../context/todo/TodoContext";

const TodoTable = () => {

  const { todos } = useContext(TodoContext)

  return (
    <div>
      {todos.length === 0 ? (
        <h5>No todos to be shown...</h5>
      ) : (
        <ul className="collection with-header">
          <li key={"collection-header"} className="collection-header">
            <strong>Your todos:</strong>
          </li>
          {todos.map(todo => {
            return (
              <TodoItem key={todo.id} todo={todo}/>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoTable;

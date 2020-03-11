import React from "react";
import TodoItem from "./TodoItem";

export const TodoTable = ({ todos, deleteTodo, setEditState, editTodo }) => {
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
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo} 
                setEditState={setEditState} 
                editTodo={editTodo}/>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoTable;

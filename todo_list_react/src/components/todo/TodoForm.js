import React, { Fragment, useState, useContext, useEffect } from "react";
import TodoContext from "../../context/todo/TodoContext";
import AlertContext from "../../context/alert/AlertContext";

const TodoForm = () => {
  const {
    isEditState,
    addTodo,
    editTodo,
    cancelEditState,
    toBeEditedTodo
  } = useContext(TodoContext);

  const { setAlert } = useContext(AlertContext);

  const [todo, setTodo] = useState({
    id: null,
    title: "",
    isCompleted: false
  });

  useEffect(() => {
    if (isEditState) {
      setTodo({ ...toBeEditedTodo });
    } else {
      resetState();
    }
    // eslint-disable-next-line
  }, [isEditState]);

  const handleChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (todo.title !== "") {
      isEditState ? editTodo(todo) : addTodo(todo);
      resetState();
    } else {
      setAlert("Title must not be empty", "danger");
    }
  };

  const resetState = () => setTodo({ id: null, title: "", isCompleted: false });

  const showButtonsAccordingToEditState = () => {
    if (isEditState) {
      return (
        <Fragment>
          <button className="btn edit-btn yellow darken-3">Edit Todo</button>
          <div className="btn green lighten-2" onClick={cancelEditState}>
            Cancel
          </div>
        </Fragment>
      );
    } else {
      return <button className="btn">Add Todo</button>;
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="todo-input"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
          {!isEditState && (
            <label htmlFor="todo-input">Type in a Todo...</label>
          )}
        </div>
        <div className="input-field">{showButtonsAccordingToEditState()}</div>
      </form>
      <div className="divider" style={{ margin: "3rem 0 1.5rem 0" }}></div>
    </Fragment>
  );
};

export default TodoForm;

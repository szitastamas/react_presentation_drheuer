import React, { Component, Fragment } from "react";

class TodoForm extends Component {
  state = {
    todo: {
      id: null,
      title: "",
      isCompleted: false
    }
  };

  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.isEditState === false && nextProps.isEditState === true) {
      this.setState({
        todo: { ...nextProps.toBeEditedTodo }
      });
    } else if (
      this.props.isEditState === true &&
      nextProps.isEditState === false
    ) {
      this.resetState();
    }
  }
  
  handleChange = e => {
    this.setState({
      todo: {
        ...this.state.todo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.todo.title !== "") {
      this.props.isEditState
        ? this.props.editTodo(this.state.todo)
        : this.props.addTodo(this.state.todo);
      
        this.resetState();
    } else {
      this.props.setAlert("Todo title must not be empty", "danger")
    }
  };

  resetState = () => this.setState({ todo: { id: null, title: "", isCompleted: false } })

  showButtonsAccordingToEditState = () => {
    if (this.props.isEditState) {
      return (
        <Fragment>
          <button className="btn edit-btn yellow darken-3">Edit Todo</button>
          <div
            className="btn green lighten-2"
            onClick={this.props.cancelEditState}
          >
            Cancel
          </div>
        </Fragment>
      );
    } else {
      return <button className="btn">Add Todo</button>;
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              id="todo-input"
              name="title"
              value={this.state.todo.title}
              onChange={this.handleChange}
            />
            {!this.props.isEditState && (
              <label htmlFor="todo-input">Type in a Todo...</label>
              )}
          </div>
          <div className="input-field">
            {this.showButtonsAccordingToEditState()}
          </div>
        </form>
        <div className="divider" style={{ margin: "3rem 0 1.5rem 0" }}></div>
      </Fragment>
    );
  }
}

export default TodoForm;

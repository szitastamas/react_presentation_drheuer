import React, { Component, Fragment } from "react";

class TodoForm extends Component {
  state = {
    todo: {
      id: null,
      title: ""
    }
  };

  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.isEditState === false && nextProps.isEditState === true) {
      const { id, title } = nextProps.toBeEditedTodo;
      this.setState({
        todo: { id, title }
      });
    } else if (
      this.props.isEditState === true &&
      nextProps.isEditState === false
    ) {
      this.setState({
        todo: { id: null, title: "" }
      });
    }
  }

  handleChange = e => {
    this.setState({
      todo: {
        id: this.props.isEditState ? this.props.toBeEditedTodo.id : null,
        title: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.todo.title !== "") {
      this.props.isEditState
        ? this.props.editTodo(this.state.todo)
        : this.props.addTodo(this.state.todo);
      this.setState({ todo: { id: null, title: "" } });
    } else {
      this.props.setAlert("Todo title must not be empty", "danger")
    }
  };

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
              value={this.state.todo.title}
              onChange={this.handleChange}
            />
            {!this.props.isEditState && (
              <label htmlFor="todo-input">Type in a Todo...</label>
            )}
          </div>
          {this.showButtonsAccordingToEditState()}
        </form>
        <div className="divider" style={{ margin: "3rem 0 1.5rem 0" }}></div>
      </Fragment>
    );
  }
}

export default TodoForm;

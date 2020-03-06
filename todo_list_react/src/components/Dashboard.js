import React, { Component } from 'react'
import TodoForm from './todo/TodoForm'
import TodoTable from './todo/TodoTable'

class Dashboard extends Component {
    state = {
        todos: [{
            id: 1234,
            title: 'Buy milk'
        }],
        toBeEditedTodo: null,
        isEditState: false
    }
    
    addTodo = async (todo) => {
        todo.id=Date.now();
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    setEditState = (todo) => {
        this.setState({
            toBeEditedTodo: {...todo},
            isEditState: true
        })
    }

    cancelEditState = () => {
        this.setState({
            toBeEditedTodo: null,
            isEditState: false
        })
    }

    editTodo = (editedTodo) => {
        this.setState({
            todos: this.state.todos.map(todo => todo.id === editedTodo.id ? editedTodo : todo),
            toBeEditedTodo: null,
            isEditState: false
        })
    }

    deleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render(){
        return (
            <div>
                <h3 className="teal-text flow-text">Todo Dashboard</h3>
                <TodoForm 
                    addTodo={this.addTodo} 
                    editTodo={this.editTodo} 
                    isEditState={this.state.isEditState} 
                    toBeEditedTodo={this.state.toBeEditedTodo}
                    cancelEditState={this.cancelEditState}/>
                <TodoTable 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    setEditState={this.setEditState}/>
            </div>
        )
    }
}

export default Dashboard;
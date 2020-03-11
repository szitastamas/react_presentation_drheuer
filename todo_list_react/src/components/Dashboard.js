import React, { Component } from 'react'
import TodoForm from './todo/TodoForm'
import TodoTable from './todo/TodoTable'
import { loadFromLS, saveToLS, editInLS, deleteFromLS } from './utility/LocalStorage'
import Alert from './alert/Alert'

class Dashboard extends Component {
    state = {
        todos: [],
        toBeEditedTodo: null,
        isEditState: false,
        alerts: []
    }

    componentDidMount = () => {
        this.setState({
            todos: loadFromLS()
        })
    }
    
    addTodo = (todo) => {
        
        todo.id=Date.now();
        saveToLS(todo);

        this.setState({
            todos: [...this.state.todos, todo]
        })

        this.setAlert(`"${todo.title}" added`, "success")
    }

    setEditState = (todo) => {

        this.state.isEditState && this.cancelEditState();

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

        editInLS(editedTodo);

        this.setState({
            todos: this.state.todos.map(todo => todo.id === editedTodo.id ? editedTodo : todo),
            toBeEditedTodo: null,
            isEditState: false
        })

        this.setAlert(`Todo updated to: ${editedTodo.title}`, "success")

    }

    deleteTodo = deletedTodo => {
        if(this.state.isEditState && deletedTodo.id === this.state.toBeEditedTodo.id){
            this.cancelEditState();
        }

        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== deletedTodo.id)
        })

        deleteFromLS(deletedTodo.id);
        this.setAlert(`"${deletedTodo.title}" deleted`, "danger")
    }

    setAlert = (text, type) => {
        const id = Date.now();
        this.setState({
            alerts: [...this.state.alerts, { id, text, type }]
        })

        setTimeout(() => this.setState({ alerts: this.state.alerts.filter(alert => alert.id !== id) }),3000)
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
                    cancelEditState={this.cancelEditState}
                    setAlert={this.setAlert}/>
                {this.state.alerts.length > 0 && this.state.alerts.map(alert => <Alert key={alert.id} text={alert.text} type={alert.type}/>)}
                <TodoTable 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    setEditState={this.setEditState}
                    editTodo={this.editTodo}/>
            </div>
        )
    }
}

export default Dashboard;


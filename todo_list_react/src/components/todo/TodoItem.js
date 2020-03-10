import React, {memo} from 'react'

const TodoItem = ({ todo, deleteTodo, setEditState }) => {
    return (
        <li className="collection-item">
            {todo.title}
            <a className="secondary-content delete-btn red-text" onClick={() => deleteTodo(todo.id)}><i className="material-icons">delete</i></a>
            <a className="secondary-content edit-btn" onClick={() => setEditState(todo)}><i className="material-icons">edit</i></a>
        </li>
    )
}

export default memo(TodoItem);
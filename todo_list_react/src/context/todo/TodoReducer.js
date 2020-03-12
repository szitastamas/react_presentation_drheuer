export default (state, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
                isEditState: false,
                toBeEditedTodo: null
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case 'SET_EDIT_STATE':
            return {
                ...state,
                isEditState: true,
                toBeEditedTodo: action.payload
            }
        case 'CANCEL_EDIT_STATE':
            return {
                ...state,
                isEditState: false,
                toBeEditedTodo: null
            }
        default:
            return state;
    }
}
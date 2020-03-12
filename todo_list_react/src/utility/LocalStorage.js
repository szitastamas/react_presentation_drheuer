export const saveToLS = (todo) => {
    const lsTodos = loadFromLS();
    localStorage.setItem("todos", JSON.stringify([...lsTodos, todo]))
}

export const editInLS = (editedTodo) =>{
    const lsTodos = loadFromLS();
    localStorage.setItem("todos", JSON.stringify(lsTodos.map(todo => todo.id === editedTodo.id ? editedTodo : todo)))
}

export const deleteFromLS = (deletedTodo) => {
    const lsTodos = loadFromLS();
    localStorage.setItem("todos", JSON.stringify(lsTodos.filter(todo => todo.id !== deletedTodo.id)))
}

export const loadFromLS = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}
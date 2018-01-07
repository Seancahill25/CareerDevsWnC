var todos = ['item 1', 'item 2', 'item3']

function displayTodos() {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

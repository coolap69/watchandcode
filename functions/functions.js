// It should have a function to display todos

var todos = ['item 1', 'item 2', 'item 3']
undefined

function displayTodos() {
console.log('My todos:', todos);
}
undefined

displayTodos()
My todos: (3) ["item 1", "item 2", "item 3"]


// It should have a function to add todos

function addTodo() {
todos.push('new todo');
}
undefined

addTodo()
undefined

todos
(4) ["item 1", "item 2", "item 3", "new todo"]
displayTodos()
My todos: (4) ["item 1", "item 2", "item 3", "new todo"]
undefined

function addTodo() {
todos.push('new todo');
displayTodos();
}
undefined

addTodo()
My todos: (5) ["item 1", "item 2", "item 3", "new todo", "new todo"]
undefined

function addTodo(todo) {
todos.push(todo);
displayTodos();
}

undefined
addTodo('hello there')
My todos: (6) ["item 1", "item 2", "item 3", "new todo", "new todo", "hello there"]
undefined

// It should have a function to change todos

function changeTodo(position, newValue) {
todos[0] = 'some new value';
}
undefined

function changeTodo(position, newValue) {
todos[position] = newValue;
}
undefined

displayTodos()
My todos: (6) ["item 1", "item 2", "item 3", "new todo", "new todo", "hello there"]
undefined

changeTodo(0, 'changed')
undefined

displayTodos()
My todos: (6) ["changed", "item 2", "item 3", "new todo", "new todo", "hello there"]
undefined

function changeTodo(position, newValue) {
todos[position] = newValue;
displayTodos();
}
undefined

changeTodo()
My todos: (6) ["changed", "item 2", "item 3", "new todo", "new todo", "hello there", undefined: undefined]
undefined
changeTodo(0, 'change again')
My todos: (6) ["change again", "item 2", "item 3", "new todo", "new todo", "hello there", undefined: undefined]
undefined


// It should have a delete function

function deleteTodo(position) {
todos.splice(0, 1);
displayTodos();
}
deleteTodo(0)
My todos: (6) [undefined, "item 2", "item 3", "yo mama", "new todo", "hello there", undefined: undefined]
undefined
deleteTodo(2)
My todos: (6) [undefined, "item 2", undefined, "yo mama", "new todo", "hello there", undefined: undefined]
undefined
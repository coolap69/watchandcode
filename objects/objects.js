var myComputer = {
 operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
};

undefined
myComputer
{operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}
myComputer.operatingSystem
"mac"
myComputer.screenSize
"15 inches"
myComputer.purchaseYear
2011


// objects and function

var Louis = {
name: 'Louis',
sayName: function() {
console.log(this);
}
}
undefined
Louis.sayName();
4 {name: "Louis", sayName: ƒ}name: "Louis"sayName: ƒ ()__proto__: Object
undefined

var Louis = {
name: 'Louis',
sayName: function() {
console.log(this.name);
}
}
undefined

Louis.sayName()
Louis

// It should a display Todos method

var todos = ['item 1', 'item 2', 'item 3']
undefined

function displayTodos() {
console.log('My todos:', todos);
}
undefined

displayTodos()
My todos: (3) ["item 1", "item 2", "item 3"]


// It should a display Todos method

var todoList = {
    todos: ["item 1", "item 2", "item 3"]
};
undefined

todoList
{todos: Array(3)}todos: (3) ["item 1", "item 2", "item 3"]__proto__: Object


// It should have an addTodo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
	console.log('My Todos', this.todos);
},
addTodo: function(todo) {
this.todos.push(todo);
this.displayTodos();
}
}
undefined
todoList.addTodo('plunker')
My Todos (4) ["item 1", "item 2", "item 3", "plunker"]
undefined

// It should have a changeTodo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
	console.log('My Todos', this.todos);
},
addTodo: function(todo) {
this.todos.push(todo);
this.displayTodos();
},
changeTodo: function(position, newValue){
this.todos[position] = newValue;
this.displayTodos();
}
};
undefined

todoList.changeTodo(0, 'first');
My Todos (3) ["first", "item 2", "item 3"]
undefined

// It should have a delete Todo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
	console.log('My Todos', this.todos);
},
addTodo: function(todo) {
this.todos.push(todo);
this.displayTodos();
},
changeTodo: function(position, newValue){
this.todos[position] = newValue;
this.displayTodos();
},
deleteTodo: function(position){
this.todos.splice(position, 1);
this.displayTodos();
}
};
undefined

todoList.displayTodos()
My Todos (3) ["item 1", "item 2", "item 3"]
undefined

todoList.deleteTodo(1);
My Todos (2) ["item 1", "item 3"]
undefined
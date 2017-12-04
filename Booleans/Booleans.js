// todoList.addTodo should and objects
var todoList = {
todos: [],
displayTodos: function() {
  console.log('My Todos', this.todos);
},

addTodo: function(todoText) {
  this.todos.push({
    todoText: todoText,
    completed: false
  });
  this.displayTodos();
},
changeTodo: function(position, newValue) {
  this.todos[position] = newValue;
  this.displayTodos();
},
deleteTodo: function(position){
  this.todos.splice(position, 1);
  this.displayTodos();
},
};

undefined

todoList.addTodo('this is an object');
My Todos [{…}]0: {todoText: "this is an object", completed: false}length: 1__proto__: Array(0)
undefined


// todoList.changeTodo should change the todo Text property





// todoList.toggleCompleted should change the completed property
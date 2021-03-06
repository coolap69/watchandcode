var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('your todo list is empty!')
        }
        else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {

                //check if /completed is true
                if (this.todos[i].completed === true) {

                    //print with (x)
                    console.log('(x)', this.todos[i].todoText);
                    //else
                }
                else {

                    //print with ()
                    console.log('()', this.todos[i].todoText);
                }
            }
        }
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText) {
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    
    toggleAll: function() {
         debugger;
        var totalTodos = this.todos.length;
        var completeTodos = 0;
        
        //Get number of completed todos,
        for(var i =0; i< totalTodos; i++) {
            if(this.todos[i].completed === true){
            completeTodos++;
        }
    }
        
        // Case 1: If everything is true, make everything false.
        if (completeTodos === totalTodos) {
            //make everything false.
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        //case 2: Otherwise, make everything true.
        } else {
            for (var i =0; i <totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        
        this.displayTodos();
    }
};

// // 1. We want to get access to the display todos button.
// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");

// // 2. We want to run displayTodos method, when someone clicks the display todos button.

// displayTodosButton.addEventListener('click', function(){
//     todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
//     todoList.toggleAll();
// });

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
};
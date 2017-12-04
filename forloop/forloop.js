tell the computer

i = 0                       // Initialization
say "hey" if i < 3          // condition
Increase i by 1             // final-expresion


0  "hey"
1  "hey"
2  "hey"
3

for  (initialization, condition, final-expression) {
    console.log("hey")
}

for  (var i = 0; i < 3; i++) {
    console.log("hey")
}

// i = i + 1
// i++

for  (var i = 0; i < 3; i++) {
    console.log(i)
}
0
1
2
undefined

var testArray = ['item 1', 'item 2', 'item 3'];
undefined

testArray[0]
"item 1"
testArray[1]
"item 2"
testArray[2]
"item 3"


for  (var i = 0; i < 3; i++) {
    console.log(i);
	console.log(testArray[i]);}
0
item 1
1
item 2
2
item 3
undefined

//dinamic//

for (var i = 0; i < testArray.length; i++) {
	console.log(testArray[i]); }
item 1
item 2
item 3
undefined

testArray.push('extra item');
4
testArray
(4) ["item 1", "item 2", "item 3", "extra item"]

//TODOS//
// .displayTodos should show.todoText

var todoList = {
    todos:[],
    displayTodos:function() {
        console.log('My Todos, this.todos'); //don't need this.todos//
        for (var i = 0; i < this.todos.length; i++){
            //this.todos.length has 3 items
            console.log(this.todos[i].todoText);
        }
    },
    addTodo:function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    }
}

undefined
todoList.displayTodos();
My Todos []
undefined
todoList.addTodo('first');
My Todos [{…}] // if this.todos id deleted the [] will not be there. we do not need it//
first
undefined
todoList.addTodo('second');
My Todos (2) [{…}, {…}]
first
second
undefined
    

// .displaTodos should tell you if .todos is empty

var todoList = {
    todos:[],
    displayTodos:function() {
        
        // first writing down what you want to be done 
    // if there are no todos
    // console.log('your todo list is empty!');
    // else
    //print todos as normal
    
      // second convert code what you want to be done 
    // if this.todos.length is equal to 0 // or if this .todods.length is === 0
    // console.log('your todo list is empty!');
    // else
    //print todos as normal
    
     // third convert tocoding
    if (this.todos.length ===0) {
        console.log('your todo list is empty!')
    } else {
        console.log('My Todos:);
        for (var i = 0; i < this.todos.length; i++){
            //this.todos.length has 3 items
            console.log (this.todos[i].todoText);
    }
    }
    }
},

todoList.displayTodos();
your todo list is empty!
undefined

// .displaTodos should show.completed


// var todoList = {
//     todos:[],
//     displayTodos:function() {
//     if (this.todos.length ===0) {
//         console.log('your todo list is empty!')
//     } else {
//         console.log('My Todos:');
//         for (var i = 0; i < this.todos.length; i++){
//             console.log (this.todos[i].todoText);
//     }
//     }
// },

// addTodo: function(todoText) {
//     this.todos.push({
//         todoText: todoText,
//         completed: false
//     });
  
// } 
// }


var todoList = {
    todos:[],
    displayTodos:function() {
    if (this.todos.length === 0) {
        console.log('your todo list is empty!')
    } else {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++){

            //check if /completed is true
            if (this.todos[i].completed === true){
            
            //print with (x)
            console.log ('(x)', this.todos[i].todoText);
            
            //else
            }else{

            //print with ()
            console.log ('()', this.todos[i].todoText);

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
  
} }
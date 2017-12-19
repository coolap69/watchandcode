// It should have a place to store todos
// It should have a way to display todos
// It should have a way to add new todos
// It should have a way to change a todo
// It should have a way to delete a todo

var todos =['item 1', 'item 2', 'item 3']
undefined

todos
(3) ["item 1", "item 2", "item 3"]

console.log(todos)
(3) ["item 1", "item 2", "item 3"]
undefined

console.log('My Todos:', todos)
My Todos: (3) ["item 1", "item 2", "item 3"]
undefined

todos.push('item 4')
4
todos
(4) ["item 1", "item 2", "item 3", "item 4"]


todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]
todos[0]
"item 1"

todos[1]
"item 2"

todos[0] = 'item 1 updated'
"item 1 updated"

todos
(5) ["item 1 updated", "item 2", "item 3", "item 4", "item 5"]


var todos =['item 1', 'item 2', 'item 3']
undefined
todos.push('item 5')
4
todos
(4) ["item 1", "item 2", "item 3", "item 5"]
todos.splice(3, 1)
["item 5"]
todos
(3) ["item 1", "item 2", "item 3"]
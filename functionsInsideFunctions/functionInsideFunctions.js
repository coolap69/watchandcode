function logTenNumbers() {
    for (var i =0; i < 10; i++){
console.log(i);    
}
} 
undefined
logTenNumbers();
0
1
2
3
4
5
6
7
8
9
undefined

//////////// 5 second alarm//////////


setTimeout(function() {
    console.log('Wake up Louis');
}, 5000)

//after 5 seconds
Wake up Louis

////////////////

var students = ['Jonathan', 'Jenny', 'Elliot'];
undefined

function logName(name) {
    console.log(name);
}
undefined
logName(students[0])
Jonathan
undefined
logName(students[1])
Jenny
undefined
logName(students[2])
Elliot
undefined

///for loop methood
for (var i = 0; i < students.length; i++) {
logName(students[i]);
}
Jonathan
Jenny
Elliot
undefined

///forEach method
students.forEach(logName)
Jonathan
Jenny
Elliot
undefined

students.forEach(function logName (name) {
console.log(name);
})
Jonathan
Jenny
Elliot
undefined

students.forEach(function (name) {
console.log(name);
})
VM1004:2 Jonathan
VM1004:2 Jenny
VM1004:2 Elliot
undefined
function multiplyTwoNumbers(a, b) {
    var result = a * b;
}

var theProductOf2And10 = multiplyTwoNumbers(2, 10);

//undefined
 theProductOf2And10

//will equals to  =  undefined//

//we need a return to get back the function
function multiplyTwoNumbers(a, b) {
    var result = a * b;
    return result;
}

var theProductOf2And10 = multiplyTwoNumbers(2, 10);
//undefined
theProductOf2And10
20
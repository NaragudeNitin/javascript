/* 
let a = 10;
const b = 21;
var c = 92;
 console.log(a, b, c);
 */
// {} (curly braces are known as scope, when it comes with function or condition)
//now lets have look at the following condition
var c = 400;
let a = 20;
if (true) {
    let a = 10;
    const b = 21;
    var c = 92;
    // console.log(a);//bloc scope will print 10
}

/*
console.log(a); // if value of a is outside bloc it will accept the value outside the bloc
a is not defined since it is declared inside the condition we can not access its scope is within the function

console.log(b);// b is not defined because its scope id within the condition

console.log(c);// this is giving output 92 even if it is declared inside the if condition

values outside the block are the are global, and values declared inside the bl0c have local scope

you will find scopes as different when you check with browser(by inspecting) and while doing it with the node
*/


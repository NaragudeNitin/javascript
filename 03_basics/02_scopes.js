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

// ---------------closures------------- //
//nested scope
//child functions can access parent variables, but parent functions can not access child's variables 

function one() {
    const username = 'jsjn';
    function two() {
        const website = 'Youtube';
        console.log(username);
    }
    // console.log(website);//this can not be accessed outside
    two();
}

// one();

if (true) {
    const username = "new name";
    if (username === "new name") {
        const website = ' Youtttbe';
        // console.log(username + website);
    }
    // console.log(website);//not accessible
}

// console.log(username);//not accessible


//_----___----______----- INTERESTING ____-----_____-------___//

/* 
addOne(5);//if we call this function before declaring  it will give no error
addTwo(5); //this will give error

because you are storing function in variable and we are calling before it is declared 

 */
function addOne(num) {
    return num + 1;
}
addOne(5);

const addTwo = function (num) {
    return num + 2;
}
addTwo(5);
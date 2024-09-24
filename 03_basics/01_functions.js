//lets declare function

function sayName() {
    console.log('R');
    console.log('u');
    console.log('s');
    console.log('h');
    console.log('i');
    console.log('k');
    console.log('e');
    console.log('s');
    console.log('h');
}

/* 
function- keyword
sayName - function name
(){} - function syntax

if write like `sayName` so this is reference of the function 
if we write sayName() so this is function call(Execution)
*/

// sayName();
/* 
in javascript we no need to write the type of the parameter
---when we write a function that time variable taken are called parameters
---when we execute the function that time values we are passing are arguments
*/

function addTwoNumbers(num1, num2) {
    console.log(
        num1 + num2,);
}

//to execute above function we need to pass the argument
// addTwoNumbers(4, 5);
//it will show whatever argument passed
// addTwoNumbers('a', null);

//now we will assign executed function value to some variable 
// result = addTwoNumbers(4, 5);
// console.log('Result : ', result); //this is undefined because function is not returning anything


function addNumbers(num1, num2) {
    return num1 + num2;
}
// result = addNumbers(4, 5);
// console.log('Result : ', result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log('Please Enter a user name');
        return;
    }
    return `${username} Just logged in`;
}
loginUserMessage('Sattu');// this can not print give name because we are returning not printing anything
// console.log(loginUserMessage());// this one will give result 
//to avoid undefined in result we can set default value of the parameter while creating a function

function calculateCartPrice(num) {
    return num;
}
// console.log(calculateCartPrice(200, 23, 52)); this will give you result of 1 first price i.e 200


function calculateCartPriceMulti(...num) {//using this (spread operator/rest operator)
    //rest operator will wrap all spread values together
    return num;
}
// console.log(calculateCartPriceMulti(200, 23, 52));//we will get result in form of array like [ 200, 23, 52 ] because of spread operator

// sometimes with variables ...num we pass some other values such as  calculateCartPriceMulti(var1, var2, ...num) , 
// This time in result function will consider first two values as val1 and val2 after that whatever values are available it will add it in list



const user = {
    username: "Abhi",
    price: 821,
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}

/*  
handleObject(user);
handleObject({
    username: 'New Name',
    price: 402,
})
    
Both ways it wil execute the function
*/

const myNewArray = [22, 34, 1239, 938, 12, 42];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

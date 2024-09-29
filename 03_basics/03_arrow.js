const user = {
    username: "Bharat",
    price: 273,
    welcomeMessage: function () {
        console.log(`${this.username} Welcome to our website`);
        // when we are referring variable from the same scope. That means that has same context,
        // so you can refer it using this keyword
        console.log(this);
    }
}

/* user.welcomeMessage();
user.username = "India";
user.welcomeMessage(); //here context for username is India
 */
// console.log(this);

function chai() {
    let username = 'Battu';
    // console.log(this.username); // we can not use this when we are inside another function
    console.log(this);
}
// chai();

//---arrow function declaration ----//
// it is just removal of function keyword and instead of that you have to use ()=> {}
const chai2 = () => {
    let username = 'Battu';
    // console.log(this.username); // we can not use this when we are inside another function
    console.log(this);
}
// chai2();

/* 
basic syntax for arrow fn ()=>{}
    declaration 
*/

const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(3, 5));


const addTwo1 = (num1, num2) => num1 + num2;
//defining function like this means you returning num1 + num2, you dont need to define return  
// console.log(addTwo1(4, 6));
//when we use curly braces fot function then it is explicit return otherwise it is implicit return

const addTwo3 = (num1, num2) => (num1 + num2);
// console.log(addTwo3(4, 6));

// const addTwo4 = (num1, num2) => { username: "Reddy" }; //u cannot return object directly it will give you undefined
const addTwo4 = (num1, num2) => ({ username: "Reddy" }); //to get desired output we need to wrap object with parenthesis
console.log(addTwo4(4, 6,));

const myArray = [2, 4, 5, 4, 63, 8, 28, 7];

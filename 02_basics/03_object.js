// By two ways we can declare objects as literal and as a constructor
//singleton
//when we declare an object or class as literal then that is not a literal
//we can create singleton class/object using constructor
// Object.create //this is constructor through object declaration


//OBJECT LITERALS
//key is considered as string by default
const mySym = Symbol("key1");
const newSYmbol = Symbol("Key2");

const jsUser = {
    name: "nitin",
    age: 12,
    location: "jaipur",
    mySym: "myKey1",
    [newSYmbol]: "new Key 2",
    email: "nitin@yopmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon, sun, tues"],
    "full name": "Nitin Naragude",
};

//how to access js objects
// console.log("First Method: " + jsUser.name);
// console.log("Second method" + jsUser["email"]); //right approach to access object elements
// console.log(jsUser["full name"]);//to access element declared like this, this approach is better,

// console.log(jsUser.mySym);//printed "myKey1"
// console.log(jsUser[newSYmbol]);
// console.log(typeof jsUser[newSYmbol]);
// console.log(typeof jsUser.mySym); //datatype has been changed for key because of wrong declaration

//changing the element value is object

jsUser.email = "shaktiman@yopmail.com";
console.log(jsUser["email"]);

//now if we dont want change any element in js user then we can freeze it eg

// Object.freeze(jsUser);
jsUser.name = "Shakti";
// console.log(jsUser);

jsUser.greetings = function () {
    console.log("Namskar");
}
jsUser.greetingsTwo = function () {
    console.log(`Namskar ${this.name}`);
}
// console.log(jsUser.greetings); it will log [Function (anonymous)]

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());


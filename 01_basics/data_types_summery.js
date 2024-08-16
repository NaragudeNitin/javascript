// 1. Primitive datatypes

/// primitive datatypes are call by value

// 7 datatypes , String, bool, number, null , undefined, symbol, BigInt
//symbol example
const id = Symbol("123");
const userId = Symbol("123");
console.log("Checking Id is equals another id: ", id === userId);
const bigNumber = 12394823674n;
console.log(typeof bigNumber);



//2. reference type (non-primitive)
// in these datatypes reference is allocated in the memory
//Array, Objects, Functions,  
const heros = ["Shaktiman", "juniorG", "chandraMukhi"];//array
let myObj = { //object
    name: "Nitin",
    age : 22
}

//function example
const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof myFunction);

//++++++++++++++++++++++++++++++ MEMORIES ++++++++++++++++++++++++++++++++
///there are two types of memories in stack memory and heap memory

//all primitive datatypes are stored in stack memory
//all non primitive datatypes are stored in heap memory

//whenever we use stack memory we will get the copy of declared variable,
//heap memory gives reference that is original value // object etc

let myYoutubeName = 'Nitinnaragude124q';
let anotherName = myYoutubeName;
anotherName = "learning javascript";
console.log("Printing another name: ",anotherName);
console.log("printing my youtube name ",myYoutubeName);

let user1 = {
    "email": "user@yopmail.com",
    "upi" : "user@ibl" 
}

let user2 = user1;

user2.email = 'change@yopmail.com';

console.log( "printing user2 email", user2.email);

console.log( "printing user1 email", user1.email);


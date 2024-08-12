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


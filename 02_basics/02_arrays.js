const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["Superman", "Batman", "Green Lantern"];

// marvel_heros.push(dc_heros); //this method adds element at last index
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros); //merges two arrays
// console.log(allHeros);

const allHeros1 = [...marvel_heros, ...dc_heros]; //three dot are spread operator
// console.log(allHeros1);

const someArray = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];

let usableArray = someArray.flat(Infinity); //this array removes the nested arrays in the array and combines to make single array
// console.log(usableArray);

// ________________Note_______________

// console.log(Array.isArray("someArray")); //this method is used for the checking is array
// console.log(Array.isArray(someArray)); //this method is used for the checking is array
console.log(Array.from("Royal Reddy")); //this method is for creating the array from provided string
// console.log(Array.from(marvel_heros)); //we can create array of any type
console.log(Array.from({ name: "Nitin" }));//if we dont specify about whether we want array of keys or values then it will return empty array

let score1 = 100;
let score2 = 200;
let score3 = 160;

console.log(Array.of(score1, score2, score3));


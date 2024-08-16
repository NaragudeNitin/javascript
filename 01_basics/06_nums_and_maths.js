const score = 400;

const balance = new Number(100);
console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));


const otherNumber = 24.3893;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('hi-IN'));



//---------------- Maths -------------//
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.54));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(45.2));
// console.log(Math.min(35,2,667,11,45,6));s
// console.log(Math.max(35,2,667,11,45,6));
// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));

const min = 10;
const max = 20;
//math.random gives values between 0-1, then to get random values in 10-20 we applied formula,
console.log(Math.round(Math.random() * (max - min)) + min);

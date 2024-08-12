let score = "33fhv";


// consol e.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)  //with this method js will convert anything to number
// console.log(typeof valueInNumber); // here datatype will be a number 
// console.log("valueInNumber", valueInNumber); // but if we see log it says NaN that means it is not a number
 
score = null; // if we assign null to any operator and then if we convert it to number then 
let nullValueInNumber = Number(score);
// console.log("nullValueInNumber", nullValueInNumber); //result will be a 0 


score = undefined ;
let undefinedValueInNumber = Number(score);
// console.log("undefinedValueInNumber", undefinedValueInNumber); //result will be undefined

score = true;
let booleanValueInNumber = Number(score);
// console.log("booleanValueInNumber", booleanValueInNumber); //result 1

//"33" => 33
//"33 ad" => NaN
//null => 0

let isLoggedIn = 1;

let valueInBoolean = Boolean(isLoggedIn);
// console.log("valueInBoolean", isLoggedIn,valueInBoolean,); //result will be undefined

//1 => true
//0 => false
//'' => false
//'dh' => true


let number = 263872;
let stringNumber = String(number);
// console.log("stringNumber : ", number, stringNumber,", type of Number : " ,typeof number, "type of stringNumber : ",typeof stringNumber);


// ************************* OPERATIONS *****************************

let value = 3
let negVal = -value;
console.log(negVal);

//operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//2 to the power 3
// console.log(2/2);
// console.log(2% 2);

let str1  = "Hello";
let nitin = " Nitin";
let str2 = str1 + nitin;
console.log(str2);


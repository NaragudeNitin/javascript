//arrays
//all the things in the square bracket are known as element, array can have mixed datatypes
//arrays in javascript are resizable
//javascript arrays-copy-operations create shallow copies
const array = [1, 'Name', true];
const myArray = [1, 2, 5, 6, 7];
const myHeros = ["ShaktiMan", "jrG", "flying jat", "KriShh", "GOne"]


//______ Slice___splice______//


console.log("a :", myArray);
const ar1 = myArray.slice(1, 3);
console.log(ar1);
console.log("b :", myArray);
const ar2 = myArray.splice(1, 3);
console.log(ar2);
console.log("c :", myArray);



// const newArray = myArray.join(); //converts array to string
// console.log(myArray + typeof myArray);
// console.log(newArray + typeof newArray);




// console.log(myArray.includes(6));
// console.log(myArray.indexOf(6));
// console.log(myArray.indexOf(62));

// console.log(myHeros[3]);

// myArray.unshift(8); //this adds the object at fist position
// console.log("unshift:" + myArray);
// myArray.shift();  //removes object at 0th position
// console.log("shift:" + myArray);


// array Methods
// myArray.push(5);
// console.log("push:" + myArray);
// myArray.pop();
// console.log("pop:" + myArray);


// array.concat(myArray); //didn't found any different output
// console.log("concat::" + array);



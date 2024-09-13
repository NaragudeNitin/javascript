// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "1234ndfsjf";
tinderUser.name = "TInder name";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    "email": "email@gmail.com",
    "fullName": {
        firstName: "First",
        lastName: "Last",
        fullName: {
            firstName: "Nitin",
            lastName: "naragude"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser);


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// console.log(obj3);
/* 
 if you want to combine the two objects inside the single object then you have assign it instead of adding 
 as i did for [obj3] */

const obj4 = Object.assign(obj1, obj2, {});
/* 
in object 4 two objects are combined using assign variable. so 
output is: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }.
third object is empty that means that object is optional hence there are no additional values in output.
*/
// console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "q@gmail.com"
    },
    {
        id: 5,
        email: "r@gmail.com"
    },
    {
        id: 6,
        email: "h@gmail.com"
    },
];
/* 
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //to get all the keys present in object
console.log(Object.values(tinderUser)); // to get all the values present in the object
console.log(Object.entries(tinderUser)); // to separate each key value pair in a array form

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether mentioned key exist in the object
 */


//------------------- de-structure of the object ------------------//

const course = {
    courseName: 'Learn Js',
    price: '899',
    courseInstructor: 'Hitesh',
}

/* 
 Every time if we want to access the element in the object usually we do course.elementName
 so to avoid this accessing by the object name and the key destructure is best way
*/

const { courseInstructor } = course;
console.log(courseInstructor);
//we can assign other variables to this as well to example is 
const { courseName: cName } = course;
console.log(cName);

//keys in object is considered as string in javascript.
// and object will be referred to some variable
// but if we write object directly without assigning to any variable then it is a json. 
//keys in json should be written as string. otherwise javascript will show it as error.
//eg is shown as following

/* 
// this is json
{
    "name": 'Nitin',
        "courseName": 'Js In HINDi',
            "price": "free"
} */


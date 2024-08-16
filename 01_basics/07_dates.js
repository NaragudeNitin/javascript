// just like math is global object in javascript temporal is global object for the date time.

let myDate = new Date();
/* 
console.log(myDate);//2024-08-16T06:52:52.584Z
console.log(myDate.toString());//Fri Aug 16 2024 12:42:55 GMT+0530 (India Standard Time)
console.log(myDate.toJSON());//2024-08-16T07:12:55.825Z
console.log(myDate.toDateString());//Fri Aug 16 2024
console.log(myDate.toISOString());//2024-08-16T07:12:55.825Z
console.log(myDate.toLocaleDateString());//8/16/2024
console.log(myDate.toLocaleString());//8/16/2024, 12:42:55 PM
console.log(myDate.toLocaleTimeString());//12:42:55 PM
console.log(myDate.toUTCString());//Fri, 16 Aug 2024 07:12:55 GMT
console.log(myDate.getHours());//12
console.log(myDate.getMonth());//7 
*/

let myCreatedDate = new Date(2023, 0, 23);
let myTimeStamps = Date.now();

/* 
console.log(myCreatedDate.toDateString());

console.log(myTimeStamps);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now() / 1000)); //to convert to seconds
 */

myDate.toLocaleString('Default',{
    weekday: "long"
})



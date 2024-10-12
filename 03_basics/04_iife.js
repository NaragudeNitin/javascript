//[IIFE]-Immediately Invoked Function Expression

function chai() {
    console.log('Db connected');
}
// chai(); Here we are declaring function 
// and then we are calling it, but if we need to 
//execute the function as soon as we declare it 
//then we need to do IIFE

(function chai1() { //this is named IIFE
    console.log('Db connected in chai 1');
})();
//First parenthesis is to define function
//second parenthesis is to execute the function
//we can write the immediately invoked function 
//we can also declare and call parameter while creating function
(function chai2(name) {
    console.log(`my name is ${name}`);
})('Nitin');



((lastName) => { //This is unnamed IIFE
    console.log(`${lastName} is my last name`);

})('Naragude');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: 'Brandon', age: 20 };
// console.log("brandon");
console.log(user.name);
function init(a) {
    return a;
}
console.log(init('hello'));
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
// annotate the function that it is only suppossed to return a number 
function numTs(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper('brandon'));
function signUp(name, email, password) { }
signUp("Brandon", "Roulstone", '1234');
// we can avoid is paid and annotate it to be false by default and wont
//...have to pass it in when calling the function
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "bra@gmail.com", "1234");
// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "Hello";
};
// typescript is smart enough to know this is an array with string values
var heroes = ["thor", "spiderman", "ironman"];
console.log(heroes.map(function (hero) {
    return "hero is ".concat(hero);
}));
// type "void" does not allow this function to return anything ever 
function consoleErr(errMsg) {
    console.log(errMsg);
}
// recommended way to handle an error
// the never type represents values that are never observed
// function throws an exception or terminates(forceful termination) execution of the program
function handleError(errMsg) {
    throw new Error(errMsg);
}

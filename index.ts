let user = {name: 'Brandon', age: 20}

// console.log("brandon");
console.log(user.name);

function init(a:string){
    return a
}

console.log(init('hello'));

let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()

// annotate the function that it is only suppossed to return a number 
function numTs(num:number):number{ 
    return num + 2
}

function getUpper(value: string){
    return value.toUpperCase()
}

console.log(getUpper('brandon'));

function signUp(name: string, email: string, password: string){}

signUp("Brandon", "Roulstone", '1234')

// we can avoid is paid and annotate it to be false by default and wont
//...have to pass it in when calling the function
let loginUser = (name: string, email: string, password: string, isPaid: boolean = false) => {}

loginUser("h", "bra@gmail.com", "1234")



// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s:string):string => {
    return "Hello"
}


// typescript is smart enough to know this is an array with string values
const heroes = ["thor", "spiderman", "ironman"]

console.log(heroes.map((hero):string => {
    return `hero is ${hero}`
}));

// type "void" does not allow this function to return anything ever 
function consoleErr(errMsg: string):void{
    console.log(errMsg);
}

// recommended way to handle an error
// the never type represents values that are never observed
// function throws an exception or terminates(forceful termination) execution of the program
function handleError(errMsg: string):never{
    throw new Error(errMsg);
}


export {}


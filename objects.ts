const user = {
    name: "Brandon",
    email: "brandonRou3@gmail.com",
    isActive: false
}


function createUser({name : string, isPaid: boolean}){}
createUser({name: "brandon", isPaid: false})


// this method can allow us to return more than the required properties
// let newUser = {name: "brandon", isPaid: false, email : "br1@gmail.com"}

// note that this function takes in 3 properties instead of the initial two
// createUser(newUser)

function createCourse():{name : string, price: number}{
    return {name : "reactJS", price: 350}
}


// type alias
// creating a custom type
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function initUser(user: User){
    return {name: "", email: "", isActive: true}
}

initUser({name: "", email: "", isActive: true})





// readonly key
// We cannot make changes now to _id because of "readonly" key
type Person = {
    readonly _id : string
    name: string,
    age: number,
    gender: string,
    isSmart? : boolean // the question mark makes this value optional to pass in 
}

// function initHuman(u: Person){}
let babyHuman : Person = {
    _id: "guguGaga123",
    name: "Dababy",
    age: 2,
    gender: "male"
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

// this is defining a new type based off of the two types
type cardDetails = cardNumber & cardDate & {
    cvv : number
}




export {}
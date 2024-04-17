"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Brandon",
    email: "brandonRou3@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "brandon", isPaid: false });
// this method can allow us to return more than the required properties
// let newUser = {name: "brandon", isPaid: false, email : "br1@gmail.com"}
// note that this function takes in 3 properties instead of the initial two
// createUser(newUser)
function createCourse() {
    return { name: "reactJS", price: 350 };
}
function initUser(user) {
    return { name: "", email: "", isActive: true };
}
initUser({ name: "", email: "", isActive: true });
// function initHuman(u: Person){}
var babyHuman = {
    _id: "guguGaga123",
    name: "Dababy",
    age: 2,
    gender: "male"
};

//  primitive 

// 7 types : String, Number, Boolean, null, undefind, Symbol,BibInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 572034957357n


// Reference(Non primitive)

// Array, Objects, Functions

const herps = ["shaktiman","naaraj","doga"];
let myObj = {
    name: "vikash",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction);




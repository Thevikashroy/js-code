// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "vikash",
    "full name": "vikash kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Patna",
    email: "vikashkrdss19@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "vikash12@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "vikash@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


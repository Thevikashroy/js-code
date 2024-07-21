//const  tinderUser = new Object() //single term Object
const tinderUser={} //non single term Object

tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usrfullname:{
            firstname : "vikash",
            lastname : "kumar"
        }
    }
}

// console.log(regularUser.fullname.usrfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2 ,obj4)

const obj3 = {...obj1, ...obj2} // using sprading rule 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "vikashk@gmail.com`"
    },
    {
        id: 1,
        email: "vikashk@gmail.com`"
    },
    {
        id: 1,
        email: "vikashk@gmail.com`"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


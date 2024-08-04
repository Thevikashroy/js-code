const user = {
    username: "vikash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`);
        // console.log(this); // this is define current value in present
        
    }
    
}

// user .welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "vikash"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "vikash"
//     console.log(this.username);
// }

// arrow function define

const chai = () => {
    let username = "vikash"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implesit return me not using parenthesis()
// eak hi line ke statement me return likhne ki jarurat nahi hai in (implesit return)

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "vikash"})

console.log(addTwo(3,4))

// myArray.forEach()

// console.log("V");
// console.log("i");
// console.log("k");
// console.log("a");
// console.log("s");
// console.log("h");


// function sayMyName(){
//     console.log("V");
//     console.log("i");
//     console.log("k");
//     console.log("a");
//     console.log("s");
//     console.log("h");
// }

// sayMyName() //function exceution

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result //using return keyword after nothing to print value
    // console.log("Vikash"); //this is checking purpose .
    return number1 + number2 //another way to print num1+mum2
}
const result = addTwoNumbers(3,5)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vikash"))
console.log(loginUserMessage("vikash"))

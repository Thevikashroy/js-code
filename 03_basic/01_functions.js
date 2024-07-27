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
// console.log(loginUserMessage("vikash"))

//... means of rest operator/sprade operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Vikash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
//  handleObject(user)
handleObject({
    username: "Vikky",
    price: 239
})


const myArray = [200, 400, 100, 900]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 100, 900]));
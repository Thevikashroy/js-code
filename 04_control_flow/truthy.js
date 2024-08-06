const userEmail = []

if (userEmail) {
    console.log("Got user emil");  
} else {
    console.log("Don't have user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n , "", null, underfined, NaN // these are falsy value


// truthy values

// "0" // under the string is zero this is truthy values
// "0", 'false', " ", [], {}, function(){}   // if undre the string values these are truthy value  

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator Operator(??): null underfined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 40

console.log(val1);

// Terniary operator

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



// var c = 300 

let = 300

// {} scope insilization
if (true) {
    let a = 120
    const b = 20
    console.log("INNER:",a)

}

for (let i = 0; i<Array.length; i++){
    const element = array[i]
}

console.log(a);
// console.log(b);
// console.log(c);







function one (){
    const username = "Vikash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "vikash"
    if (username == "vikash"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website) // throw error
}

// console.log(username); // throw error


// +++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))


function addone(num){
    return num + 1
}





// addTwo(5) // throw error 
const addTwo = function(num){
    return num + 2 
}

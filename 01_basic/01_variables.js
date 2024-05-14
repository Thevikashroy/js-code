const accountId = 144553
let accountEmail = "vikashkrd18@gmil.com"
var accountPassword = "12345"
accountCity = "patna"//variable decleraing this way but  this is not good way .

let accountstate; //undefined variable

// accountId = 2 //not allowed

accountEmail = "hc@hc."

accountPassword = "212121"

accountCity = "Begusarai"

/*
prefer not to use var
because of issue in block scope and functionl scope 

*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
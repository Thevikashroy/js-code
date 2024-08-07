// for of loop in array

// ["" , "" , ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num); 
}


const greetings = "Hello world"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`); 
}

// maps in js

// no duplicate value in map every vlaue is unique value 

const map =  new Map()
map.set ('IN', "India")
map.set('USA', "United States of America")
map.set('fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {              // [] using this braket in key and value to print alg alg hota hai
    console.log(key, ':-', value);
    
}

const myObject={                // this(for of loop) technique not use for object (this is not iterable)
    'game1': 'NFS',
    'game2': "Spiderman"
}

// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }

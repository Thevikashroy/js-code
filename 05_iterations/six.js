// const coding = [ "js", "ruby", "python", "java", "cpp"]


// const values = coding.forEach((item)  =>{
//     // console.log(item);
//     return item
// })

// console.log(values);




// filter map and reduce in js

const myNums = [1,2,3,4,5,,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)  // if use the {} and using return keyword the value and not using ( this type)
// console.log(newNums);

// for example

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums)


const books = [
    {title: 'Books One', genre: 'Fiction', publish: 1981,edition: 2004},
    {title: 'Books Two', genre: 'Non-Function', publish: 1992,edition: 2008},
    {title: 'Books Three', genre: 'Histroy', publish: 1999,edition: 2007},
    {title: 'Books Four', genre: 'Non-Fiction', publish: 1989,edition: 2010},
    {title: 'Books Five', genre: 'Science', publish: 2009,edition: 2014},
    {title: 'Books Six', genre: 'Fiction', publish: 1987,edition: 2010},
    {title: 'Books Seven', genre: 'Histroy', publish: 1986,edition: 1996},
    {title: 'Books Eight', genre: 'Science', publish: 2011,edition: 2017}
];

let userBooks = books.filter( (bk) => bk.genre === 'Histroy')
userBooks = books.filter ( (bk) => { return bk.publish >= 2000})


console.log(userBooks);

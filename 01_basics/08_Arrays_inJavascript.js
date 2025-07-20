//Array

//Array is a object arrays in other programming language,
//  collection of multiples item are single varaible,

//[0, 1, 2, 3, true, Boolean] this is elements

//Javascript arrays are resizeable and can contain a mix of different datatypes

// array-copy operation create shallow-copies
//shallow-copy orignal reference 
//  you can change thee value and orignal array change
//deep copy do not share a same reference

//const myArr = [0, 1, 2, 3, 4, 5]
//const myFamily = ["urba", "mavia", "hurraira"]

//const myArr2 = new Array(1,2,3,4);
//console.log(myFamily[0]);
//console.log(myArr[2])

//Arrays Method
//myArr.push(6)  
//myArr.push(7) add 7 value in myArr
//myArr.pop()  remove the last value of arrays
//myArr.unshift(9) add the 9 first value in arrays
//myArr.shift() they are remove the first value


//console.log(myArr.includes(5))
//console.log(myArr.includes(9)) 
// these values are in there output is true or false

//console.log(myArr.indexOf(4))
//  4 value are available become output they are in 4 forth index, 4 value are not in it output -1
//console.log(myArr)


// const newArr = myArr.join()
//  .join add all the elements of an array into a string
//console.log(newArr)
//console.log(typeof newArr)


// Slice and Splice

// slice used to copy part of an Array
// does not change the orignal Array
// returns a new array

// let  fruits = ["apple", "mango", "banana", "grape"];
// let result = fruits.slice(1, 3)
// console.log(result)
// console.log(fruits)

// splice used to remove or add items
// change the orignal Array
// returns the removed items

// let fruits = ["apple", "mango", "banana", "grape"];
// let removed = fruits.splice (2, 3)
// console.log(removed);
// console.log(fruits);

//let names = ["urba", "mavia", "samra", "naeem"]
//let removed = names.slice(2,3)
//console.log(removed)
//console.log(names )


//let names = ["urba","naeem", "ali", "mano"]
////let removed = names.splice(2, 3)
//console.log(removed)
//console.log(names)



// const allPosts = [
//   "Post 1", "Post 2", "Post 3", "Post 4", "Post 5",
//   "Post 6", "Post 7", "Post 8", "Post 9", "Post 10",
//   "Post 11", "Post 12"
// ];

// function paginate(pageNum) {
//     const postsPerPage = 5;
//     const currentPage = pageNum;

//     // Calculate starting and ending index
//     const startIndex = (currentPage - 1) * postsPerPage;
//     const endIndex = startIndex + postsPerPage;

//     // Get posts for current page
//     const currentPosts = allPosts.slice(startIndex, endIndex);

//     console.log(curhrentPosts);
// }

//const name = 'Hashir'
//const age = 28
//const nameArr = Array.from(name);

//console.log(Array.of([name, age, nameArr]))  
//  strings integers all converts in Arrays 2 methods 1 is use (array.off)
// second simple arrays [ ] use its your choice
//console.log([name, age,nameArr])

const name = "naeem";
const age = 18;
const year = 2025;

console.log(Array.from(name))
console.log([name, age, year])
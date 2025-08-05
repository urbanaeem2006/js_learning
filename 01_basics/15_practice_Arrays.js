const myArr = [0, 1, 2, 3, 4,]
const Heros = ["mavia", "mano", "urba"]

const myArr2 = new Array (1, 2, 3, 4)
console.log(myArr[0])

//////////// Arrays Mehods/////////////

myArr.push(6)  
//  push add the value in array
myArr.push(7)
myArr.pop() 
// myArr.unshift(9)  
myArr.shift()  
//  shift remove thee 9 value

// unshift value add the first in arrays 
// pop remove the last value

console.log(myArr.includes(3))
console.log(myArr.indexOf(3)) 

const newArr = myArr.join()  
// join arrays change in bind and string
console.log(myArr)


// let names = ["urba", "mano", "mavia", "hurraira"]
// let removed = names.slice(1, 2)
// console.log(names)
// console.log(removed)

let names = ["urba", "mano", "mavia", "hurraira"]
let removed = names.splice(1, 2)
console.log(names)
console.log(removed)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

let myName  = "urba"
console.log(Array.from("urba"))



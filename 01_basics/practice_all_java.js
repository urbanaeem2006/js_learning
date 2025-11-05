// =================== Objects ========================

// singleton

//object create
// object literals

// const mysym = Symbol("key1")

const jsUser = {
    name: "urba",
    age: "18",
    // [mysym]: "mykey1",
    location: "rawalpindi",
    email: "urbanaeem@gmail.com",
    isLoggedIn: "fales"
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "chatgpt.com"
// Object.freeze(jsUser)

jsUser.greeting= function(){
    console.log("hello world");
}
jsUser.greetingtwo= function(){
    //console.log(`hello world, ${this.name}`);
}
//console.log(jsUser.greeting())

jsUser.greetingthree = function(){
    console.log(`this is a name ${this.email}`)
}

// ============== singleton object =======================

// this is a singleton object
    //const tinderUser = new object ()

// this is a non-singleton object
const tinderUser = {}

tinderUser.name = "urba"    
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "urbanaeem@gmail.com",   
    fullname: {
        userfullname: {
            firstname: "urba",
            lastname: "naeem"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

//const obj3 = object.assign({},  obj1, obj2)

// same array concept 90 % of the the time is concept use
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

// const user = [
//     {
//         id: 123,
//         email: "urbanaeem@gmail.com"
//     },
//     {
//         id: 123,
//         email: "urbanaeem@gmail.com",
//     },
//     {
//         id: 123,
//         email: "urbanaeem@gmail.com",
//     }
// ]
// user[1].id

// console.log(tinderUser)

// console.log(object.keys(tinderUser))
// console.log(object.values(tinderUser))
// console.log(object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty(" email"))

// ============ object de-structure and Json=================

const course = {
    coursename: "js hindi",
    price: "999",
    courseteacher: "urba"
}

// course.courseteacher
//    easy and short syntax
// this is called de-structure
const {courseteacher: instructor} = course

//console.log(courseteacher.coursename)

            // API and JSON
       // API values on JSON
    // {
    //     name: "urba",
    //     coursename: "js in hidi",
    //     price: "free"
    // }

const myself = {
    name: "urba",
    age: "18",
    uraddress: "rawalpindi",

}
//console.log(myself.address)

// ===================== Function=====================

// function sayMyName(){
//     console.log("u")
//     console.log("r")
//     console.log("b")
//     console.log("a")
// }
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumber(1, 3)
// console.log("result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("urba"))
//console.log(username)

// ...num1 this is a rest operation

function calculateCardPrice(...num1){
    return num1
}
//console.log(calculateCardPrice(200, 300, 400))
 
const user1 = {
    username: "urbanaeem",
    price: "200"
}
function handleObject(object1){
   // console.log(`username is ${object1.username} and the price is${object1.price}`)
}
handleObject(user1)

const newArray = [200, 300, 500, 600]

function secondValue(getArray){
    return getArray[2]
}
    
//console.log(secondValue(newArray))

function one(){
    const username = "urba"

    function two(){
        const website = "youtubes"
        // console.log(username)
    }
    // console.log(website)

    two()
}
one()

if(true) {
    const username = "urba"
    if(username === "urba") {
        const website = "youtube"
        // console.log(username +  website)
    }
    // console.log(website)
}
// console.log(username)

// =================== interesting ========================

function addOne(num){
    return num + 1
}
addOne(5)

// this is a call expression
const addTwo = function(num){
    return num + 2
}
addTwo(5)

// =============== This and Arrow===============

const user = {
    username: "urba",
    price: "999",

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`)
    }
}
user.welcomeMessage()
user.username = "shanu"
user.welcomeMessage()

// global object is a window object

// function chai (){
//     let username = "urba"
//     console.log(this)
// }
// chai()

// this. called a current context

// =========== Arrow Function============

// const chai = () =>{
//     let username = "urbanaeem"
//     // console.log(this.username)
// }

// const addnum= (num1 , num2) =>{
//     return num1 + num2
// }

//const addnum = (num1 , num2) => num1 + num2

//const addnum = (num1 , num2) => (num1 + num2)
const addnum = (num1 , num2) => ({username: "urba"})

// {} curly brackets use must be use retrun and
//  () parantheses use not use return key word

//console.log(addnum(3, 4))

// ===== Immediately Invoked Function Expression (IIFE)==========

(function chai (){
    // named IFFI
    // console.log(`DB Connected`);
})();

( (name) =>{
    // console.log(`DB CONNECTED two ${name}`)
})("urba")


// ================== Control Flow in Javascript==================

const isUserLoggedIn = true
const temperature = 42

if(temperature < 50){
    console.log("less than 50")
} else{
    console.log("greater than 50")
}

// /* < less than, > greater than */ <= >= == != === !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// } 
// console.log(`User power: ${power}`)

const balance = 2000

// this is a short syntax
    //if (balance > 1000) console.log("test"),
//console.log("test2")

if (balance < 500) {
      //  console.log("less than 500")
} else if (balance < 750) {
    // console.log("less than 750")
} else if (balance < 1000){
    // console.log("less than 1000")
} else {
    // console.log("less than 3000")
}

const userLoggedIn = true
const debitCard = true
const loggedInfrom = false
const loggedInemail = true

if (userLoggedIn && debitCard && loggedInfrom) {
    //console.log("allow to shopping")
}
if (loggedInfrom || loggedInemail) {
    //console.log("logged this")
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month  = 3

switch (month) {
    case 1:
       // console.log("january")
        break;
    case 2:
       // console.log("feb")
        break;
    case 3:
       // console.log("march")
        break;
    case 4:
      ////  console.log("april")
        break;

    default:
       // console.log("default case match")
        break;
}

const userEmail = []

if (userEmail) {
   // console.log("got user email")
} else{
   // console.log("dont have user email")
}

//Falsy Value
// false, 0, -0, Bigint 0n, "", null, undefinet, Nan

//truthy Value
// "0", "false", " ", [], {}, function(){}

     // How to check Array if else

if (userEmail.length === 0) {
    // console.log("array is empty")
}

const newObj = {}
if (Object.keys(newObj).length === 0) {
  //  console.log("empty obj")
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15

//console.log(val1)

// Terniary Operator

//condition ? true : false

const teaPrice = 100
// teaPrice <= 80 ? console.log("less than 80") : console.log("not less than 80")

// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop ${i}`)
    for (let j = 0; j <= 10; j++) {
       // console.log(`inner loop ${j}`)
        
    }
    
}

for (let index = 0; index <= 10; index++) {
    const element = index;
   // console.log(element)
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = i;
//     if (element == 5) {
//        // console.log("5 is a best number")
//     }
//     //console.log(element)
// }

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`)

   //this is a tabole  => //console.log(i + '*' + ' = ' + i*j)
    }
    
}
//  let myArray = ["flash", "batman", "superman"]

//  console.log(myArray.length)

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }

//////////////////// Break and Continue////////////////

// for (let index = 1; index <= 20; index++) {
//     if (index == 6) {
//         console.log("6 is a best number")
//         break
//     }
//     console.log(` value of is ${index}`)
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 6) {
       // console.log("6 is a best number")
        continue
    }
   // console.log(` value of is ${index}`)
    
}

// ============ while loop and do while loop=================

let index = 0
while (index <= 10) {
   // console.log(`value of index is ${index}`)
    index = index + 2
}

// let myArray = ["flash", "superman", "batmans"]
// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`this is a array ${myArray}`)
// }

// let score = 1

// do {
//     console.log(`score is ${score}`)
// } while (score <= 10);

     // ========= For Of =================

// ["", "", ""]
// [{}, {}, {}]

const arr= [1, 2, 3, 4, 5]

for (const num of arr) {
  //  console.log(num)
}

const greeting = "hello world"
for (const greet of greeting) {
   // console.log(greet)
}

// ================= Maps ======================

const map = new Map()
map.set("pk", "pakistan")
map.set("USA", "united state of America")
map.set("Fr", "France")
map.set("Fr", "France")

//console.log(map)

for (const [key, value] of map) {
   // console.log(key, ":-", value)
}

const myObject = {
    name: "urbanaeem",
    age: "19"
}
// for of loop in obj is not working

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }

const myObject1 = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
   // console.log(`${key} shortcut is for ${myObject1[key]}`)
    
}

const programming = ["js", "ruby", "c++", "python"]

for (const key in programming) {
   // console.log(programming[key])
    
}
// const Map = new Map()
// map.set("pk", "pakistan")
// map.set("USA", "united state of America")
// map.set("Fr", "France")
// map.set("Fr", "France")

// for of loop is not working in map

// for (const key in Map) {
//    // console.log(key)
    
// }

// =================== For Each loop ====================

//const coding = ["js", "c++", "ruby", "python"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (val) => {
//     console.log(val)
// })

// function prinyMe (item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( ( item, index, arr ) => {
//    // console.log(item, index, arr)
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "javascript"
//     },
//     {
//         languageName: "javascript",
//         languageFileName: "javascript"
//     },
//     {
//         languageName: "javascript",
//         languageFileName: "javascript"
//     },
// ]
// myCoding.forEach( ( item) => {
//    // console.log(item.languageName)
// })

// ============= Filter map and reduce in javascript ===============

const coding = ["js", "ruby", "Java", "python"]
// for each not return a value

const values = coding.forEach( ( item) => {
    //console.log(item)
    return item
})
//console.log(values)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter return a value
const newNums = nums.filter( ( num) => num > 4)

//console.log(newNums)

const Books = [
    { title: 'Book One', genre: 'history', publish: 1981,
    edition: 2004},

    { title: 'Book Two', genre: 'history', publish: 1992,
    edition: 2008},

    { title: ' Book Three', genre: 'history'}
]

//const  userBooks = Books.filter( ( bk) => bk.genre ===  'history' )
const userBooks = Books.filter( ( bk) => bk.publish < 2000)

//console.log(userBooks)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map return a value
//const newNumbers = myNumbers.map( ( num) => num + 10)
//console.log(newNumbers)

const newNumbers = myNumbers
          .map( (num )  =>  num * 10)
         .map( ( num) => num + 1)
         .filter( (num) => num >= 40)

// =============== Reduce =============

// const num1 = [1, 2, 3 ]
// const myTotal =  num1.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
//console.log(myTotal)

const myTotal = num1.reduce( ( acc, currval) => acc + currval, 0)
// console.log(myTotal)

const shoppingCard = [
    {
        itemName: "js course",
        price: "2999"
    },
    {
        itemName: "py course",
        price: "9999"
    },
    {
        itemName: " mobile dev course",
        price: "2999"
    },
    {
        itemName: " data science course",
        price: "2999"
    },
]
const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)



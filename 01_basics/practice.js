// ========== stack and heap memory

let myYoutube = "urbanaeem"

let anotherName = myYoutube

anotherName = "chai our code.com"
console.log(anotherName)
console.log(myYoutube)

let userOne = {
    email: "urbanaeem@gmail.com",
    name: "mano mughal"
}

let userTwo = userOne

userTwo.email = "@gmail.com"

//console.log(userOne.email)
//console.log(userTwo.email)


const name = "urba"
const repoCount = 50

// console.log(name +  repoCount)

// back ticks ` ` is a string interpolation

// console.log(`my name is ${name} and my repoCount ${repoCount}`)

const gameCount = new String("urba")

//console.log(gameCount[1])
//console.log(gameCount.__proto__)

//console.log(gameCount.length)
//console.log(gameCount.toUpperCase())
//console.log(gameCount.charAt(1))
//console.log(gameCount.indexOf("b"))

//console.log(gameCount.toString())

const newString = gameCount.substring(1, 4)
//console.log(newString)


// slice method you can give in nega value
const anotherString = gameCount.slice(-2, 3)
//console.log(anotherString)

// trim remove your starting space and end space
const newStringOne = "    urba    "
//console.log(newStringOne)
//console.log(newStringOne.trim())



// replace your url
const url = "https://urba.com/urba%20naeem"

//console.log(url.replace("naeem", "mavia"))

// .includes you ask some question urba are in url somthing

//console.log(url.includes("urba"))

// .split string =>your text
// separator => the thing were you want to cut the text
// (like space" ", comma " , " or any letter)
// result => you get any arrays of pieces

let fruits = "apple-banana-orange"
//console.log(fruits.split("-"))

let text = "c-a-t"
let result = text.split("-")
//console.log(result)

const scoreOne = 400

const balance = new Number(100)
//console.log(balance)

//console.log(balance.toString().length)
//console.log(balance.toFixed(2))

const anotherNumber = 112.9988
//console.log(anotherNumber.toPrecision(3))


const hunderds = 100000000000
//console.log(hunderds.toLocaleString())



// ============== Maths ============

// console.log(Math);

// Math.abs() neg value to convert positive value
// console.log(Math.abs(-6)) 
// console.log(Math.around (4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))


// =============== date and time=============

let myDate = new Date()
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5,3)
let myCreatedDate = new Date("2023-01-15")
//console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

//console.log(myTimeStamp)
///console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/ 1000))


myDate.toLocaleString("default", {
    weekday: "long"
})

// =================== Arrays Method ================

myArr = [1, 2, 3, 4, 5]
console.log(myArr[1])

//myArr.push(6)
//myArr.push(7)
//myArr.pop()
myArr.unshift(9)
console.log(myArr)

console.log(myArr.includes(5))
console.log(myArr.indexOf(5))

const newArray = myArr.join
console.log(myArr)
console.log(newArray)


// ======== slice and splice ==========

const marvel_heros = ["mavia", "hurraira", "mano"]
const dc = ["superman", "spiderman", "iron"]

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//const allHeros = marvel_heros.concat(dc)
 //console.log(allHeros)

 const all_new_heros = [...marvel_heros, ...dc]
 //console.log(all_new_heros)

//  .flat many arrays are convert in one array

 //const another_array = [1,2,3[4,5,6], 7 [6,7] [ 4, 5]]
 //const real_array = another_array.flat(Infinity)

// .form any value in .form convert into array string object ect

 //console.log(Array.from("urba"))

 //console.log(Array.form({name: "urba"})) 
//  interesting case you ask him keys array or values arrays


// ======================== Objects ==========================

// singleton
//object create
// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "urba",
    age: "18",
    [mysym]: "mykey1",
    location: "rawalpindi",
    email: "urbanaeem@gmail.com",
    isLoggedIn: "fales"
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])

jsUser.email = "chatgpt.com"
Object.freeze(jsUser)


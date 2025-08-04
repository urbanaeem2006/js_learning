// date is a object

let myDate = new Date ()

// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toLocaleString ())
// console.log(myDate.toDateString())

let myNewDate = new Date (2024,1,23)
// console.log(myNewDate.toDateString())

let myTimeStamp = Date.now ()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime())
console.log(myTimeStamp);
console.log(myNewDate.getTime())
//  milli sec values

console.log(Math.floor(Date.now()/1000))  
// this values is sec

let myCreatedDate = new Date ()
console.log(myCreatedDate)
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getDay())

myNewDate.toLocaleString ('default',{
    weekday : "long"
})
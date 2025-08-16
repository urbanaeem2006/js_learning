// if
 
// true execute the code
if (true){
    
}

// false not execute the code
if (false){
    
}
// const temperature = 42
// if (temperature === 42){
//     console.log("less than 50");
//  } else {
//     console.log("tem is greater than 50");
// }
// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)

// <, >, <=, >=, ==, !=, ===, !==

const balance = 1000
if (balance < 500){
    // console.log("less than 500");
} else if ( balance < 750) {
    // console.log("less than 750");
} else if (balance < 950) {
    // console.log("less than 950")
} else {
    // console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const guest = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 
// &&and check a many condition you define 2 or 3 or 4 
// its depend on your code one condition are not equal code not run
if (userLoggedIn && debitCard && guest){
     console.log("Allow to buy course")
 }

//  not || one condition are true result true
if (loggedInFromGoogle || loggedInFromEmail || guest){
     console.log("logged in")
 }
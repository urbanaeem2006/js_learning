// console.log("u")
// console.log("r")
// console.log("b")
// console.log("a")

function myName(){
    console.log("u")
    console.log("r")
    console.log("b")
    console.log("a")
}
myName()

function twoNumber(num1 , num2){
    console.log(num1 + num2 )
}
twoNumber(1, 2 )

function twoNumber(num1 , num2){
//     let result = (num1 + num2)
//    return result
    return num1 + num2
}
twoNumber(1, 2 )

function loginUserMessage(username = "sam"){
    return `${username} is loggin` 
}
console.log(loginUserMessage("urba"))
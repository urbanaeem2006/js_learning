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
// console.log(loginUserMessage("urba"))

function calculateCardPrice(...num1){
    return (num1)
}
console.log(calculateCardPrice(200, 300, 400, 500))

const user = {
    username: "urba",
    price: "200"
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)

}
handleObject(user)

const newArray = [200, 300, 400, 600]

function returnSecondValue(anyArray){
    return anyArray[2]
}
// console.log(returnSecondValue(newArray))   
// two tyes of function in define arrays or objects
console.log(returnSecondValue([200, 300, 400, 600]))
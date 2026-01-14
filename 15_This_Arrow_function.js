// current context refer use to this. 
const user = {
    username: "urbanaeem",
    price: "200",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to this website`)
    } 
}
// user.welcomeMessage()
// user.username = "Mavia"
// user.welcomeMessage()

// function chai(){
//     let username = "urba"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "urba"
//     console.log(this.username)
// }


// const chai = () => {
//     let username = "urba"
//     console.log(this.username)
// }


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2
// implicit return

const addtwo = (num1 , num2) => (num1 + num2)

console.log(addtwo(3 , 4))
// primitive

//7 Types : string, Number, Boolean, null, undefined, symbol, Bigint

  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false
  const outsidetemp = null
  let userEmail = undefined

  const id = symbol('123')
  const anotherId = symbol('123')

  console.log(id === anotherId);

  const bigNumber = 35835328594364893n
  

// Reference (Non primitive)

//Array,  Objects, function


const heros = ["urba", "hurriara", "mavia"];
{
    name: "urba"
    age: 18

}
const myfunction = function(){
        console.log("hello world")
}


///// ========================================

// Stack(primitive), Heap(Non-primitive)

let myYoutubename = "urbanaeem"

let anothername = myYoutubename
anothername = chaiourcode

console.log(myYoutubename)
console.log(anothername)


let userOne = {
  email: "urbanaeem@google.com"

}
let userTwo = userOne

userTwo.email = "urba.com"

console.log(userOne.email)
console.log(usertwo.email)

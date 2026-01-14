function  multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
   this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = createUser("urba", 25)
const tea = createUser("mavia", 250)

chai.printMe()


// A new object is created: the new keyword initiates the 
// creation of a new javaScript object.A


// A prototypes is linked: The newly created object gets linked 
// to the prototypes property of thr constructor function.
// This means that it has access to properties and methods
// defined on the constuctor's prtotypes.


// The Constructor is called: The construtor Function is called
//  with the specified arguments and this is bound to the newly
//  created object.  If no explicit return value is specified Form
//  the constructor, Javascript assumesthis,the newly created object,
//  to be the return value...


// The New object is returned



// =========================== prototypes ==================

// let myName = "urba naeem"

// console.log(myName.truelength)


let myHeros = ["urba", "mavia"]


let heroPower = {
    urba: "hammer",
    mavia: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.urba}`)
    }
}


object.prototype.urba = function(){
    console.log(`urba is present in all objects`)
}

//heroPower.urba()

//myHeros.urba()

Array.prototype.heyUrba = function(){
    console.log(`urba says hello`)
}

myHeros.urba()
myHeros.heyUrba()
heroPower.heyUrba

           // =======================Iheritance=====================
const User = {
    name: "chai",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideo: "true",

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
// Teacher__proto__ = user

//     Modern syntax
object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`)
}

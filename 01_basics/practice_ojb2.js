//const tinderUser = new Object() 
// this is a singletan obj

const tinderUser = {}
tinderUser.email = "urba@gmail.com"
tinderUser.name = "urba"

//console.log(tinderUser)

const myobject = {
    email : "u@gmail.com",
    fullname :{
        userfullname : {
            firstname: "urba",
            lastname: "naeem"
        }
    }
}
//console.log(myobject.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign( {}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3);

const User = [
    {
        id: 1, 
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    }
    
]
User[1].id

console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))


const coures = {
    coursename: "js hindi",
    price : "999",
    // courseInstructor: "urba"
}
// coures.courseInstructor

const {courseInstructor : instructor} = coures
console.log(instructor)

const myself = {
    name: "urba",
    age: "18"
}
// this is called a de structure
// myself.name

const {age} = myself
console.log(age)

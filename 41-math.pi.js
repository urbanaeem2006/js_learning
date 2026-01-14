const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter)

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
    name: "simpleChai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Don't run")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, "name",{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        
        console.log(`${key} : ${value}`)

    }
    }
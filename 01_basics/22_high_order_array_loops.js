//for of

// ["", "", "",]

// [{}, {}, {},]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greeting = "hello world!"

for (const string of greeting) {
    // console.log(string)
}

const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "united states of America")
map.set('FR', "France")

// console.log(map)

for (const [key, value] of map) {
//  keys ande value seperate this syntax
    // console.log(key,":-", value)
}

// const object = {
//     "name": "urba",
//      "age": "18",
// }
// for (const [key , value] of object) {
//     console.log(key, ":-", value)
// }

const myObject = {
    'game1': 'nfs',
    'game2': 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }
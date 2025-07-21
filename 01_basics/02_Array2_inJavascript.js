const names = ["urba","mano", "mavia", "hurriara" ]
const fruits = ["apple", "mango","banana", "orange"]
//names.concat(fruits)
//console.log(names)

// names.push(fruits)  push value are add in arrays 
//console.log(names)

// names.concat(fruits) its join two or more arrays into one array

//const all_new_fruits= [...names, ... fruits]
//console.log(all_new_fruits)

// const thing = ["table", "chair", "bag"]
// const hello = ["urwa", "naeem", "mano"];
// thing.concat(hello)


const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]] 

// this situation in many arrays in one array

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


const arr = [0,1,2,3,4,5,6,7,8,9];

const map = arr.map(function(param) {
    console.log(param)
  return param*2;
})

console.log(map)
// function mycard (num1){
//     console.log(num1)
// }
// mycard(6)

// function mycard2(num2, num3){
//     return num2 ,num3
// }
// console.log(mycard2(2, 3))

// function myself(...num6){
//     return num6
// }
// console.log(myself(8,200,500,600))

// const user = {
//     name: "urba",
//     age: 18,

// }
//  function handleobject(thisobject){
//     console.log(`name is ${thisobject.name} and age is ${thisobject.age}`)
//  }
// handleobject(user)
// // handleobject({
//       name: "mano",
//      age: 20
//  }
//  )

// const myNewArray = [200,100,500]

// function returnSecondValue(getArrays){
//      return getArrays[2]
// }
// console.log(returnSecondValue);

 const thisArray = [1, 2, 4, 6]

 function firstValue(arrays){
     return arrays[2]
 }
 console.log(firstValue(thisArray))
 console.log(firstValue([
    1, 2, 4, 6
 ]))

// objects declare 2 types  literal, constructor
// singleton 
//object.create
// constructor use this is a singleton

// object literal

//const mySym = Symbol("key1")

// const JsUser = {
//     name: "urba",
//     [mySym]: "myKey1",
//     age: 18,
//     email: "urbanaeem@gmail.com",
//     location: "rawalpindi",
//     greetingtwo: function(){
//         console.log(`hello js, ${this.name}` )
//     }
// }
//console.log(JsUser.email)
///console.log(JsUser["email"])
//console.log(JsUser[mySym])

//JsUser.email = "manonaeem@gmail.com"   
// in object change the value

//console.log(JsUser.email)
// Object.freeze(JsUser)  

//  object is freeze they are not change the value

//JsUser.name = "mano"
// console.log(JsUser.name)

// JsUser.greeting = function() {
//     console.log('Hello js');
// }

// console.log(JsUser.greetingtwo());

    // const JsFile = {
    //     name : "urba",
    //     age: 18,
    //     location: "rawalpindi",
    //     greeting: function( ){
    //         console.log(`hello, world ${this.name}`)
    //     }
        
    // } 
// const JsFile2 = {
//     name : "mano",
//     age: 18,
//     location: "rawalpindi",
//     greeting: function( ){
//         //console.log(`hello, world ${this.name}`)
//     }
    
// } 
// //console.log(JsFile.greeting(), JsFile2.greeting())

// JsFile2.name = "urba"
// console.log(JsFile2.name)
// Object.freeze(JsFile2)
// JsFile2.age = 20
// greeting = function(){
//     console.log(`${this.name}`)
// }
// console.log(greeting())
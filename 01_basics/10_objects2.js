// const tinderUser = new object() this is a single tuned object

//const tinderUser = { } this is a non-single tuned object
// const theUser = {}
// theUser.name = "urba"
// theUser.email = "urbanaeemgmail.com"
// theUser.isLoggedIn = false

// const theUser = {
//     name: "urba",
//     email: "urbanaeem@gmail.com",
//     isLoggedIn : true,
// }
// console.log(theUser)

// //console.log(theUser)

// // const regularUser = {
// //     email: "urbanaeem@gmail.com",
// //     fullname:{
// //         userfullname:{
// //            firstname: "urba",
// //            lastname: "naeem",
// //         }
// //     }
// // }
// //console.log(regularUser.fullname.userfullname)

// //const obj1 = {1: "a", 2: "b"}
// //const obj2 = {3: "a", 4: "b"}

// //const obj3 = {obj1 , obj2}
// //Object.assign({}, obj1,obj2)

// //  const obj3 = Object.assign({},obj1, obj2)
// //  console.log(obj3)

//  //const obj3 = {...obj1, ...obj2}
//  //console.log(obj3);

//  const user = [
//     {
//         id: 1,
//         email: "urbanaeem@gmail.com",
//     },
//     {
//         id: 1,
//         email: "urbanaeem@gmail.com",
//     },
//     {
//         id: 1,
//         email: "urbanaeem@gmail.com",
//     }
//  ]
//  user[1].email
// // console.log(theUser)  
//  //console.log(Object.keys(theUser))
//  ////console.log(Object.values(theUser))
//  //console.log(Object.entries(theUser))

//  //console.log(theUser.hasOwnProperty("emai"))

//  const myName = {
//     email: "u@gmail.com",
//     fullname:{
//         fullusername:{
//               firstname: "urba",
//               lastname: "naeem",
//         },
//     }
//  }
//  //console.log(myName.fullname.fullusername.lastnamex)

//  const obj1 = {1: "a", 2: "b"}
//  const obj2 = {3: "a", 4: "b"}

//  const obj3 = Object.assign( {},obj1, obj2)
//  console.log(obj3)

const theUser = {
    greeting: function (param) {
      console.log(param)
    }
} 
console.log(theUser.greeting(12345))
    
    

//console.log(theUser.fullusername.fullemail.lastname)
//console.log(theUser.name)
// Object.freeze(theUser)
//console.log(theUser.email)

const obj= {
    userFirstName: 'Hashir',
    age: 28,
    number: 12345,
    email: 'hashir@gmail.com',
};

const {userFirstName: name, age, number, email} = obj;
fetch("https://api.github.com/users/hiteshchoudhary")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // You can access specific fields like:
    const {login, followers, bio} = data;
        console.log(login, followers, bio);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

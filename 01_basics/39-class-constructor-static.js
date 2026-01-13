 //ES6

//  class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptoPassword(){
//         return `${this.password}abc`

//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
//  }

//  const chai = new User("chai", "chai@gmail.com", "123")

//  console.log(chai.encryptoPassword());
//  console.log(chai.changeUsername());


 // Behind the Scene

 function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
 }

 User.prototype.encryptoPassword = function(){
    return `${this.password}abc`
 }

 User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase}`
 }

 const tea = new User("tea", "tea@gmail.com", "123")
 console.log(tea.encryptoPassword());
 console.log(chai.changeUsername)


//  ==============================Inheritance============================

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.addCourse()

console.log(chai instanceof User)

// ============================ static prop======================
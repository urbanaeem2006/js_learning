// .call hold a reference

function setUserName(username){
    //Complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email 
    this.password = password
}

const chai = new createUser("chai", "example@gmail.com", "123")
console.log(chai)

// ====================== Static Properties====================

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username${this.username}`)
    }
   static createId(){
        return `123`
    }
}
const urba = new User("urba")
console.log(urba.createId())


class Teacher extends User{
    constructor(username, email){
        supper(username)
        this.email = email
    }
}
 
const phone = new ("phone", "1@gmail.com")

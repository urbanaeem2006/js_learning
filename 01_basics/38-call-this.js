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
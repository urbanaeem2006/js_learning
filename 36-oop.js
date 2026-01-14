// literal object

// object is a literal object and base unit

// this is a current context 
// and browser call this we have a window object and global obj
const user = {
    username: "urba naeem",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got User Details from Data Base")
       // console.log(`username: ${this.username}`)
       console.log(this)
    }
    
}
console.log(user.username)
//console.log(user.getUserDetails())
console.log(this)

// ============== Constructor Function ============

// new is a constructor function
//new allow one object to create multiple instances
// new allow to create new context

const PromiseOne = new Promise()
const date = new Date()
const object = new object()


function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("urba", 12, true)
const userTwo = new User("chai", 12, false)
console.log(userOne)

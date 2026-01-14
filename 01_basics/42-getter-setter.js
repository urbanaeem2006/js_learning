// Learning about Getter Setter

class User {
    constructor( email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email (value){
        this._email = value
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const urba = new User("urba@gmail.com", "123")
console.log(urba.password)
console.log(urba.email)



// =================== getter and setter create with function================

function User(email, password){
        this._email = email;
        this._password = password

        Object.defineProperty(this, "email", {
            get: function(){
                return this._email.toUpperCase
            },
            set: function(value){
                this.email = value
            }
        })
        Object.defineProperty(this, "password", {
            get: function(){
                return this._password.toUpperCase
            },
            set: function(value){
                this.password = value
            }
        })
}
const chai = new User("g@gmail.com", "123")
console.log(chai.email
    
)

// ============ Getter and Setter create with objects==================

const User=  {
    _email:  "u@gmail.com",
    _password: "123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
console.log(User.email)
const tea = Object.create(User)
console.log(tea.email)


class User{
    constructor(email, password){
        this._email = email,
        this._password = password
    }
    get  password(){
        return this._password.toUpperCase()
    }
    set email(value){
        this.email = value
    }
}
const urba1= new User("u@gmail.com", "123")
console.log(urba1)


class urba4{
    constructor(usename, password){
        this._username = username,
        this._password = password
    }
    get username(){
        return this._username.toLowerCase()
    }
    set username(value){
        this._username = value
    }
}

const person = new urba4("urbanaeem", "123")
console.log(person.username)
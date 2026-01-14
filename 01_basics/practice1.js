class Urba{
    constructor(email, password){
        this._email = email;
        this._password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = value
    }
}
const super1 = new Urba("u@gmail.com", "123")
console.log(super1.password)

const User=  {
    _email: "u@gmail.com",
    _username: "urba",

    get email(){
        return this._email.toLowerCase
    },
    set email(val){
        this._email = val
    }
}
const hero = Object.create(User)
console.log(hero.password)


function market(username, email){
    this.email = email,
    this.username = username

    Object.defineProperty(this, "email",{
        get: function(){
            return this._email.toUpperCase
        },
        set: function(val){
            this._email = val
        }
    })
}

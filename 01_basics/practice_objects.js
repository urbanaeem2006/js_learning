mySym = Symbol(key1)

const JsUser = {
    name: "urba",
    age: 18,
    [mySym]: "key1",
    location: " rawalpindi",
    email: "urbanaeem@gmail.com"
}
console.log(JsUser.email),
console.log(JsUser["email"]),

JsUser.greeting = function(){
    console.log(`hello world, ${this.email}` )
    //  same object reference to use this.
}


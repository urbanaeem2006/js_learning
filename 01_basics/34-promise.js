const promiseOne = new Promise( function(resolve, reject){
    //Do an async task
   // DB calls, cryptography, Network

   setTimeout(function(){
    console.log('Async task is complete')
    resolve()
   }, 1000)
})

promiseOne.then( function(){
    console.log("promise consumed")
})

new promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then( function(){
    console.log("async 2 resolved")
})

const promiseThird = new promise( function(resolve, reject){
    setTimeout(function(){
        resolve({username: "urba", email: "urbanaeem@gmail.com"})
    }, 1000)
})

promiseThird.then( function(user){
    console.log(user)
})

const promiseForth = new promise( function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "urba", password: "1234"})
        } else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseForth
.then(function(user){
    console.log(user)
    return user.username
})
.then( function(username){
    console.log(username)
})
.catch( function(error){
    console.log(error)
}).finally( function(){
    console.log("finall")
})


const promiseFive = new promise( function(resolve, reject){
    setInterval( function(){
    let arror = true
    if (!error) {
        resolve({username: "urbanaeem", password: "123"})
    } else {
        reject("ERROR: JS went wrong")
    }
}, 1000)
})

async function  consumePromiseFive(){
  try {
  const response =   await promiseFive
  console.log(response)
  } catch (error) {
    console.log(error)
  }
}

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data)

    } catch (error) {
        console.log(error)
    }
}

getAllUsers()


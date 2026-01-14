const userEmail = "urba@gmail.com"

if(userEmail){
    console.log("got user email")
} else {
    console.log("dont have user email")
}

//falsy values

// false 0, -0, BigInt 0n,  "", null, undefined, NaN,

// truthy values
// "0", "false", " ", [], {}, function(){ }, 

// if (userEmail === 0 ){
//     console.log("arrays is empty");  empty array check
// }

const emptyObj = {}

if(Object.keys(emptyObj).lenght === 0){
    console.log("obj is empty")
}

// false == 0
// true

// false == ""
// true

// 0 == ""
// true

// Nullish coalescing operator (??): null, undefined
let value1;
//  value1 = null ?? undefined
// value = null ?? 10
// value = undefined ?? 15
// value =  null ?? 10 ?? 20


//  console.log(value1);

// Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 90 ? console.log("less than 90") : console.log("more than 90")
 
 



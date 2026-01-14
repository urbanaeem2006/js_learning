const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal)


const shoppingcard = [
    {
         itemName: "js course",
         price: 2999
    },
    {
         itemName: "py course",
         price: 2999
    },
    {
         itemName: "ruby course",
         price: 2999
    },
]
const pricetoPay = shoppingcard.reduce( (acc, item) => acc + item.price, 0 )
console.log(pricetoPay)
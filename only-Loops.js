//  For Each
//For Each not return a value
const coding = ["js", "java", "ruby", "python", "cpp"]

const values = coding.forEach( (item ) => {
    //console.log(item)
    return item
})
//console.log(values)

      //Filter loop
     // Filter is a call back
    // Filter return a value
   //scope {} open must be use return key word
  // Filter check condition true

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter( ( num) => num > 4)
//console.log(newNums)

const Books = [
    { title: 'Book One', genre: 'history', publish: 1981,
    edition: 2004},

    { title: 'Book Two', genre: 'history', publish: 1992,
    edition: 2008},

    { title: ' Book Three', genre: 'history'}
]

//const userBooks = Books.filter( ( bk) =>  bk.genre == "history") 
const userBooks = Books.filter( (bk) => bk.publish < 2000)

//console.log(userBooks)

         //Map
        //Map automatic return a value
       //scope {} open must be use return key word

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const newNumber = myNumber.map( ( num) => num + 10)
//console.log(newNumber)

        // Channing

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumber = myNumber
.map( (num ) => num * 10 )
.map( ( num) => num + 1 )
//console.log(newNumber)

          //  Reduce

// const myNums1 = [1, 2, 3]
//  const myTotal = myNums1.reduce( function ( acc, currval) {
//     return acc + currval 
//  } , 0)
 //console.log(myTotal)

 const myTotal = myNums1.reduce( ( acc, currval) => acc + currval, 0)
 //console.log(myTotal)

const shoppingitem = [
    {
        itemName: "js course",
        price: "2999"
    },
    {
        itemName: "py course",
        price: "2999"
    },
    {
        itemName: "ruby course",
        price: "2999"
    },
    {
        itemName: " mobile dev course",
        price: "2999"
    },
]

shoppingitem.reduce( (acc,  item) => acc +  item.price,0)

    

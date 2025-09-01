//const coding = ["java", "c++", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// // forEach not return a value

// console.log(value)

// .filter return a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)


// we use curley braces return must be use
// const newNums = myNums.filter( (num) => {
//   return  num > 4
// })
// console.log(newNums)

// const newNums = []
 
// myNums.forEach( () => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const Books = [
    { title: 'Book One', genre: 'history', publish: 1981,
    edition: 2004},

    { title: 'Book Two', genre: 'history', publish: 1992,
    edition: 2008},

    { title: ' Book Three', genre: 'history'}
]

// let myBooks = Books.filter( (bk) => (bk.genre === 'history'))

myBooks = Books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === "history"})
console.log(myBooks)

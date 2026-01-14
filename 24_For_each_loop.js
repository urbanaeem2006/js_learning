const cooding = ["js", "c++", "py", "ruby", "java"]

cooding.forEach( function  (val){
    // console.log(val)
})

cooding.forEach( (val) => {
    // console.log(val)
})

function printMe(item){
    // console.log(item)
}
// cooding.forEach(printMe)

cooding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]
myCoding.forEach( (item) => {
    console.log(item.languageName)
})
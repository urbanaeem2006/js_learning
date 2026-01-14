// Immediately Invoked Function Expression (IIFI)

(function chai(){
    // named IIFI
    console.log(`DB CONNECT`)
})();

((name) => {
    console.log(`DB CONNECT ${name}`)
} )("urba");
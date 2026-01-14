// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let setIntervalId;
const startChangingcolor = function(){

    if (!setIntervalId) {
         setIntervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor  (){
         document.body.style.backgroundColor = randomColor()
    }
        
}
const stopChangingcolor = function(){
    clearInterval(setIntervalId)

    setIntervalId = null;
    console.log("stop")
}


document.querySelector("#start").addEventListener
("click", startChangingcolor)

document.querySelector("#stop").addEventListener
("click", stopChangingcolor)

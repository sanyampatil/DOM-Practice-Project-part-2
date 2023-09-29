const randomColor = function () {

    let hex = "#"
    let hexValue = "1234567890ABCDEF"
    for (let i = 0; i < 6; i++) {
        hex += hexValue[Math.floor(Math.random() * 16)]
    }
    return hex;

}
// console.log(randomColor())
let body = document.querySelector("body")
let interValid

const startChangingColor = function () {
    interValid = setInterval(ChangeBgColor, 1000)
    function ChangeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}



let stopChangingColor = function () {

    clearInterval(interValid)
}
document.querySelector(".start").addEventListener("click", startChangingColor)
document.querySelector(".stop").addEventListener("click", stopChangingColor)
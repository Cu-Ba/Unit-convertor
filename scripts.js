/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthBox = document.getElementById("length-box")
const volumeBox = document.getElementById("volume-box")
const massBox = document.getElementById("mass-box")
const inputNum = document.getElementById("input-num")
const btnEl = document.getElementById("btn-el")
btnEl.addEventListener("click", function() {
    let num = inputNum.value
    calculate(num)
})

function calculate (num) {
    let length = (Number(num) * 3.281)
    lengthBox.innerHTML = `${inputNum} meters = ${lenght.toFixed(3)} feet`
}
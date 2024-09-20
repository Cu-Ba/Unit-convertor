/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feets = 3.281
const gallons = 0.264
const pounds = 2.204
const lengthBox = document.getElementById("length-box")
const volumeBox = document.getElementById("volume-box")
const massBox = document.getElementById("mass-box")
const inputNum = document.getElementById("input-num")
const btnEl = document.getElementById("btn-el")

btnEl.addEventListener("click", function() {
    let num = inputNum.value
    calculateLength()
    calculateVolume()
    calculateMass()
})

function calculateLength() {
    getValue()
    let value = getValue()
    let feet = (value * feets).toFixed(3)
    let meters = (value / feets).toFixed(3)
    print(lengthBox, value, "Meters", feet, "Feets", meters )
}

function calculateVolume() {
    getValue()
    let value = getValue()
    let gallon = (value * gallons).toFixed(3)
    let liters = (value / gallons).toFixed(3)
    print(volumeBox, value, "Gallons", gallon, "Liters", liters )
}

function calculateMass() {
    getValue()
    let value = getValue()
    let pound = (value * pounds).toFixed(3)
    let kilos = (value / pounds).toFixed(3)
    print(massBox, value, "Pounds", pound, "Kilos", kilos )
}

function getValue() {
    let data = inputNum.value
    if (isNaN(data)) {
        console.log("Please enter a valid number.")
        return null
    } else {
        return data
    }
}

function print(element, num, arg, res, argAlt, resAlt) {
    element.innerHTML = `<p> ${num} ${arg} = ${res} ${argAlt} | ${num} ${argAlt} = ${resAlt} </p> `
    console.log("Printer running on")
}
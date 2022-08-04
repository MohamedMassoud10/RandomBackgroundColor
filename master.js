let btn = document.querySelector(".container .btn");
let hex = document.querySelector(".container .color .blue")
let background = document.querySelector(".container")
let SimpleHex = document.querySelector(".Simple-Hex")
let realColor = document.querySelector(".color-flipepr")
window.onload = function () {
    if (window.localStorage.getItem("colors")) {
        hex.innerHTML = window.localStorage.getItem("colors");
        background.style.backgroundColor = window.localStorage.getItem("colors") ;
    }
}
getColorsFromLocalStorage();
function clicked() {
    btn.onclick = function () {
    addHexColor();
}
}
function clickedTwo() {
    btn.onclick = function () {
    hex.innerHTML = "";
    addRealColor();
    }
}

//console.log(`#${colorArray.join("")}`)
SimpleHex.addEventListener("click", () => { clicked(); })
realColor.addEventListener("click", () => {clickedTwo();})

function addHexColor() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorArray = [];
for (let i = 1; i <= 6; i++){
    colorArray.push(array[Math.floor(Math.random() * array.length)])
    }
    hex.innerHTML = `#${colorArray.join("")}`
    background.style.backgroundColor = `#${colorArray.join("")}`;
    addColorsToLocalStorage(`#${colorArray.join("")}`);
}

function addRealColor() {
    let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    let Color = color[Math.floor(Math.random() * color.length)];
    hex.innerHTML = Color;
    background.style.backgroundColor = Color;
    addColorsToLocalStorage(Color)
}

function addColorsToLocalStorage(color) {
    window.localStorage.setItem("colors",color)
}
function getColorsFromLocalStorage() {
    let data = window.localStorage.getItem("colors")
}



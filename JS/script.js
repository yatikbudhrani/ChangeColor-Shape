let body = document.querySelector("body");
let outerDiv = document.querySelector("#outer");
let innerDiv = document.querySelector("#inner");
let colorButton = document.querySelector("#colorChange");
let shapeButton = document.querySelector("#shapeChange");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

let backgroundColor = [
    "lightcyan",
    "lightgoldenrodyellow",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightyellow",
    "lightorange",
];

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
}

colorButton.addEventListener("click", () => {
    audio.play();
    let newColor = randomRGB();
    let bgColor = Math.floor(Math.random() * backgroundColor.length);
    body.style.backgroundColor = backgroundColor[bgColor];
    body.style.transition = "0.5s ease-in-out";
    outerDiv.style.backgroundColor = newColor;
    outerDiv.style.transition = "0.5s ease-in-out";
});

let shapes = [
    "inner",
    "diamond",
    "triangle",
    "circle",
    "rabbet",
    "rectangle",
    "cross",
    "frame",
    "leftArrow",
    "rightPoint",
];

function shapeSelect() {
    const randomid = Math.floor(Math.random() * shapes.length);
    return shapes[randomid];
}

shapeButton.addEventListener("click", () => {
    audio.play();
    let idname = shapeSelect();
    innerDiv.id = idname;
    innerDiv.style.transition = "1s ease-in-out";
});

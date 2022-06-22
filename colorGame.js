let colors = [];
/*const colors = [
    "rgb(48, 165, 44)",
    "rgb(160, 140, 242)",
    "rgb(26, 156, 46)",
    "rgb(194, 89, 209)",
    "rgb(250, 221, 231)",
    "rgb(100, 176, 195)"
];*/
let cuadrados = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.querySelector("#colorDisplay");
let clickedColor;
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
colors = generateRandomColors(6);
let reset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let cantidadCuadrados;

for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;

    cuadrados[i].addEventListener("click", function () {
        
        clickedColor = colors[i];


        if (pickedColor === clickedColor) {

            changeColors(pickedColor);
            message.textContent = "¡Correcto!";
            reset.textContent = "Play Again?";
            h1.style.backgroundColor = clickedColor;
        } else {
            cuadrados[i].style.backgroundColor = "#232323";
            message.textContent = "Inténtalo nuevamente";
        }
    })
};


function changeColors(color) {
    for (let i = 0; i < cuadrados.length; i++) {

        cuadrados[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var pickRandomColor = Math.floor(Math.random() * colors.length);

    pickedColor = colors[pickRandomColor];
    return pickedColor;

};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
};
function generateRandomColors(cantidadColores) {
    let newColors = [];
    for (let i = 0; i < cantidadColores; i++) {
        newColors.push(randomColor());

    }
    console.log(newColors);
    return newColors;
}

reset.addEventListener("click", function () {
    colors = generateRandomColors(cantidadCuadrados);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];

    }
    message.textContent = "";

})
hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    cantidadCuadrados = 6;
    colors = generateRandomColors(cantidadCuadrados);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
        if(colors[i]!=undefined){
        cuadrados[i].style.backgroundColor = colors[i];
        cuadrados[i].style.display = "block";
    }
    }
    message.textContent = "";
})
easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    cantidadCuadrados = 3;
    colors = generateRandomColors(cantidadCuadrados);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    console.log(colors);

    for (i = 0; i < cuadrados.length; i++) {
        if (colors[i]!= undefined){
            cuadrados[i].style.backgroundColor = colors[i];
            cuadrados[i].style.display = "block";
        }else{
          cuadrados[i].style.display = "none";
    
        }
    }
    message.textContent = "";
})

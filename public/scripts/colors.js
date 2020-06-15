let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".colors-square");
let pickedColor = pickColor();
let colorDisplay= document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(6);

    //pick new random color for winner
    pickedColor = pickColor();

    //change square colors & display
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    this.textContent = "New Game"
    messageDisplay.textContent = "Pick A Colour"
})

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor)
        } else {
            this.style.backgroundColor = "#757A82"
            messageDisplay.textContent = "Try Again"
        }
    })
};


function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color
    }
};

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
};

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i <num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    const color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color
}
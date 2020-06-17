$("div.ui.container .item").removeClass("active")

$("#projects-button").css({
    "background": "whitesmoke",
    "color": "#525E67",
    "font-weight": "800"
})

var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

var colorDisplay = document.querySelector("#rgbNumber");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");


function init(){

    setUpModeButtons();

    setUpSquares();

    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selectedDifficulty");
            modeButtons[1].classList.remove("selectedDifficulty");
            modeButtons[2].classList.remove("selectedDifficulty");
            this.classList.add("selectedDifficulty");

            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Hard"){
                numSquares = 6;
            }
            else {
                numSquares = 9;
            }

            reset();

        })
    }
}

function setUpSquares(){
    // Looping through the squares to assign color and create wrong/right mechanic through event listeners
    for(var i = 0; i < squares.length; i++){
        // Change Inital Colors of Squares
        squares[i].style.backgroundColor = colors[i];

        // Add Click Listener to squares
        squares[i].addEventListener("click", function(){
            // Get color of clicked square
            var clickedColor = this.style.backgroundColor;

            // Compare color to correct color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "You Got It Right!";
                changeColours(pickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

function reset(){
    // Genereate New Colors
    colors = generateRandomColors(numSquares);

    // Pick new winning color
    pickedColor = pickColor();

    // Change color display to match winning color
    colorDisplay.textContent = pickedColor.toUpperCase();

    // Apply colors to square
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }

    // Change text on button back and header background
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
    }
}

// Changing square color on correct guess
function changeColours(colorString){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colorString;
    }
}

// Picking the winning color
function pickColor(){
    var num = Math.floor(Math.random() * colors.length)
    return colors[num]
}

// Creates array of random colors
function generateRandomColors(num){
    // Make array
    var arr = [];

    // Repeat num times
    for(var i = 0; i < num; i++){
        // Get random color
        arr.push(randomColor());
    }

    return arr
}

// Picks a random color
function randomColor(){
    // Pick a 'red', 'green' and 'blue' between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

// Mechanic for reset button
resetButton.addEventListener("click", function(){
    reset();
})

init();

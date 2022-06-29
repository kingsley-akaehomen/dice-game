
var randonNumber1 = Math.floor(Math.random() * 6) + 1; // random number btw 1 - 6

var randomDiceImage = "dice" + randonNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// winner message

if(randonNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins..yee";
} else if(randomNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins..yee";
} else{
    document.querySelector("h1").innerHTML ="Its a draw!!";
}
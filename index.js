var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dicePicArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var arrayPosition1 = randomNumber1 - 1;
var arrayPosition2 = randomNumber2 - 1;

document.querySelector("img.img1").setAttribute("src", dicePicArray[arrayPosition1]);

document.querySelector("img.img2").setAttribute("src", dicePicArray[arrayPosition2]);

if (arrayPosition1 < arrayPosition2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelector(".player2").innerHTML = " 🚩 Player 2";
} else if (arrayPosition1 > arrayPosition2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector(".player1").innerHTML = " 🚩 Player 1"
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

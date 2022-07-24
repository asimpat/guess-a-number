"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 29;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const messageDisplay = function(message) {
    document.querySelector(".message").textContent = message;
};
const numberDisplay = function(number) {
    document.querySelector(".number").textContent = number;
};
// const secretDisplay = function (secret) {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     secretNumber = secret;
// }
const scoreDisplay = function(score) {
    document.querySelector(".score").textContent = score;
};
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(typeof guess, guess);
    //when there is no input
    if (!guess) {
        messageDisplay(" ⛔ Not a Valid Number ");
        //when there is a win
    } else if (guess >= 21 || guess <= 0) {
        messageDisplay("Number between 1 and 20");
    } else if (guess === secretNumber) {
        // document.querySelector(.message).textContent="correct number";
        messageDisplay("🎉 Correct Number!");

        document.querySelector("body").style.backgroundColor = " #60b347";
        document.querySelector(".number").style.width = "30rem";
        numberDisplay(secretNumber);
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        //when the guess is high and not correct
    } else if (guess !== secretNumber) {
        if (score > 1) {
            messageDisplay(guess > secretNumber ? "📈 too High" : "📉  too Low");
            score--;
            scoreDisplay(score);
        } else {
            messageDisplay("💥 You lost!");
            scoreDisplay(0);
        }
    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📈 too High";
    //         score--;
    //         document.querySelector(".score").textContent = score;

    //     } else {
    //         document.querySelector(".message").textContent = "💥 You lost!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    //     //when the guess is low and not correct
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉 too Low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         console.log(score);
    //     } else {
    //         document.querySelector(".message").textContent = "💥 You lost!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    numberDisplay("?");
    scoreDisplay(score);
    // document.querySelector(".highscore").textContent = 0;

    messageDisplay("Start guessing...");
    document.querySelector("body").style.backgroundColor = " #222";

    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
});
"use strict";

let userInput = prompt("Enter an integer:").trim();

if (userInput === null || userInput === "" || isNaN(userInput) || !Number.isInteger(Number(userInput))) {
    console.log("Error: Invalid value entered.");
} else {
    let userNumber = Number(userInput);

    if (userNumber <= 1) {
        console.log("The number is not prime. 1");
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(userNumber); i++) {
            if (userNumber % i === 0) { 
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("The number is prime.");
        } else {
            console.log("The number is not prime.");
        }
    }
}
"use strict";
 
const input = prompt("Введіть ціле число:");

function isPrime(num) {
    if (num <= 1) return false; // Числа ≤ 1 не є простими
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function validateInput(input) {
    // Перевірка на null, порожні рядки або невірний формат
    if (input === null || input.trim() === '' || !/^-?\d+$/.test(input.trim())) {
        return { valid: false, message: "Помилка: введено некоректні дані." };
    }

    const number = parseInt(input.trim(), 10);

    // Числа менше або дорівнюють 1 не є простими
    if (number <= 1) {
        return { valid: false, message: "Число не є простим." };
    }

    // Перевірка, чи є число простим
    if (isPrime(number)) {
        return { valid: true, message: "Число є простим." };
    } else {
        return { valid: false, message: "Число не є простим." };
    }
}

const result = validateInput(input);
alert(result.message);
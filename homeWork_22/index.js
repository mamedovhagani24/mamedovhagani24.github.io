"use strict";

// циклы (1)

function FicobacciNumber(number) {
    let result = 0;
    let prevResult = 1;
    let prePrevResult = 1;

    if (number > 2) {
        for (let i = 2; i < number; i++) {
            result = prevResult + prePrevResult;

            prePrevResult = prevResult;

            prevResult = result;
        }
    } else if (number === 0) {
        return 0;
    } else {
        return 1;
    }

    return result;
}

console.log(FicobacciNumber(5));

// console.log(FicobacciNumber(5));

// // Рекурсия (1)

// function ficobacciNumber(number) {

//     if (number < 1) return 0
//     if (number < 3) return 1

//     return ficobacciNumber(number - 1) + ficobacciNumber(number - 2);
// }


// console.log(ficobacciNumber(-1));
// console.log(ficobacciNumber(0));

// console.log(ficobacciNumber(5));
// console.log(ficobacciNumber(2));


// // Рекурсия (2)

// function Factorial(number) {
//   return number > 0 ? number * Factorial(number - 1) : 1;
// }

// console.log(Factorial(0));
// console.log(Factorial(-10));

// // Циклы (2)

// function Factorial(number) {
//   let result = 1;

//   for (let i = number; i > 0; i--) {
//     result *= i;
//   }

//   return result;
// }

// console.log(Factorial(3));

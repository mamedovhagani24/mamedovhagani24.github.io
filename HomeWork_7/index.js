/// first

// ? =========================================================

// const doesWant = confirm('Хотите ли вы пива? ')

// const beerMessage = (doesWant) ? "Вы хотите пива" : "Вы не хотите пива"

// console.log(beerMessage)

// if ===========================================================

// const doesWant = confirm('Хотите ли вы пива? ');

// let beerMessage;

// if (doesWant) {
//     beerMessage = "Вы хотите пива";
// } else {
//     beerMessage = "Вы не хотите пива";
// }

// console.log(beerMessage)

/// second

// ? --------------------------------------

// const userAge = prompt('CКолько вам лет ')

// const welcomeMessage = (userAge < 18) ? 
//   'Вход Запрещен' :
//   (userAge > 30) ? 'Welcome' : 'Hi!';

// console.log(welcomeMessage);

// if -------------------------------------

// const userAge = prompt('CКолько вам лет ')

// let welcomeMessage;

// if (userAge > 30) {
//     welcomeMessage = 'Welcome'
// } else if (userAge >= 18 && userAge < 30) {
//     welcomeMessage = 'Hi!'
// } else {
//     welcomeMessage = 'Вход Запрещен'
// }

// console.log(welcomeMessage)

/// third=======================================

// if =================================================

// const userChoise = confirm('Чай(Ok) или Кофе(Cancel)? ')
// const withSugar = confirm('Сахаром(Ok) или без захара(Cancel)? ')

// let choiseResult;

// if (userChoise && withSugar) {
//     choiseResult = 'Чай с сахаром' 
// } else {
//     choiseResult = 'Чай с без сахара'
// }

// if (!userChoise && withSugar) {
//     choiseResult = "Кофе с сахаром"
// } else {
//     choiseResult = 'Кофе с без сахара' 
// }


// console.log(choiseResult)

// ? -------------------------------------------------------

// const userChoise = confirm('Чай(Ok) или Кофе(Cancel)? ')
// const withSugar = confirm('Сахаром(Ok) или без захара(Cancel)? ')

// const choiseResult = (userChoise && withSugar) ? "Чай с сахаром" : 'Чай с без сахара' &&  (!userChoise && withSugar) ? 'Кофе с сахаром' : 'Кофе с без сахара';

// console.log(choiseResult)




/// first

// ? =========================================================

// const wantBeer = confirm('Хотите ли вы пива? ')

// const isWant = (wantBeer) ? "Вы хотите пива" : "Вы не хотите пива"

// console.log(isWant)

// if ===========================================================

// const wantBeer = confirm('Хотите ли вы пива? ')

// let isWant;

// if (wantBeer) {
//     isWant = "Вы хотите пива"
// } else {
//     isWant = "Вы не хотите пива"
// }

// console.log(isWant)

/// second

// ? --------------------------------------

// const userAge = prompt('CКолько вам лет ')

// const welcomeMessage = (userAge >= 18) ? (userAge > 30) ? 'Welcome' :'Hi!' : 'Вход Запрещен'

// console.log(welcomeMessage)

// if -------------------------------------

// const userAge = prompt('CКолько вам лет ')

// let welcomeMessage;

// if (userAge >= 18 && userAge > 30) {
//     welcomeMessage = 'Welcome'
// } else if (userAge >= 18 || userAge < 30) {
//     welcomeMessage = 'Hi!'
// } else {
//     welcomeMessage = 'Вход Запрещен'
// }

// console.log(welcomeMessage)

/// third=======================================

// if =================================================

// const userChoise = confirm('Чай(Ok) или Кофе(Cancel)? ')
// let withSugar = confirm('Сахаром(Ok) или без захара(Cancel)? ')

// let choiseResult;

// if (userChoise && withSugar) {
//     choiseResult = 'Чай с сахаром'    
// } else if (userChoise && !withSugar) {
//     choiseResult = 'Чай с без сахара' 
// } else if (!userChoise && withSugar) {
//     choiseResult = "Кофе с сахаром"
// } else {
//     choiseResult = 'Кофе с без сахара' 
// }

// console.log(choiseResult)

// ? -------------------------------------------------------

// const userChoise = confirm('Чай(Ok) или Кофе(Cancel)? ')
// const withSugar = confirm('Сахаром(Ok) или без захара(Cancel)? ')

// const choiseResult = (userChoise && withSugar) ? "Чай с сахаром" : (userChoise && !withSugar) ? 'Чай с без сахара' : (!userChoise && withSugar) ? 'Кофе с сахаром' : 'Кофе с без сахара'

// console.log(choiseResult)
function gameMoreLess(genericNumber) {

    alert('Добро пожаловать')
    alert('Программа загадала число от 1 до 100, вам нужно угадать это число')

    inProccess(genericNumber)
}

function returnRandomNumber () {
    return Math.floor((Math.random() * 100) + 1)
}


function inProccess(genericNumber) {
    let isProccess = true

    while(isProccess) {
        const userNumber = +prompt('Введите число')

        if (!userNumber) {
            return noValue();
        }

        if (userNumber > genericNumber) {
               alert("Много!");
          } else if (userNumber < genericNumber) {
               alert("Мало!");
          } else if (userNumber < 1 || userNumber > 100) {
               alert("Не тот диапазон!");
          } else if(isNaN(userNumber)) {
               alert ('Это не число')
          } else {
               isProccess = false
               return success()
          }
    }
}

function success() {
    alert ('Вы угадали')

    const playAgain = confirm('ты хочешь поиграть снова?')

    if (playAgain) return gameMoreLess(returnRandomNumber())

    alert( 'GameOver' )
}

function noValue () {
    alert('Игра окончена')

    const playAgain = confirm('ты хочешь поиграть снова?')
    if (playAgain) return gameMoreLess(returnRandomNumber())
    alert( 'GameOver' )
}

gameMoreLess(returnRandomNumber())